import React from 'react'
import { Link, Typography, Box, Grid, Divider } from '@material-ui/core';
import useStyles from "../styles/styles"

export default function SingleMessageView({ selectedMessage, deleteMail }) {
    const classes = useStyles();
    return (
        <Box >
            <Box pt={1} pl={5} pb={1} border={1} bgcolor="#033051" >
                <Typography variant="subtitle2" style={{ color: 'white' }} >
                    Single Message View
                </Typography>
            </Box>
            <Box mt={2} pl={4} pr={4}>
                {selectedMessage ?
                    <>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={9} sm={9} md={9} style={{ marginTop: "15px", marginBottom: "10px" }}>

                                    <Typography
                                        component="span"
                                        variant="body2"
                                        style={{ fontWeight: "500", color: "gray" }}
                                    >
                                        {'From  :  '}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        style={{ fontWeight: "800", color: "#033051" }}
                                    >
                                        {selectedMessage.from}
                                    </Typography>
                                    <Box mt={3}>
                                        <Typography
                                            component="div"
                                            variant="body2"
                                            style={{ fontWeight: "400", color: "gray" }}
                                        >
                                            {selectedMessage.body}
                                        </Typography>
                                    </Box>
                                    <Box mt={3}>
                                        <Typography
                                            component="div"
                                            variant="body2"
                                            style={{ fontWeight: "800", color: "#B8C4CD" }}
                                        >
                                            <Link href={selectedMessage.uri} target="_blank"
                                                style={{ fontWeight: "800", color: "#033051" }}
                                            >
                                                {selectedMessage.uriTitle}
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={3} sm={3} md={3} style={{ marginTop: "15px", marginBottom: "10px" }}>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        color="textPrimary"
                                        align="right"
                                        style={{ fontWeight: "600", color: "#424242" }}
                                    >
                                        {selectedMessage.createdAt.split("T")[0].split('-').join(".")}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        color="textPrimary"
                                        align="right"
                                        style={{ fontWeight: "600", color: "#424242" }}
                                    >
                                        {selectedMessage.createdAt.split("T")[1].split(":")[0] > 12 ? `${selectedMessage.createdAt.split("T")[1].split(":")[0] - 12}:${selectedMessage.createdAt.split("T")[1].split(":")[1]} PM` : `${selectedMessage.createdAt.split("T")[1].split(":")[0]}:${selectedMessage.createdAt.split("T")[1].split(":")[1]} AM`}

                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box mt={7} mb={3} width="full">
                                <Typography
                                    component="div"
                                    variant="body2"
                                    style={{ fontWeight: "400", color: "#bdbdbd", fontSize: "12px" }}
                                >
                                    you are receiving this notification because you chose to recive results for Special Filter as a service of your platinum membership you Can change setting of your Special Filter SETTINGS
                                </Typography>
                            </Box>
                            <Divider variant="fullWidth" />

                        </Box>
                        <Box style={{ marginTop: "15px", fontWeight: "300" }} onClick={() => deleteMail(selectedMessage.id)} className={classes.loadeMore}>
                            <Box display="flex" flexDirection="row-reverse">
                                <Box color="white" p={8} pt={0.8} pb={0.8} bgcolor="red" >
                                    <Typography>
                                        DELETE
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </>
                    : null}
            </Box>

        </Box >
    )
}
