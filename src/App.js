import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.scss";
import SitemapPage from "./component/SitemapPage/SitemapPage";
import ContactUsPage from "./component/ContactUsPage/ContactUsPage";
import {SVGSource} from "./component/shared/icons";

function App() {
    return (
        <Router>
            <div className="App">
                <SVGSource />
                <React.Fragment>
                    <Switch>
                        <Route path="/sitemap" component={SitemapPage} />
                        <Route path="/contactUs" component={ContactUsPage} />
                    </Switch>
                </React.Fragment>
            </div>
        </Router>
    );
}

export default App;
