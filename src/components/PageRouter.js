import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Index from "./TrangChu/Index";
import App from "./App";
import Producsp from "./Producsp";

export default function PageRouter() {
    return (
        <Router>
            <div>
                <nav hidden="hidden">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Sản Phẩm 2</Link>
                        </li>
                        <li>
                            <Link to="/sp">danh muc sp</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/products">
                        <App />
                    </Route>
                    <Route path="/sp">
                        <Producsp />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}