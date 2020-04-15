import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import SendG from "./sendG";
import RG from "./RG";
import Business from "./business";
import Pricing from "./pricing";
import Share from "./share";
import Contact from "./contact";
import Security from "./security";
import TermsOfService from "./TermsOfService";
import Privacy from "./Privacy";
import Welcome from "./welcome";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/sendG" component={SendG} />
      <Route path="/RG" component={RG} />
      <Route path="/business" component={Business} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/share" component={Share} />
      <Route path="/contact" component={Contact} />
      <Route path="/security" component={Security} />
      <Route path="/TermsOfService" component={TermsOfService} />
      <Route path="/Privacy" component={Privacy} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
