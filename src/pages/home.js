import React, { useContext, useEffect, useState } from "react";
import { useAuth } from '../firebase/provider';
import {
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Idea from '../components/Idea'
const useStyles = makeStyles((theme) => ({
    
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <Container>
            {[1,2,3,4,5].map(idx => <Idea />)}
        </Container>
    )
}

export default Home
