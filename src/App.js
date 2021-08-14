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
  const [deletedMessage, setDeletedMessage] = useState(false)
  useEffect(() => {
    fetchMail().then(messages => {
      setMail(messages.results)
      setCount(messages.count + count)
    });
  }, [selectedMessage, count])
  const messageClick = (selectedMessage) => {
    setSelectedMessage(selectedMessage)
  }
  const loadeMore = () => {
    fetchMail().then(messages => {
      setMail((preState) => [...preState, ...messages.results])
      setCount(messages.count + count)
    });
  }
  const deleteMessage = (id) => {
    deleteMail(id)
    setDeletedMessage(!deletedMessage)
    setSelectedMessage()
  }
  return (
    <Grid container xs={12} spacing={0} className={classes.root} justifyContent="center" >
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
