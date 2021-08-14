import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';
import Message from "./compnoents/Message";
import SingleMessageView from "./compnoents/SingleMessageView";
import useStyles from "./styles/styles"
import { fetchMail, deleteMail } from "./apiCall/ApiCall"

function App() {
  const classes = useStyles();
  const [mail, setMail] = useState();
  const [count, setCount] = useState(0);
  const [selectedMessage, setSelectedMessage] = useState();
  const [deletedMessage, setDeletedMessage] = useState([false, ""])
  useEffect(() => {
    fetchMail(count).then(messages => {
      setMail(messages.results)
      setCount((preState) => preState + 5)
    });
  }, [])
  const messageClick = (selectedMessage) => {
    setSelectedMessage(selectedMessage)
  }
  const loadeMore = () => {
    fetchMail(count).then(messages => {
      setMail((preState) => [...preState, ...messages.results])
      setCount((preState) => preState + 5)

    });
  }
  const deleteMessage = (id) => {
    deleteMail(id)
    setDeletedMessage([true, id])
    setSelectedMessage()
  }
  return (
    <Grid container spacing={0} className={classes.root} justifyContent="center" >
      <Grid item sm={4} xs={12}>
        <Message
          mail={mail}
          count={count}
          messageClick={messageClick}
          loadeMore={loadeMore}
        />
      </Grid>
      <Grid item sm={7} xs={12}>
        <SingleMessageView
          selectedMessage={selectedMessage}
          deleteMail={deleteMessage}
        />
      </Grid>
    </Grid >

  );
}

export default App;
