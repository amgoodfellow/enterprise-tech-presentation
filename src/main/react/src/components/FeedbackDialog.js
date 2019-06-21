import React, {useState} from 'react'
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';
import FormHelperText from '@material-ui/core/FormHelperText/index';
import FormControl from '@material-ui/core/FormControl/index';
import NativeSelect from '@material-ui/core/NativeSelect/index';
import Input from '@material-ui/core/Input/index';
import Radio from '@material-ui/core/Radio/index';
import RadioGroup from '@material-ui/core/RadioGroup/index';
import FormControlLabel from '@material-ui/core/FormControlLabel/index';
import {submit} from "../api/api";

const FeedbackDialog = (props) => {

    // Declares state variable and update function
    // [stateVar updateFun] = useState(initialValue)
    const [body, setBody] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)
    const [canSubmit, setCanSubmit] = useState(false)

    const handleClose = () => props.changeState(!props.open);

    const options = ['', 'Very Bad', 'Bad', 'Acceptable', 'Good', 'Very Good']

    const open = props.open;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{backgroundColor: '#016fbf', color: "white"}}>
                Submit Feedback
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    At Company we welcome feedback to provide an excellent customer experience. We'd love to know
                    how you feel about our software, so we can continue making it better
                </DialogContentText>
                <FormControl>
                    <NativeSelect
                        input={<Input />}
                        value={rating}
                        onChange={(value) => {setRating(value); setCanSubmit(true)}}
                    >
                        {options.map((i, e) => <option value={e}>{i}</option>)}
                    </NativeSelect>
                    <FormHelperText>How would you rate Company software experience?</FormHelperText>
                </FormControl>
                {canSubmit && <div>
                    <TextField
                        margin="dense"
                        id="feedback"
                        label="Feel free to include an optional comment or suggestion"
                        type="text"
                        fullWidth
                        multiline={true}
                        value={body}
                        onChange={(val) => setBody(val.target.value)}
                        rows={3}
                    />
                    <RadioGroup
                        aria-label="category"
                        name="category"
                        style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}
                        value={category}
                        onChange={(val) => console.log(val)}
                    >
                        <FormControlLabel
                            value="general"
                            control={<Radio color="primary" />}
                            label="General"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="bug"
                            control={<Radio color="primary" />}
                            label="Bug"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="design"
                            control={<Radio color="primary" />}
                            label="Design"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="feature"
                            control={<Radio color="primary" />}
                            label="Feature"
                            labelPlacement="bottom"
                        />
                    </RadioGroup>
                </div>}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => submit({rating, category, body}).then(handleClose)}
                        color="primary" disabled={!canSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FeedbackDialog
