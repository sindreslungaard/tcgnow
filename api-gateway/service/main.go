package main

import (
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"gopkg.in/yaml.v3"
)

type Service struct {
	Endpoint 	string `yaml:"endpoint"`
	Host 		string `yaml:"host"`
}

type Gateway struct {
	Port 		int 				`yaml:"port"`
	Services	map[string]Service 	`yaml:"services"`
}

func main() {

	configFile := flag.String("config", "", "-config ./config.yaml")

	flag.Parse()

	if *configFile == "" {
		panic("Missing -config flag")
	}

	file, err := ioutil.ReadFile(*configFile)

	if err != nil {
		panic(err)
	}

	var gateway Gateway

	err = yaml.Unmarshal(file, &gateway)

	if err != nil {
		panic(err)
	}

	port := fmt.Sprintf(":%v", gateway.Port)
	
	println("Listening on port", port)
	panic(http.ListenAndServe(port, http.HandlerFunc(gateway.handler)))

}

func (g Gateway) handler(w http.ResponseWriter, r *http.Request) {

	var match string
	var matchLen int

	for name, s := range g.Services {

		if !strings.HasPrefix(r.URL.Path, s.Endpoint) {
			continue
		}

		length := len([]rune(s.Endpoint))

		// overwrite existing match if this endpoint is more precise
		if length > matchLen {
			match = name
			matchLen = length
		}

	}

	// return error if no match was found
	if match == "" {
		io.WriteString(w, "404")
		return
	}
	
	service := g.Services[match]

	target, err := url.Parse(service.Host)

	if err != nil {
		panic(err)
	}
	
	proxy := httputil.NewSingleHostReverseProxy(target)

	println(r.Host + r.URL.Path, "->", target.Host + r.URL.Path)

	proxy.ServeHTTP(w, r)

}