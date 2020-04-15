import React from "react";
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
import logo2 from "./images/demo2.JPG";
import logo3 from "./images/ThankYou.JPG";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
import TimerTwoToneIcon from "@material-ui/icons/TimerTwoTone";
import VerifiedUserTwoToneIcon from "@material-ui/icons/VerifiedUserTwoTone";
import MonochromePhotosTwoToneIcon from "@material-ui/icons/MonochromePhotosTwoTone";
import BorderOuterTwoToneIcon from "@material-ui/icons/BorderOuterTwoTone";
import LayersClearTwoToneIcon from "@material-ui/icons/LayersClearTwoTone";
import IsoTwoToneIcon from "@material-ui/icons/IsoTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import AccountBalanceWalletTwoToneIcon from "@material-ui/icons/AccountBalanceWalletTwoTone";
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

export default function Welcome(props) {
  const classesW = useStyles();

  return (
    <div>
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
              minWidth: 370,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginBottom: 20,
            }}
            classes={{
              root: classesW.root,
              label: classesW.label,
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
                    <Typography>
                      <h1>Welcome To</h1>
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
                      <ListItemAvatar></ListItemAvatar>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <ListItemText
                          primary="Cashless, anonynomus, touch-less tipping platform. Simply point your mobile device camera at a Gratuity QR code and send a cashless tip. No need to download an app. "
                          secondary={<React.Fragment> </React.Fragment>}
                        />
                      </div>
                    </ListItem>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <TimerTwoToneIcon
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
                          primary="Fast"
                          secondary={
                            <React.Fragment>
                              {
                                " Faster than stopping at the gas station for change or even pulling out your wallet and digging through your cash.   "
                              }
                            </React.Fragment>
                          }
                        />
                      </div>
                    </ListItem>

                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <AccessibleForwardIcon
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
                          primary="Easy"
                          secondary={
                            <React.Fragment>
                              {
                                "Cashless tipping so easy, your grandparents can do it"
                              }
                            </React.Fragment>
                          }
                        />
                      </div>
                    </ListItem>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <VerifiedUserTwoToneIcon
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
                          primary="Secure"
                          secondary={
                            <React.Fragment>
                              {" Just as secure as a credit card transaction"}
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
                  maxWidth: 400,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: 1000,
                  }}
                >
                  <Card
                    elevation={0}
                    style={{
                      maxWidth: 500,
                      maxHeight: 600,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CardMedia
                      image={logo2}
                      style={{
                        height: "",

                        width: "90%",
                      }}
                    />
                  </Card>
                </div>
              </Paper>
            </div>
          </Paper>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <div>
          <Paper
            elevation={0}
            style={{
              padding: 10,
              width: "100%",
              maxWidth: 1100,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginBottom: 20,
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
                  <Card
                    elevation={0}
                    style={{
                      maxWidth: 500,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img src={logo3} width="250" height="500" alt="" />
                    <CardMedia />
                  </Card>
                </div>
              </Paper>
              <Paper
                elevation={0}
                fullWidth
                style={{
                  width: "100%",
                  maxWidth: 500,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",

                    width: 1000,
                  }}
                >
                  <List>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <LayersClearTwoToneIcon
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
                          primary="Don't Need to Download An App"
                          secondary={<React.Fragment> </React.Fragment>}
                        />
                      </div>
                    </ListItem>

                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <MonochromePhotosTwoToneIcon
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
                        <ListItemText primary="Open The Camera On Your Mobile Device" />
                      </div>
                    </ListItem>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <BorderOuterTwoToneIcon
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
                        <ListItemText primary="Scan A Gratuity QR Code" />
                      </div>
                    </ListItem>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <IsoTwoToneIcon
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
                          primary="Select Gratuity Amount"
                          secondary={<React.Fragment> </React.Fragment>}
                        />
                      </div>
                    </ListItem>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <AccountBalanceWalletTwoToneIcon
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
                          primary="Select Payment Method"
                          secondary={<React.Fragment> </React.Fragment>}
                        />
                      </div>
                    </ListItem>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <SendTwoToneIcon
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
                          primary="Pay"
                          secondary={<React.Fragment> </React.Fragment>}
                        />
                      </div>
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
