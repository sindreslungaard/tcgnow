import IndexPage from './pages/Index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
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
    );
};

export default App;
