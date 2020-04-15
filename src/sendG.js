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
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import SystemUpdateTwoToneIcon from "@material-ui/icons/SystemUpdateTwoTone";
import PersonAddDisabledTwoToneIcon from "@material-ui/icons/PersonAddDisabledTwoTone";
import MoneyOffTwoToneIcon from "@material-ui/icons/MoneyOffTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

    color: "white",

    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  inline: {
    display: "inline",
  },
}));

export default function SendG(props) {
  const [SGphotos] = useState([
    {
      id: "task1",
      image:
        "https://9to5mac.com/wp-content/uploads/sites/6/2018/06/control-center-qr-code-shortcut-ios-12.jpg?quality=82&strip=all&w=1600",
    },
  ]);
  const [photos] = useState([
    {
      id: "task1",
      image:
        "https://pic.clubic.com/v1/images/1733770/raw?width=1200&fit=max&hash=cfe8a92fc6bbac6b50b1da9299fa20f23b22d3de",
      title: "Scan Gratuity QR Code ",

      description:
        "Launch your camera or QR reader - hover over the QR code displayed on the name tag, printed material, or phone screen",
    },
    {
      id: "task2",
      image:
        "https://www.lsainsider.com/wp-content/uploads/2019/09/og__f1oea6mhot2e_overview.png",
      title: "Select Amount",
      description:
        "A profile picture or business logo will appear and you can then select the amount you would like to send",
    },
    {
      id: "task3",
      image:
        "https://cdn.iphonelife.com/sites/iphonelife.com/files/styles/full_width_wide_2x/public/applepaycash.jpg?itok=lKGuXpVJ",
      title: "Confirm",
      description:
        "Select payment method (Apple Pay, Google Pay, Paypal, Credit & Debit Cards) then confrim payment",
    },
    {
      id: "task4",
      image:
        "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/social/ios12-4-iphone-xs-wallet-make-purchase-with-apple-card-social-card.jpg",
      title: "Done!",
      description: "Simple, Cashless Tipping",
    },
  ]);
  const classes = useStyles();

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
              root: classes.root,
              label: classes.label,
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
                      <h1>Sending a</h1>
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
                        <SystemUpdateTwoToneIcon
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
                        <ListItemText primary="You Don't Need to Download an App" />
                      </div>
                    </ListItem>

                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <PersonAddDisabledTwoToneIcon
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
                        <ListItemText primary="No Need to Create an Account" />
                      </div>
                    </ListItem>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <MoneyOffTwoToneIcon
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
                        <ListItemText primary="Never Be Caught Short On Cash and Unable to Leave a Tip" />
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
                {SGphotos.map((SGphoto) => {
                  console.log(SGphoto);

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
                          image={SGphoto.image}
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
        }}
      >
        <Paper
          elevation={0}
          style={{
            padding: 12,
            width: "100%",
            maxWidth: 1300,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>
            <h2>
              Use your mobile device to send a gratuity to anyone with a
              Gratuity QR code
            </h2>
          </Typography>
        </Paper>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              JustifyContent: "center",
              margin: "30px",
            }}
          >
            <Paper
              elevation={0}
              style={{
                width: "100%",
                maxWidth: 1000,
                display: "flex",
                justifyContent: "center",
                marginBottom: 50,
              }}
            >
              {photos.map((photo) => {
                console.log(photo);

                return (
                  <div style={{ display: "flex", margin: 10, width: 1000 }}>
                    <Card
                      elevation={1}
                      style={{
                        maxWidth: 345,
                        width: "100%",
                      }}
                    >
                      <CardMedia
                        image={photo.image}
                        style={{
                          height: 240,
                          display: "flex",
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {photo.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {photo.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
