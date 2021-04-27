import React from 'react'
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

const StatusAlert = ({statusAlert, closeStatusAlert}) => {
    return (
        <Snackbar
            anchorOrigin = {{ vertical:'top',horizontal:'right'}}
            open={statusAlert!=''} autoHideDuration={4000} onClose={closeStatusAlert}>
            <Alert onClose={closeStatusAlert} severity="success" variant="filled" style={{backgroundColor:"#FDB827"}}>
                {statusAlert}
            </Alert>
        </Snackbar>
    )
}

export default StatusAlert