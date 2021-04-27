import React, { useContext, useEffect, useState } from "react";
import { useAuth } from '../firebase/provider';
import {
  AppBar,
  List,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    text: {
      color: "black",
    },
    list: {
        display: "flex",
        flexDirection: "row",
        padding: 0,
        flexGrow: 1,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    button:{
        fontFamily: "Fredoka One",
        fontSize: 18,
        textTransform:'none',
        backgroundColor:"#FDB827",
        color:"#FFF",
        borderRadius:20,
        padding:'0.25%',
        paddingLeft:'2%',
        paddingRight:'2%',
        '&:hover':{
            backgroundColor:"rgba(253, 184, 39, 0.5);"
        }
    },
    whiteButton:{
        fontFamily: "Fredoka One",
        fontSize: 18,
        textTransform:'none',
        color:"#FDB827",
        backgroundColor:"#FFF",
        borderRadius:20,
        padding:'0.25%',
        paddingLeft:'2%',
        paddingRight:'2%',
        '&:hover':{
            backgroundColor:"#FFF",
            textDecoration:'underline'
        }   
    },
    logo:{
        fontFamily: "Fredoka One",
        fontSize: 48,
        color: "#FDB827",
    }
  }));
  
  const Navbar = () => {
    const classes = useStyles();
    const { currentUser } = useAuth();
    return (
      <div className={classes.root}>
        <AppBar elevation={0} style={{
            backgroundColor: "#FFF",
            padding:'1%'
        }}>
          <Toolbar>
            <Typography variant="h3" align="center" className={classes.logo}>
                idYeah!
            </Typography>

            <List className={classes.list}>
                <Button disableFocusRipple={true} disableRipple={true} className={classes.whiteButton}>Submit an idea</Button>
                <Button disableFocusRipple={true} disableRipple={true} className={classes.button}>Login</Button>
            </List>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:100}}/>
      </div>
    );
  }

export default Navbar;