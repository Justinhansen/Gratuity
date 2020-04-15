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
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import BusinessTwoToneIcon from "@material-ui/icons/BusinessTwoTone";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import AddLocationTwoToneIcon from "@material-ui/icons/AddLocationTwoTone";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import LocalAtmTwoToneIcon from "@material-ui/icons/LocalAtmTwoTone";
import TimerTwoToneIcon from "@material-ui/icons/TimerTwoTone";
import ReceiptTwoToneIcon from "@material-ui/icons/ReceiptTwoTone";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";

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
export default function Business(props) {
  const classesbiz = useStyles();
  const [Bphotos] = useState([
    {
      id: "task1",
      image:
        "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2019.2F03.2F11.2F05965281-6bac-4b5c-89cd-9ab1f544bc4d.2Ejpeg/750x375/background-color/ffffff/focus-point/1002%2C689/quality/70/copropriete-un-comparateur-classe-les-syndics-en-fonction-des-evaluations-de-ses-clients-1330987.jpg",
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        JustifyCOntent: "center",
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
              marginBottom: 40,
            }}
            classes={{
              root: classesbiz.root,
              label: classesbiz.label,
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
                    <div style={{ display: "flex", paddingRight: 5 }}>
                      <img src={logo} width="225" height="80" alt="" />
                    </div>
                    <Typography>
                      <h1>For Business</h1>
                    </Typography>
                  </div>
                  <List>
                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <TrendingDownIcon
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
                          primary="Incomes Continue to Decrease"
                          secondary={
                            <React.Fragment>
                              {
                                " This new cashless economy has it's perks, but it may come at a cost. Sercive workers are hurting as their tip incomes continue to decrease"
                              }
                            </React.Fragment>
                          }
                        />
                      </div>
                    </ListItem>

                    <ListItem alignItems="center">
                      <ListItemAvatar>
                        <GolfCourseIcon
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
                          primary="Our Mission"
                          secondary={
                            <React.Fragment>
                              {
                                "Ensure that service workers get paid well for their hard work, because hard work deserves to get paid."
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
                {Bphotos.map((bphoto) => {
                  console.log(bphoto);

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
                          image={bphoto.image}
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

      <div>
        <Paper
          elevation={0}
          fullWidth
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography>
              <h1>Your Business & Everyone Win With Gratuity</h1>
            </Typography>
          </div>
        </Paper>
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
            marginBottom: 10,
          }}
          classes={{
            root: classesbiz.root,
            label: classesbiz.label,
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
                <LocalAtmTwoToneIcon style={{ fontSize: 50 }} />
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
                    <h3>Employee Benefit </h3>
                  </div>
                  Gratuity enables your employees to make more money which
                  provides a new, free benefit for them
                </Typography>
              </div>
            </div>
          </Paper>
          <Paper
            style={{
              padding: 15,
              marginRight: 10,
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
                <AssignmentIndTwoToneIcon style={{ fontSize: 50 }} />
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
                    <h3>Employee's Show Up</h3>
                  </div>
                  In the service industry, boosting employee hapiness will save
                  you the stress and costs of filling last-minutes shifts or
                  paying employees overtime
                </Typography>
              </div>
            </div>
          </Paper>
          <Paper
            style={{
              padding: 15,
              marginRight: 10,
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
                    <h3>Customer Experience</h3>
                  </div>
                  The tipping process is fast, easy, and secure. The customer
                  never needs to even download an app.
                </Typography>
              </div>
            </div>
          </Paper>
          <Paper
            style={{
              padding: 20,
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
                  Our reports make it easy for you to account, distribute and
                  report employee's gratuity income.
                </Typography>
              </div>
            </div>
          </Paper>
        </Paper>
      </div>

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
            marginTop: 10,
            marginBottom: 100,
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
              <Typography>
                <h1>Start Using Gratuity Today</h1>
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography>
                <h3>Free...Simple...Cashless...Tipping!</h3>
              </Typography>
            </div>
            <List>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <BusinessTwoToneIcon
                    style={{ fontSize: 50, marginRight: 40, marginLeft: 50 }}
                  />
                </ListItemAvatar>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <ListItemText primary="Setup Your Business Account and Profile" />
                </div>
              </ListItem>

              <ListItem alignItems="center">
                <ListItemAvatar>
                  <AccountBalanceTwoToneIcon
                    style={{ fontSize: 50, marginRight: 40, marginLeft: 50 }}
                  />
                </ListItemAvatar>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <ListItemText primary="Setup Your Business' Payment Method" />
                </div>
              </ListItem>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <AddLocationTwoToneIcon
                    style={{ fontSize: 50, marginRight: 40, marginLeft: 50 }}
                  />
                </ListItemAvatar>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <ListItemText primary="Setup Your Business' Location" />
                </div>
              </ListItem>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <GroupAddTwoToneIcon
                    style={{ fontSize: 50, marginRight: 40, marginLeft: 50 }}
                  />
                </ListItemAvatar>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <ListItemText primary="Onboard Employees" />
                </div>
              </ListItem>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <ShoppingCartTwoToneIcon
                    style={{ fontSize: 50, marginRight: 40, marginLeft: 50 }}
                  />
                </ListItemAvatar>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <ListItemText primary="Order Gratuity Badges, Print Your Promotional Posters & Business Cards" />
                </div>
              </ListItem>
            </List>
          </div>
        </Paper>
      </div>
    </div>
  );
}
