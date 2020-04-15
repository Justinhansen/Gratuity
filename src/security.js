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
export default function Security(props) {
  const classesSec = useStyles();
  const [Secphotos] = useState([
    {
      id: "task1",
      image:
        "https://static.wixstatic.com/media/c6b2a0_38f314cafc6846b4b84e3f6bd7c4227b~mv2.jpg/v1/fill/w_640,h_658,al_c,q_85,usm_0.66_1.00_0.01/c6b2a0_38f314cafc6846b4b84e3f6bd7c4227b~mv2.webp",
    },
  ]);
  const [Stripephotos] = useState([
    {
      id: "task1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjn2ZyvOe7fXtHvW1Iq5m9mF2UGAG__nYUKxy0etUALScaTSJu&usqp=CAU",
    },
  ]);
  const [Plaidphotos] = useState([
    {
      id: "task1",
      image: "https://www.altfi.com/images/companies/plaid-.png",
    },
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
              root: classesSec.root,
              label: classesSec.label,
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
                      <h1>Security</h1>
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
                          primary="Security Is One Of The Biggest Considerations With Online Payments"
                          secondary={
                            <React.Fragment>
                              {
                                "Gratuity has carefully selected Stripe & Plaid to facilitate transactions and display of personal information, payment information, and transaction history"
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
                {Secphotos.map((Secphoto) => {
                  console.log(Secphoto);

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
                          image={Secphoto.image}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
            root: classesSec.root,
            label: classesSec.label,
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
              <List>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Paper
                      elevation={0}
                      fullWidth
                      style={{
                        width: "100%",
                        maxWidth: 500,
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 40,
                      }}
                    >
                      {Stripephotos.map((Stripephoto) => {
                        console.log(Stripephoto);

                        return (
                          <div style={{ display: "flex", width: 100 }}>
                            <Card
                              elevation={0}
                              style={{
                                maxWidth: 200,
                                width: "100%",
                              }}
                            >
                              <CardMedia
                                image={Stripephoto.image}
                                style={{
                                  height: 75,
                                  display: "flex",
                                }}
                              />
                            </Card>
                          </div>
                        );
                      })}
                    </Paper>
                  </ListItemAvatar>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemText
                      primary="Transaction Processing"
                      secondary={
                        <React.Fragment>
                          {
                            "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online. Stripe does business with Amazon, Google, Microsoft, Shopify, Uber, and many others. "
                          }
                        </React.Fragment>
                      }
                    />
                  </div>
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Paper
                      elevation={0}
                      fullWidth
                      style={{
                        width: "100%",
                        maxWidth: 500,
                        display: "flex",
                        justifyContent: "center",
                        marginRight: 40,
                      }}
                    >
                      {Plaidphotos.map((Plaidphoto) => {
                        console.log(Plaidphoto);

                        return (
                          <div style={{ display: "flex", width: 100 }}>
                            <Card
                              elevation={0}
                              style={{
                                maxWidth: 200,
                                width: "100%",
                              }}
                            >
                              <CardMedia
                                image={Plaidphoto.image}
                                style={{
                                  height: 75,
                                  display: "flex",
                                }}
                              />
                            </Card>
                          </div>
                        );
                      })}
                    </Paper>
                  </ListItemAvatar>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <ListItemText
                      primary="Transaction History and Gratuity Balance Display"
                      secondary={
                        <React.Fragment>
                          {
                            " Plaid is committed to handling your data with the utmost care and respect for your privacy. It’s why Plaid will never sell your data. Plaid also doesm't allow individuals or other companies access to their databases unless at your direction or necessary to deliver the services you’ve chosen. Plaid documents their practices so you can see why millions of people have used Plaid to connect to the services they rely on to make money easier."
                          }
                        </React.Fragment>
                      }
                    />
                  </div>
                </ListItem>
              </List>
            </div>
          </Paper>
        </Paper>
      </div>
    </div>
  );
}
