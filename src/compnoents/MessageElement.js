import React from 'react'
import { Divider, Typography, Box, Grid, } from '@material-ui/core';
import { Mail, Drafts } from '@material-ui/icons';
import useStyles from "../styles/styles"
export default function MessageElement({ inbox, messageClick }) {
    const classes = useStyles();
    return (
        <>
            {inbox ?
                inbox.map(element => {
                    return (
                        < Box xs={12} key={element.id} m={0} className={classes.massageStyle} onClick={() => messageClick(element)}>
                            <Grid container spacing={2}>
                                <Grid item xs={1} md={1} style={{ margin: "20px", marginTop: "15px" }}>
                                    {element.opened ? <Drafts fontSize="large" style={{ color: "#9F9F9F", marginTop: "5px" }} />
                                        : <Mail fontSize="large" style={{ color: "#FF9B02", margin: "0" }} />}
                                </Grid>
                                <Grid item xs={5} sm={5} md={6} style={{ marginTop: "15px", marginBottom: "10px" }}>
                                    {element.opened ?
                                        <>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                                style={{ fontWeight: "500", color: "gray" }}
                                            >
                                                {element.title}
                                            </Typography>
                                            <Typography
                                                component="div"
                                                variant="body2"
                                                color="textPrimary"
                                                style={{ fontWeight: "500", color: "gray" }}
                                            >
                                                {element.from}
                                            </Typography>
                                        </> :
                                        <>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                                style={{ fontWeight: "600", color: "#424242" }}
                                            >
                                                {element.title}
                                            </Typography>
                                            <Typography
                                                component="div"
                                                variant="body2"
                                                color="textPrimary"
                                                style={{ fontWeight: "600", color: "#424242" }}
                                            >
                                                {element.from}
                                            </Typography>
                                        </>
                                    }
                                    <Box mt={1}>
                                        <Typography
                                            component="div"
                                            variant="body2"
                                            color="textPrimary"
                                            style={{ fontWeight: "400", color: "gray" }}
                                        >
                                            {element.body.split(" ", 5).join(" ")}
                                        </Typography>
                                    </Box>

                                </Grid>

                                <Grid item xs={3} sm={2} md={3} style={{ marginTop: "15px", marginBottom: "10px" }}>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        color="textPrimary"
                                        align="right"
                                        style={{ fontWeight: "600", color: "#424242" }}
                                    >
                                        {element.createdAt.split("T")[0].split('-').join(".")}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        color="textPrimary"
                                        align="right"
                                        style={{ fontWeight: "600", color: "#424242" }}
                                    >
                                        {element.createdAt.split("T")[1].split(":")[0] > 12 ? `${element.createdAt.split("T")[1].split(":")[0] - 12}:${element.createdAt.split("T")[1].split(":")[1]} PM` : `${element.createdAt.split("T")[1].split(":")[0]}:${element.createdAt.split("T")[1].split(":")[1]} AM`}

                                    </Typography>

                                </Grid>
                            </Grid>
                            <Divider variant="inset" style={{ marginRight: "20px" }} />
                        </Box>)
                })
                : null
            }

        </>
    )
}
