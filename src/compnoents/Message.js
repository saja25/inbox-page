import React, { useState } from 'react'
import { TextField, IconButton, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "../styles/styles"
import MessageElement from "./MessageElement"


export default function Message({ mail, count, messageClick, loadeMore }) {
    const classes = useStyles();
    const [showSearch, setshowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("")
    const [searchedMessage, setSearchedMessage] = useState();

    const search = (value) => {
        if (value !== "") {
            const searchResult = (mail.filter(element => {
                return (element.title === value)
            }))
            // console.log(searchResult)
            setSearchValue(value)
            setSearchedMessage(searchResult)
        } else setSearchedMessage(mail)

    }
    return (
        <Box xs={12} mr={1}>
            <Grid container  >
                <Grid item xs={6} >
                    <Box pt={1} pb={1} border={1} display="flex"
                        alignItems="center" justifyContent="center">
                        <Typography variant="subtitle2"  >
                            INBOX
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box pt={1} pb={1} border={1} bgcolor="#033051" display="flex"
                        alignItems="center" justifyContent="center">
                        <Typography variant="subtitle2" style={{ color: 'white' }}>
                            Recycle Bin
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box xs={12} border={1} mt={0.6} >
                <Box bgcolor="#F0F1F1" mb={2}>
                    <Toolbar >

                        {showSearch ?
                            <TextField id="standard-basic" label="search" onChange={(e) => search(e.target.value)} />
                            : <Typography variant="subtitle2">
                                Messages {<span style={{ display: "inline-block", paddingLeft: "5px", paddingRight: "5px", margin: "8px", backgroundColor: "#FFF96A" }}> {count}</span>}  of  Total (231)
                            </Typography>}
                        <IconButton color="inherit" edge="end" style={{ position: "absolute", right: "19px" }} >
                            <SearchIcon style={{ fontSize: "30px" }} onClick={() => setshowSearch(!showSearch)} />


                        </IconButton>
                    </Toolbar>
                </Box>
                <Box style={{ overflowY: "auto", overflowX: "hidden", width: "100%", height: "80vh" }}>
                    <MessageElement
                        inbox={searchValue.length > 1 ? searchedMessage : mail}
                        messageClick={messageClick} />
                </Box>
                <Box display="flex" justifyContent="center" m={4} onClick={() => loadeMore()} className={classes.loadeMore}>
                    <Typography style={{ fontWeight: "900", color: "#424242" }}>
                        lode more ....
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}
