import React from 'react'
import { Modal, Avatar, Typography, TextField, Dialog,DialogTitle, DialogActions, Button,Card,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth } from "../firebase/provider";

const modalStyles = makeStyles((theme)=>({
    root:{
        height: 620,
        width: 600,
        background: "#FFF",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        flexDirection:"column",
        outline:'none',
        padding:20
    },
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontFamily:"Fira Code",
        fontSize:24
    },
    titleText:{
        fontFamily: "Fredoka One",
        fontSize: 28 ,
        textTransform:'none',
        color:"#FDB827",
    },
    
    button:{
        fontFamily: "Fredoka One",
        fontSize: 18,
        textTransform:'none',
        backgroundColor:"#FDB827",
        color:"#FFF",
        borderRadius:20,
        '&:hover':{
            backgroundColor:"rgba(253, 184, 39, 0.5);"
        }
    },
    logo:{
        marginRight:12,
        height:60,
        width:60
    },
    content:{
        height:520,
        width:"100%",
        borderRadius:10,
        overflowY:"auto",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    inputContainer:{
        marginBottom:40,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
    },
    input:{
        fontFamily:'Fira Code',
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 10,
        width:580,
        color:'#696969',
        backgroundColor:'rgba(0,0,0,0.05)'
    }
}))

const SubmitIdeaModal = ({open,handleClose}) => {
    const classes = modalStyles();
    const { currentUser } = useAuth();
    const [title,setTitle] = React.useState("");
    const [description,setDescription] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.modal}
        >
            <div className={classes.root}>
                <Typography className={classes.titleText}>
                    Submit an Idea!
                </Typography>
                <div className={classes.content}>
                    <form style={{width:"100%"}} onSubmit = {handleSubmit}>
                        <div className={classes.inputContainer}>
                            <Typography className={classes.text}>
                                Title
                            </Typography>
                            <TextField 
                                fullWidth
                                InputProps={{disableUnderline: true}}
                                className={classes.input} 
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                                placeholder="an apt title for your idea"
                            />
                        </div>
                        <div className={classes.inputContainer}>
                            <Typography className={classes.text}>
                                Proposition
                            </Typography>
                            <TextField 
                                fullWidth
                                multiline 
                                rows={8} 
                                InputProps={{disableUnderline: true}}
                                className={classes.input} 
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                placeholder="a good description of your idea"
                            />
                        </div>
                    </form>
                </div>
                <div className={classes.footer}>
                    <Button variant="contained" onClick={handleSubmit} className={classes.button}>
                        Submit
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default SubmitIdeaModal