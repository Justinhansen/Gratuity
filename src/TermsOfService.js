import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import logo from "./images/gratuitylogo4jpg.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

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
export default function TermsOfService(props) {
  const classesTOS = useStyles();
  const [TOSphotos] = useState([
    {
      id: "task1",
      image:
        "https://images.squarespace-cdn.com/content/v1/5aa570013917ee07d2f3ed85/1520878581412-5LD9BKHYEBOVT4DH82AL/ke17ZwdGBToddI8pDm48kD33KhhWEodMJvcytjXFyvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIXZi3p8TzzCd5LBww9rBU5Je7LlmHzK_8BCOYYXjEaPwKMshLAGzx4R3EDFOm1kBS/702959352-manche-unification-feliciter-poignee-de-main.jpg?format=1500w",
    },
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <div>
        <Paper
          elevation={2}
          style={{
            padding: 10,
            width: "100%",
            maxWidth: 1100,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 20,
          }}
          classes={{
            root: classesTOS.root,
            label: classesTOS.label,
          }}
        >
          <div
            style={{
              display: "flex",
              JustifyCOntent: "center",
              flexDirection: "row",
            }}
          >
            <Paper
              elevation={0}
              fullWidth
              style={{
                width: "100%",

                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: 5,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    <img src={logo} width="225" height="80" alt="" />
                  </div>
                  <Typography>
                    <h1>Terms Of Service</h1>
                  </Typography>
                </div>
                <List>
                  <ListItem alignItems="center">
                    <ListItemAvatar></ListItemAvatar>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <ListItemText
                        primary="Overview"
                        secondary={
                          <React.Fragment>
                            {
                              " Gratuity is a mobile-based cashless tipping and payment transaction platform. Through our website, mobile app, and services, we allow registered users in good standing of Gratuity to receive or make tips or payments through their mobile device."
                            }
                          </React.Fragment>
                        }
                      />
                    </div>
                  </ListItem>
                </List>
              </div>
            </Paper>
            <Paper
              elevation={1}
              fullWidth
              style={{
                width: "100%",
                maxWidth: 500,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {TOSphotos.map((TOSphoto) => {
                console.log(TOSphoto);

                return (
                  <div style={{ display: "flex", width: 1000 }}>
                    <Card
                      elevation={0}
                      style={{
                        maxWidth: 500,
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        image={TOSphoto.image}
                        style={{
                          height: 400,
                          display: "flex",
                        }}
                      />
                    </Card>
                  </div>
                );
              })}
            </Paper>
          </div>
        </Paper>
      </div>
    </div>
  );
}
