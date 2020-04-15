// import React, { useState, useEffect } from "react";
// import MenuIcon from "@material-ui/icons/Menu";
// import {
//   AppBar,
//   Button,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   Paper,
//   TextField,
//   Toolbar,
//   Typography
// } from "@material-ui/core";
// import { Link, Route } from "react-router-dom";
// import { auth } from "./firebase";
// import CloseIcon from "@material-ui/icons/Close";
// import Avatar from "@material-ui/core/Avatar";
// import LockIcon from "@material-ui/icons/Lock";
// import logo from "./images/gratuitylogo4jpg.jpg";
// import { makeStyles } from "@material-ui/core/styles";
// import HttpsTwoToneIcon from "@material-ui/icons/HttpsTwoTone";
// import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
// import PropTypes from "prop-types";
// import clsx from "clsx";

// import { withStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     borderRadius: 3,
//     border: 0,
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
//   },
//   label: {
//     textTransform: "capitalize",
//     fontSize: 25
//   }
// }));

// export function SignIn(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const classes = useStyles();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(u => {
//       if (u) {
//         props.history.push("/app");
//       }
//       // do something
//     });

//     return unsubscribe;
//   }, [props.history]);

//   const handleSignIn = () => {
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {})
//       .catch(error => {
//         alert(error.message);
//       });
//   };

//   return (
//     <div>
//       <div
//         style={{
//           marginTop: "40px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center"
//         }}
//       >
//         <img src={logo} width="400" height="" alt="" />
//       </div>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Paper style={{ width: "400px", marginTop: "50px", padding: "30px" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               marginBottom: "25px"
//             }}
//           >
//             <HttpsTwoToneIcon style={{ color: "black", fontSize: 100 }} />

//             <Typography component="h1" variant="h4">
//               <strong>Sign In</strong>
//             </Typography>
//           </div>
//           <form>
//             <div>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder={"Email"}
//                 fullWidth={true}
//                 value={email}
//                 onChange={e => {
//                   setEmail(e.target.value);
//                 }}
//               />
//               <TextField
//                 variant="outlined"
//                 type={"password"}
//                 placeholder="Password"
//                 fullWidth={true}
//                 style={{ marginTop: "30px" }}
//                 value={password}
//                 onChange={e => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </div>
//           </form>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               marginTop: "30px"
//             }}
//           >
//             <Button
//               fullWidth
//               color="primary"
//               variant="contained"
//               onClick={handleSignIn}
//               classes={{
//                 root: classes.root,
//                 label: classes.label
//               }}
//             >
//               Sign in
//             </Button>

//             <Typography style={{ marginTop: "25px" }}>
//               Don't have an account? <Link to="/signup">Sign up!</Link>
//             </Typography>
//           </div>
//         </Paper>
//       </div>
//     </div>
//   );
// }

// export function SignUp(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const classes = useStyles();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(u => {
//       if (u) {
//         props.history.push("/app");
//       }
//       // do something
//     });

//     return unsubscribe;
//   }, [props.history]);

//   const handleSignUp = () => {
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {})
//       .catch(error => {
//         alert(error.message);
//       });
//   };

//   return (
//     <div>
//       <div
//         style={{
//           marginTop: "40px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center"
//         }}
//       >
//         <img src={logo} width="400" height="" alt="" />
//       </div>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Paper style={{ width: "400px", marginTop: "50px", padding: "30px" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               marginBottom: "25px"
//             }}
//           >
//             <PersonAddTwoToneIcon style={{ color: "black", fontSize: 100 }} />

//             <Typography component="h1" variant="h4">
//               <strong>Sign Up</strong>
//             </Typography>
//           </div>
//           <TextField
//             variant="outlined"
//             placeholder={"Email"}
//             fullWidth={true}
//             value={email}
//             onChange={e => {
//               setEmail(e.target.value);
//             }}
//           />
//           <TextField
//             variant="outlined"
//             type={"password"}
//             placeholder="Password"
//             fullWidth={true}
//             style={{ marginTop: "30px" }}
//             value={password}
//             onChange={e => {
//               setPassword(e.target.value);
//             }}
//           />
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               marginTop: "30px"
//             }}
//           >
//             <Button
//               fullWidth
//               color="primary"
//               variant="contained"
//               onClick={handleSignUp}
//               classes={{
//                 root: classes.root,
//                 label: classes.label
//               }}
//             >
//               Sign Up
//             </Button>
//             {/* <Button
//               style={{ marginTop: "15px" }}
//               fullWidth
//               color="primary"
//               variant="contained"

//               classes={{
//                 root: classes.root,
//                 label: classes.label
//               }}
//             >
//               Sign up with Apple
//             </Button> */}
//             <Typography style={{ marginTop: "25px" }}>
//               Already have an account? <Link to="/">Sign in!</Link>
//             </Typography>
//           </div>
//         </Paper>
//       </div>
//     </div>
//   );
// }

// export default function TextFieldSizes() {
//   const classes = useStyles();
//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           label="Size"
//           id="outlined-size-normal"
//           defaultValue="Normal"
//           variant="outlined"
//         />
//       </div>
//     </form>
//   );
// }

// Below is waht i took for the app pageXOffset...if i want to put it in later this will tell me where to put it.

// export function App(props) {
//   const [drawer_open, setDrawerOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const classesab = useStyles();
//   const [Dialogopen, setDialogOpen] = React.useState(false);
//   const [Cardopen, setCardOpen] = React.useState(false);
//   const [APayopen, setAPayOpen] = React.useState(false);
//   const [values, setValues] = React.useState({
//     amount: "",
//     weight: "",
//     weightRange: "",
//   });

//   This is the begining of the auth stuff

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(u => {
//       if (u) {
//         setUser(u);
//       } else {
//         props.history.push("/");
//       }
//     });

//     return unsubscribe;
//   }, [props.history]);

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         props.history.push("/");
//       })
//       .catch(error => {
//         alert(error.message);
//       });
//   };

//   if (!user) {
//     return <div />;
//   }

//   This is the end of what i need for the auth stuff

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };
