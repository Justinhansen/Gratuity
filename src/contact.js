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
import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";

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

export default function Contact(props) {
  const classesCon = useStyles();
  const [Conphotos] = useState([
    {
      id: "task1",
      image:
        "https://images.unsplash.com/photo-1559030623-0226b1241edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
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
            root: classesCon.root,
            label: classesCon.label,
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
                    padding: 50,
                  }}
                >
                  <Typography>
                    <h1>Contanct</h1>
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    <img src={logo} width="225" height="80" alt="" />
                  </div>
                </div>
                <List>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <DraftsTwoToneIcon
                        style={{
                          fontSize: 50,
                          marginRight: 40,
                          marginLeft: 50,
                        }}
                      />
                    </ListItemAvatar>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <ListItemText primary="GratuityQR@Gmail.com" />
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
              {Conphotos.map((Conphoto) => {
                console.log(Conphoto);

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
                        image={Conphoto.image}
                        style={{
                          height: 350,
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
