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
import TransformTwoToneIcon from "@material-ui/icons/TransformTwoTone";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
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

export default function Pricing(props) {
  const classesPR = useStyles();
  const [PRphotos] = useState([
    {
      id: "task1",
      image:
        "https://images.unsplash.com/photo-1561414926-7f3f921a2e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
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
            root: classesPR.root,
            label: classesPR.label,
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
                    <h1>Pricing</h1>
                  </Typography>
                </div>
                <List>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <TransformTwoToneIcon
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
                      <ListItemText
                        primary="Gratuity Transaction Fee"
                        secondary={
                          <React.Fragment>
                            {
                              " 2.9% + $0.30 per Gratuity, fee is added to tip amount."
                            }
                          </React.Fragment>
                        }
                      />
                    </div>
                  </ListItem>

                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <AccountBalanceTwoToneIcon
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
                      <ListItemText
                        primary="Account Withdraw Fee"
                        secondary={
                          <React.Fragment>
                            {
                              "$0.00! As long as you maintain a minimum Gratuity account balance of $25. Other wise normal transaction fees apply, 2.9% + $0.30 per transfer amount.  "
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
              {PRphotos.map((PRphoto) => {
                console.log(PRphoto);

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
                        image={PRphoto.image}
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
