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
import AccountTreeTwoToneIcon from "@material-ui/icons/AccountTreeTwoTone";
import SupervisorAccountTwoToneIcon from "@material-ui/icons/SupervisorAccountTwoTone";
import BeenhereTwoToneIcon from "@material-ui/icons/BeenhereTwoTone";
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
export default function Share(props) {
  const classesSh = useStyles();
  const [Shphotos] = useState([
    {
      id: "task1",
      image:
        "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
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
            root: classesSh.root,
            label: classesSh.label,
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
                    <h1>Share</h1>
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
                      <SupervisorAccountTwoToneIcon
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
                        primary="Referral Incentive"
                        secondary={
                          <React.Fragment>
                            {
                              " Recieve ($0.05) added to your account for every tip recieved by anyone you referred to Gratuity.  You must maintain a minimum acccount balance of $25 to qualify for this referral incentive. "
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
                        primary="Sharing Pays Dividends"
                        secondary={
                          <React.Fragment>
                            {
                              "Earn an additional ($0.01) for every tip made or recieived by any user who was referred to Gratuity by somesone you referred. "
                            }
                          </React.Fragment>
                        }
                      />
                    </div>
                  </ListItem>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <BeenhereTwoToneIcon
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
                        primary="Qualify"
                        secondary={
                          <React.Fragment>
                            {
                              "You must maintain a minimum acccount balance of $25 to qualify for this referral incentive. "
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
              {Shphotos.map((Shphoto) => {
                console.log(Shphoto);

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
                        image={Shphoto.image}
                        style={{
                          height: 450,
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
