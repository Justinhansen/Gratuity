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
import InfoIcon from "@material-ui/icons/Info";
import AccountTreeTwoToneIcon from "@material-ui/icons/AccountTreeTwoTone";
import SecurityTwoToneIcon from "@material-ui/icons/SecurityTwoTone";
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

export default function Privacy(props) {
  const classesPriv = useStyles();
  const [Privphotos] = useState([
    {
      id: "task1",
      image:
        "https://images.samsung.com/is/image/samsung/p5/global/privacy/header-bg-privacy-mo.jpg?$ORIGIN_JPG$",
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
            root: classesPriv.root,
            label: classesPriv.label,
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
                    <img src={logo} width="" height="80" alt="" />
                  </div>
                  <Typography>
                    <h1>Privacy</h1>
                  </Typography>
                </div>
                <List>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <InfoIcon
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
                        primary="Personal Information"
                        secondary={
                          <React.Fragment>
                            {
                              "All personal information is safe on our secure database. Your profile picture, full name, job title, and employer are visible to users. All other information is private and secure. "
                            }
                          </React.Fragment>
                        }
                      />
                    </div>
                  </ListItem>

                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <SecurityTwoToneIcon
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
                        primary="Payment Information Is Safe & Secure"
                        secondary={
                          <React.Fragment>
                            {
                              "Bank Account, Card, and all payment information is kept safe and secure on stripes database"
                            }
                          </React.Fragment>
                        }
                      />
                    </div>
                  </ListItem>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <AccountTreeTwoToneIcon
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
                        primary="Third Party Providers"
                        secondary={
                          <React.Fragment>
                            {
                              "Gratuity uses Stripe to securley process payments and transactions. Gratuity also uses Plaid to display users account balance in their secure signed in view.  "
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
              {Privphotos.map((Privphoto) => {
                console.log(Privphoto);

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
                        image={Privphoto.image}
                        style={{
                          height: "100%",
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
