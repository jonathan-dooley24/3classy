import React from 'react'
import {
    Paper,
    Grid,
    Button,
    Typography
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'


// This is a React hook used for organizing the styling of each element in this component
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        padding: theme.spacing(4),
        position: 'relative',
        flexGrow: 1,
        height: '100%'
    },
    title: {
        color: '#7E16A4',
        fontWeight: '600',
    },
    message: {
        color: 'red',
        fontWeight: 600,
    },
}))

// Main component
const AddRoom = () => {
    const [roomNum, setRoomNum] = React.useState('');
    const [building, setBuilding] = React.useState(''); // Room number (e.g., 420, 350, etc.)
    const classes = useStyles();

    // This function will retrieve the value entered in the Room number field whenever it changes
    const handleChangeRoomNum = (event) => {
        setRoomNum(event.target.value);
    }

    // This function will retrieve the value entered in the building field whenever it changes
    const handleChangeBuilding= (event) => {
        setBuilding(event.target.value);
    }

    const handleSubmit = (event) => {
        if (roomNum !== '' && building !== '') {
            // function
        }
    }

    return (
        <Paper className={classes.container} elevation={0} >
            <Grid container spacing={2}>
                <Grid item xs={12} fullWidth>
                    <Typography variant="h6" className={classes.title} gutterBottom>
                        Add New Room
                    </Typography>
                </Grid>

                <Grid item xs={12} fullWidth>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} fullWidth>
                                <TextValidator
                                    size="medium"
                                    variant="outlined"
                                    label="Building"
                                    fullWidth
                                    name="Building"
                                    type="text"
                                    value={building}
                                    validators={['matchRegexp:^[A-Z]{1,3}$', 'required']}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.slice(0, 4)
                                    }}
                                    errorMessages={[
                                        'Invalid - It should have 3 characters',
                                        'this field is required',
                                    ]}
                                    onChange={handleChangeBuilding}
                                />
                            </Grid>
                            <Grid item xs={4} fullWidth>
                                <TextValidator
                                    size="medium"
                                    variant="outlined"
                                    label="Room Number"
                                    fullWidth
                                    name="RoomNum"
                                    type="text"
                                    value={roomNum}
                                    validators={['matchRegexp:^[0-9]{1,3}$', 'required']}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.slice(0, 4)
                                    }}
                                    errorMessages={[
                                        'Invalid - It should be a 3-digit number',
                                        'this field is required',
                                    ]}
                                    onChange={handleChangeRoomNum}
                                />
                            </Grid>
                            <Grid item xs={12} fullWidth>
                                <Button variant="contained"
                                    size="large"
                                    type="submit"
                                    disableElevation
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>


                    </ValidatorForm>
                </Grid>
            </Grid>

        </Paper>
    )
}
// Export the component
export default AddRoom