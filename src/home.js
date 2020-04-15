import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Route } from "react-router-dom";
import logo from "./images/gratuitylogo4jpg.jpg";
import { makeStyles } from "@material-ui/core/styles";
import SendG from "./sendG";
import RG from "./RG";
import Business from "./business";
import Welcome from "./welcome";
import Pricing from "./pricing";
import Share from "./share";
import Contact from "./contact";
import Security from "./security";
import TermsOfService from "./TermsOfService";
import Privacy from "./Privacy";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

    color: "white",

    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function Home(props) {
  const classesabd = useStyles();
  const [DrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  return (
    <div>
      <div>
        <AppBar
          position="static"
          color="primary"
          classes={{
            root: classesabd.root,
            label: classesabd.label,
          }}
        >
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer
              open={DrawerOpen}
              onClose={() => {
                setDrawerOpen(false);
              }}
            >
              <Paper
                elevation={0}
                style={{ width: "300px", marginTop: "10px", padding: "25px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexGrow: 50,
                    flexShrink: 1,

                    padding: "10px",
                  }}
                >
                  <img src={logo} width="250" height="" alt="" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <List>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/welcome");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/sendG");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Sending Gratuities" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/RG");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Recieving Gratuities" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/business");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Gratuity For Business" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/pricing");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Pricing" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/share");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Share" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/contact");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/security");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Security" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/TermsOfService");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Terms Of Service" />
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        props.history.push("/home/Privacy");
                        setDrawerOpen(false);
                      }}
                      button
                    >
                      <ListItemText primary="Privacy Policy" />
                    </ListItem>
                  </List>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    style={{ marginTop: 40 }}
                    onClick={() => {
                      props.history.push("/");
                      setDrawerOpen(false);
                    }}
                    classes={{
                      root: classesabd.root,
                      label: classesabd.label,
                    }}
                  >
                    Payment Example
                  </Button>
                </div>
              </Paper>
            </Drawer>

            <Typography
              variant="h6"
              color="inherit"
              style={{ flexGrow: 1, marginLeft: "30px" }}
            ></Typography>
          </Toolbar>
        </AppBar>

        <Route path="/home/welcome">
          <Welcome />
        </Route>
        <Route path="/home/sendG">
          <SendG />
        </Route>

        <Route path="/home/RG">
          <RG />
        </Route>
        <Route path="/home/business">
          <Business />
        </Route>
        <Route path="/home/pricing">
          <Pricing />
        </Route>
        <Route path="/home/share">
          <Share />
        </Route>
        <Route path="/home/contact">
          <Contact />
        </Route>
        <Route path="/home/security">
          <Security />
        </Route>
        <Route path="/home/TermsOfService">
          <TermsOfService />
        </Route>
        <Route path="/home/Privacy">
          <Privacy />
        </Route>
      </div>
    </div>
  );
}
