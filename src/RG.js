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
import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import Filter3Icon from "@material-ui/icons/Filter3";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import UpdateIcon from "@material-ui/icons/Update";
import CropFreeTwoToneIcon from "@material-ui/icons/CropFreeTwoTone";
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import TimerTwoToneIcon from "@material-ui/icons/TimerTwoTone";
import VerifiedUserTwoToneIcon from "@material-ui/icons/VerifiedUserTwoTone";
import ReceiptTwoToneIcon from "@material-ui/icons/ReceiptTwoTone";
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
export default function RG(props) {
  const classesRG = useStyles();
  const [RGphotos] = useState([
    {
      id: "task1",
      image:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/jkui8ktry595vwd4wi0z.jpg",
    },
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
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
              root: classesRG.root,
              label: classesRG.label,
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
                      <h1>Recieve Tips With</h1>
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
                        <TrendingUpIcon
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
                          primary="Increase Earning Power"
                          secondary={
                            <React.Fragment>
                              {
                                " Stop missing out on tips because people don't have cash, increase your income using Gratuity."
                              }
                            </React.Fragment>
                          }
                        />
                      </div>
                    </ListItem>

                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <UpdateIcon
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
                          primary="Real-Time Gratuity Balance"
                          secondary={
                            <React.Fragment>
                              {
                                "With the Gratuity app, you will have real time account balance, you can easily tranfer funds from your Gratuity account to your bank account. You can Even share your tips with co-workers through the app. "
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
                {RGphotos.map((RGphoto) => {
                  console.log(RGphoto);

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
                          image={RGphoto.image}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
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
            flexDirection: "column",
            marginBottom: 20,
          }}
          classes={{
            root: classesRG.root,
            label: classesRG.label,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Paper
              style={{
                width: "100%",
                maxWidth: 1100,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <CropFreeTwoToneIcon
                    style={{ fontSize: 50, marginRight: 10 }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <h3>How To Get Started With Your Free QR Code Today </h3>
                    </div>
                  </Typography>
                </div>
              </div>
            </Paper>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Paper
                style={{
                  padding: 15,
                  width: "100%",
                  maxWidth: 330,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginRight: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Filter1Icon style={{ fontSize: 50 }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <h3>Sign Up For A Free QR Code </h3>
                      </div>
                      Register your account and complete your profile. To
                      activate your QR code you'll be required to link your
                      debit card or bank account to stripe.
                    </Typography>
                  </div>
                </div>
              </Paper>
              <Paper
                style={{
                  padding: 15,
                  width: "100%",
                  maxWidth: 330,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginRight: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Filter2Icon style={{ fontSize: 50 }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <h3>Download App </h3>
                      </div>
                      Download the Gratuity app and sign in. You will be able to
                      see real-time balance of your tips in the app. You can
                      transfer money from the app to your bank account, transfer
                      will be completed in (2-5 business days).
                    </Typography>
                  </div>
                </div>
              </Paper>
              <Paper
                style={{
                  padding: 15,
                  width: "100%",
                  maxWidth: 330,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Filter3Icon style={{ fontSize: 50 }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <h3>Print Code & Order Badge</h3>
                      </div>
                      Your QR code will be generated which you can immediatly
                      print out on business cards or other promotional material.
                      To get the most out of Gratuity, order name badges to wear
                      with your QR code printed on the badge.{" "}
                    </Typography>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </Paper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
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
            flexDirection: "column",
            marginBottom: 20,
          }}
          classes={{
            root: classesRG.root,
            label: classesRG.label,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Paper
              style={{
                width: "100%",
                maxWidth: 1100,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <MonetizationOnTwoToneIcon
                    style={{ fontSize: 50, marginRight: 10 }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <h3>How To Get Paid </h3>
                    </div>
                  </Typography>
                </div>
              </div>
            </Paper>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Paper
                style={{
                  padding: 15,
                  width: "100%",
                  maxWidth: 330,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginRight: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TimerTwoToneIcon style={{ fontSize: 50 }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <h3>Fast & Direct Payouts</h3>
                      </div>
                      Once you're logged into the app or on your online
                      dashboard, your account will be linked to a free stripe
                      account. You can transfer funds from your Gratuity acount
                      to the account of your choice.
                    </Typography>
                  </div>
                </div>
              </Paper>
              <Paper
                style={{
                  padding: 15,
                  width: "100%",
                  maxWidth: 330,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginRight: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <VerifiedUserTwoToneIcon style={{ fontSize: 50 }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <h3>Safe & Secure Payment Processing</h3>
                      </div>
                      Gratuity partnered with Stripe, a leading global payment
                      processing firm. Stripe keeps all financial information on
                      its secure encryted servers.
                    </Typography>
                  </div>
                </div>
              </Paper>
              <Paper
                style={{
                  padding: 15,
                  width: "100%",
                  maxWidth: 330,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ReceiptTwoToneIcon style={{ fontSize: 50 }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <h3>Compliance</h3>
                      </div>
                      Our Gratuity reports make it easy for you to account and
                      report your tip income.
                    </Typography>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
