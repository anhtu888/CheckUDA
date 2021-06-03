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
import About from "./About";
import Qrcode from "./Qrcode";

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
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/products">
                        <Producsp />
                    </Route>
                    <Route exact path="/">
                        <Index />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/qr">
                        <Qrcode />
                    </Route>
                    <Route path="/addsp">
                        <App />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}