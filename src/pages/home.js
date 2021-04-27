import React, { useEffect, useState } from "react";
import { FIRESTORE } from '../firebase/firestore';
import {
  Container
} from "@material-ui/core";
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";

import Idea from '../components/Idea'
const useStyles = makeStyles((theme) => ({
    
  }));

const Home = () => {
    const classes = useStyles();
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    useState(()=>{
      FIRESTORE.getIdeas().then(ideas => {
        setIdeas(ideas);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      })
    },[])
    return (
        <Container>
            { 
              loading?<>
              <Skeleton><Idea /></Skeleton>
              <Skeleton><Idea /></Skeleton>
              <Skeleton><Idea /></Skeleton></>
              :ideas.map(idea => <Idea idea={idea} />)
            }
        </Container>
    )
}

export default Home
