import React, { useState } from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
// import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./images/gratuitylogo4jpg.jpg";
import valeticon from "./images/ChrisPhoto.JPG";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
// import Home from "./home";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import Radio from "@material-ui/core/Radio";
import CancelIcon from "@material-ui/icons/Cancel";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

    color: "white",

    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",

    heigth: "15",
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

export function App(props) {
  const classesab = useStyles();
  const [PayAmount, setPayAmount] = useState("");
  const [webappopen] = useState(true);
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const [Confirmopen, setConfirmOpen] = React.useState(false);
  const [ThankYouopen, setThankYouOpen] = React.useState(false);
  const [Cardopen, setCardOpen] = React.useState(false);
  const [APayopen, setAPayOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    weight: "",
    weightRange: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
    setThankYouOpen(true);
  };

  const handleThankYouClose = () => {
    setThankYouOpen(false);
  };
  const handleCardOpen = () => {
    setCardOpen(true);
  };

  const handleCardClose = () => {
    setCardOpen(false);
  };
  const handleAPayOpen = () => {
    setAPayOpen(true);
  };

  const handleAPayClose = () => {
    setAPayOpen(false);
  };

  return (
    <div>
      <Dialog
        open={webappopen}
        onClose={handleThankYouClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
          root: classesab.root,
          label: classesab.label,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={2}
            style={{
              padding: 10,
              width: "100%",
              maxWidth: 1000,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            classes={{
              root: classesab.root,
              label: classesab.label,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: 10,
                  width: "100%",
                  maxWidth: 1000,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={logo} width="300" height="" alt="" />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                >
                  <Paper
                    elevation={0}
                    style={{
                      padding: 10,
                      width: "100%",
                      maxWidth: 1000,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Card>
                      <img src={valeticon} width="" height="80" alt="" />
                    </Card>

                    <List>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          primary="Chris Crittenden | Valet"
                          secondary={
                            <React.Fragment>
                              {"BYU Resort | Utah"}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Paper
                    elevation={0}
                    style={{
                      padding: 10,
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
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        Want to send a Gratuity?
                      </Typography>
                      <Typography
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        Enter amount below (International transactions will be
                        subject to current exchange rates)
                      </Typography>
                    </div>
                  </Paper>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Paper
                    elevation={0}
                    style={{
                      padding: 20,
                      width: "100%",
                      maxWidth: 400,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl
                      className={classesab.margin}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleChange("amount")}
                        startAdornment={
                          <InputAdornment
                            position="start"
                            value={PayAmount}
                            onChange={(e) => setPayAmount(e.target.value)}
                          >
                            $
                          </InputAdornment>
                        }
                        labelWidth={60}
                      />
                    </FormControl>
                  </Paper>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Paper
                    elevation={0}
                    style={{
                      padding: 12,
                      width: "100%",
                      maxWidth: 400,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <div style={{ padding: 10 }}>
                        <Radio onClick={handleDialogOpen} />
                        <Dialog
                          open={Dialogopen}
                          onClose={handleDialogClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Thank you for using Gratuity"}
                            </DialogTitle>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: 20,
                            }}
                          >
                            <TextField
                              variant="outlined"
                              label="Text Message Receipt"
                            ></TextField>
                          </div>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              There is a transaction fee of $0.46 to process
                              this payment. How would you like to proceed?
                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button
                              onClick={handleDialogClose}
                              color="primary"
                              classes={{
                                root: classesab.root,
                                label: classesab.label,
                              }}
                            >
                              Ok
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                      <Typography
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        I agree to the Terms of Service and have read the
                        Privacy Policy, including Cookie use.
                      </Typography>
                    </div>
                  </Paper>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Paper
                    elevation={0}
                    style={{
                      padding: 12,
                      width: "100%",
                      maxWidth: 400,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <div>
                        <Button
                          onClick={handleCardOpen}
                          variant="contained"
                          style={{
                            padding: 10,
                            marginRight: 5,
                            maxWidth: "100%",
                          }}
                          startIcon={<CreditCardIcon />}
                          classes={{
                            label: classesab.label,
                          }}
                        >
                          <Typography> Credit / Debit </Typography>
                        </Button>
                        <Dialog
                          open={Cardopen}
                          onClose={handleCardClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              flexDirection: "row",
                            }}
                          >
                            <Button onClick={handleCardClose} color="action">
                              <CancelIcon />
                            </Button>
                          </div>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <DialogTitle id="alert-dialog-title">
                                {"Powered by Stripe"}
                              </DialogTitle>
                            </div>
                          </div>

                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Stripe API will pop up and you can enter your card
                              info here
                            </DialogContentText>
                          </DialogContent>
                        </Dialog>
                      </div>

                      <Button
                        onClick={handleAPayOpen}
                        color="default"
                        variant="contained"
                        style={{ padding: 10, marginLeft: 5, maxWidth: "100" }}
                        startIcon={<AppleIcon />}
                        classes={{
                          label: classesab.label,
                        }}
                      >
                        Pay
                      </Button>
                      <Dialog
                        open={APayopen}
                        onClose={handleAPayClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            flexDirection: "row",
                          }}
                        >
                          <Button onClick={handleAPayClose} color="action">
                            <CancelIcon />
                          </Button>
                        </div>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Powered by Apple Pay"}
                            </DialogTitle>
                          </div>
                        </div>

                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Apple Pay API will pop up here and you can pay
                          </DialogContentText>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Paper>
                </div>

                <Button
                  onClick={handleConfirmOpen}
                  color="default"
                  variant="contained"
                  style={{
                    padding: 10,
                    marginTop: 50,
                    marginLeft: 5,
                    maxWidth: "100%",
                  }}
                  startIcon={<DoneOutlineRoundedIcon />}
                  classes={{
                    root: classesab.root,
                    label: classesab.label,
                  }}
                >
                  Confirm then Pay
                </Button>
                <Dialog
                  open={Confirmopen}
                  onClose={handleConfirmClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  classes={{
                    root: classesab.root,
                    label: classesab.label,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "row",
                    }}
                  >
                    <Button onClick={handleConfirmClose} color="action">
                      <CancelIcon />
                    </Button>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <DialogTitle id="alert-dialog-title">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Typography>
                            <h1>Confirm</h1>
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              paddingLeft: 10,
                              paddingRight: 10,
                            }}
                          >
                            <img src={logo} width="200" height="75" alt="" />
                          </div>
                        </div>
                      </DialogTitle>
                    </div>
                  </div>

                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Paper
                          elevation={0}
                          style={{
                            padding: 10,
                            width: "100%",
                            maxWidth: 1000,
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                          }}
                        >
                          <Card>
                            <img src={valeticon} width="125" height="" alt="" />
                          </Card>
                          <List>
                            <ListItem alignItems="flex-start">
                              <ListItemText
                                primary="Chris Crittenden | Valet"
                                secondary={
                                  <React.Fragment>
                                    {"BYU Resort | Utah"}
                                  </React.Fragment>
                                }
                              />
                            </ListItem>
                          </List>
                        </Paper>
                      </div>
                    </DialogContentText>
                  </DialogContent>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      elevation={0}
                      style={{
                        width: "75%",

                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                      }}
                    >
                      <List>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Typography>
                            {" "}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              Gratuity Amount $5.00
                            </div>
                          </Typography>
                          <Typography>
                            {" "}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              Transaction Fee $0.46
                            </div>
                          </Typography>
                          <Divider></Divider>
                          <Typography>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              {" "}
                              Total $5.46
                            </div>
                          </Typography>
                        </div>
                      </List>
                    </Paper>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 15,
                    }}
                  >
                    <Button
                      onClick={handleConfirmClose}
                      color="default"
                      variant="contained"
                      style={{
                        padding: 10,
                        marginTop: 15,
                        marginLeft: 10,
                        marginRight: 10,
                        width: "100%",
                      }}
                      startIcon={<DoneOutlineRoundedIcon />}
                      classes={{
                        root: classesab.root,
                        label: classesab.label,
                      }}
                    >
                      <Typography>Pay</Typography>
                    </Button>
                  </div>
                </Dialog>
                <Dialog
                  open={ThankYouopen}
                  onClose={handleThankYouClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  classes={{
                    root: classesab.root,
                    label: classesab.label,
                  }}
                >
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
                        maxWidth: 1000,
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
                          <h1>Thank You</h1>
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Paper elevation={0} style={{ padding: 30 }}>
                          <Typography>
                            <h3>
                              {" "}
                              "Thank you for your generosity! Have fun, drive
                              safe, and I hope to see you again soon!"
                            </h3>{" "}
                          </Typography>
                        </Paper>
                        <Paper
                          elevation={0}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            padding: 25,
                          }}
                        >
                          <Card>
                            <img src={valeticon} width="" height="150" alt="" />
                          </Card>
                          <List>
                            <ListItem alignItems="flex-end">
                              <ListItemText
                                primary="Chris Crittenden | Valet"
                                secondary={
                                  <React.Fragment>
                                    {"BYU Resort | Utah"}
                                  </React.Fragment>
                                }
                              />
                            </ListItem>
                          </List>
                        </Paper>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            padding: 10,
                          }}
                        >
                          <Button
                            onClick={() => {
                              props.history.push("/home/welcome");
                            }}
                            color="action"
                            classes={{
                              root: classesab.root,
                              label: classesab.label,
                            }}
                          >
                            <Typography>Done</Typography>
                          </Button>
                        </div>
                      </div>
                    </Paper>
                  </div>
                </Dialog>
              </Paper>
            </div>
          </Paper>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={0}
            style={{
              // padding: 20,
              width: "100%",
              maxWidth: 400,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <IconButton>
                <a
                  id="myLink"
                  href="https://www.linkedin.com/company/gratuity-qr/?viewAsMember=true"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </IconButton>

              <IconButton>
                <a
                  id="myLink"
                  href="https://www.instagram.com/gratuity.qr/"
                  target="_blank"
                >
                  <InstagramIcon button />
                </a>
              </IconButton>

              <IconButton>
                <a
                  id="myLink"
                  href="https://www.facebook.com/GratuiyQR/"
                  target="_blank"
                >
                  <FacebookIcon button />
                </a>
              </IconButton>
            </div>

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
                  flexDirection: "row",
                }}
              >
                {" "}
                {/* <Button
                  style={{ marginTop: 5, maxWidth: "50%" }}
                  classes={{
                    label: classesab.label,
                  }}
                  onClick={() => {
                    props.history.push("/home/welcome");
                  }}
                >
                  About Us
                </Button> */}
                <Button
                  style={{ marginTop: 5, maxWidth: "50%" }}
                  classes={{
                    label: classesab.label,
                  }}
                  onClick={() => {
                    props.history.push("/home/security");
                  }}
                >
                  Security
                </Button>
                <Button
                  style={{ marginTop: 5, maxWidth: "50%" }}
                  classes={{
                    label: classesab.label,
                  }}
                  onClick={() => {
                    props.history.push("/home/TermsOfService");
                  }}
                >
                  Terms of Service
                </Button>
                <Button
                  style={{ marginTop: 5, maxWidth: "50%" }}
                  classes={{
                    label: classesab.label,
                  }}
                  onClick={() => {
                    props.history.push("/home/contact");
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
          </Paper>
        </div>
        {/* <Route path="/home">
          <Home />
        </Route> */}
      </Dialog>
    </div>
  );
}
