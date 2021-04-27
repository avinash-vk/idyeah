import React,{useState} from 'react'
import {
    Card,Collapse,Grid, Typography, IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    ChevronUp,
    ChevronDown,
    Sun,
    Send
} from "react-feather";
import { FIRESTORE} from '../firebase/firestore';
import { useAuth } from '../firebase/provider'
const useStyles = makeStyles((theme) => ({
    card:{
        padding:'1%',
        marginTop:'2%',
        alignItems:'center',
    },
    icon:{
        color:'#696969',
        marginRight:20,
        '&:hover':{
            cursor:'pointer'
        }
    },
    title:{
        fontFamily: "Fredoka One",
        fontSize: 24 ,
        textTransform:'none',
        color:"#696969",
    },
    text:{
        fontFamily: "Fira Code",
        fontSize: 12 ,
        textTransform:'none',
        color:"#696969",
        marginLeft:10
    },
    body:{
        marginLeft:'1%',
        padding:'2%',
        paddingLeft:'1.5%',
        borderLeft:'4px solid #FDB827',
    }
}));
const Idea = ({idea}) => {
    const classes = useStyles();
    const [collapsed, setCollapsed] = useState(false);
    const { currentUser,setStatusAlert } = useAuth();
    const [voted,setVoted] = useState(idea?.votes?.[currentUser?.uid]);
    const [votes, setVotes] = React.useState(idea?.voteCount);
    const handleVote = async ()=>{
        setVoted(!voted);
        let votes = await FIRESTORE.vote(currentUser.uid, idea.id);
        setVotes(votes)
    }
    const handleCopy= async () => {
        await navigator.clipboard.writeText(`${window.location.href}idea/${idea?.id}`)
        setStatusAlert("Copied to Clipboard!")
    }
    return (
        <Card className={classes.card}>
            <Grid container direction="row" >
                <Grid item container xs={9} style={{alignItems:'center'}}>
                {collapsed ? (
                    <ChevronUp
                    onClick={(e) => {
                        setCollapsed(false);
                    }}
                    className={classes.icon}
                    />
                ) : (
                    <ChevronDown
                    onClick={(e) => {
                        setCollapsed(true);
                    }}
                    className={classes.icon}
                    />
                )}
                    <Typography className={classes.title}>
                        {idea?.title}
                    </Typography>
                    <Typography className={classes.text}>
                    <IconButton  style={{color:"#696969"}} onClick={handleCopy} disableRipple={true} disableFocusRipple={true} > <Send /> </IconButton>
                    </Typography>
                </Grid>
                <Grid container item xs={3} justify="flex-end" alignItems="center" spacing={2}>
                    <Grid item>
                    <Typography className={classes.title}>
                        {votes}
                    </Typography>
                    </Grid>
                    <Grid item>
                       <IconButton  style={{color:voted?"#FDB827":currentUser?"#696969":"rgba(0,0,0,0.2)"}} onClick={handleVote} disableRipple={true} disableFocusRipple={true} disabled={currentUser?false:true}> <Sun  /> </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Collapse in={collapsed}>
                <div className={classes.body}>
                    <Typography className={classes.text} style={{fontSize:16}}>
                        <b>Submitted by:</b> {idea?.author} <br/><br/>
                        <b>Proposition:</b> <br/>
                        {idea?.description}
                    </Typography>
                </div>
            </Collapse>
        </Card>
    )
}

export default Idea
