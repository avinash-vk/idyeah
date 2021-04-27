import React,{useState} from 'react'
import {
    Card,Collapse,Grid, Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
    ChevronUp,
    ChevronDown,
} from "react-feather";
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
        fontSize: 18 ,
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
const Idea = () => {
    const classes = useStyles();
    const [collapsed, setCollapsed] = useState(false);
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
                        Robots
                    </Typography>
                    <Typography className={classes.text}>
                        Robots
                    </Typography>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
            <Collapse in={collapsed}>
                <div className={classes.body}>
                    <Typography className={classes.text} style={{fontSize:16}}>
                        <b>Submitted by:</b> Avinash V K<br/><br/>
                        <b>Proposition:</b> <br/>
                        An electric car that runs on water. Turns out it is the best way to do so. It’s also a great day to party and a much better day to simply have a good day. Ice taken from mars can be directly boiled at 100C to break it down to high energy matter which can then be used as fuel. Have a great day.
                    </Typography>
                </div>
            </Collapse>
        </Card>
    )
}

export default Idea
