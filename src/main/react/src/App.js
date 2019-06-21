/** @jsx React.DOM */
import React, {useState} from 'react';
import FeedbackDialog from './components/FeedbackDialog'
import IconButton from '@material-ui/core/IconButton'
import FeedbackIcon from '@material-ui/icons/Feedback'
import './App.css';


const App = () => {

  const [open, setOpen] = useState(true)

  return (
    <div className="App">
        <IconButton onClick={() => setOpen(true)}>
            <FeedbackIcon/>
        </IconButton>
        <FeedbackDialog  open={open} changeState={(param) => setOpen(param)}/>
    </div>
  )
}

export default App;
