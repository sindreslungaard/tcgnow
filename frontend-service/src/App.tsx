import IndexPage from './pages/Index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createContext } from 'react';
import { RecoilRoot } from 'recoil';

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <IndexPage />
                    </Route>
                    <Route exact path="/about">
                        About
                    </Route>
                </Switch>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
