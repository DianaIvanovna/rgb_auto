import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.scss";
import SitemapPage from "./component/SitemapPage/SitemapPage";

function App() {
    return (
        <Router>
            <div className="App">
                <React.Fragment>
                    <Switch>
                        <Route path="/sitemapPage" component={SitemapPage} />
                    </Switch>
                </React.Fragment>
            </div>
        </Router>
    );
}

export default App;
