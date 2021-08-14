import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    massageStyle: {
        '&:hover': {
            background: "#CADFF1",
        },
        '&:active': {
            background: "#CADFF1"
        }
    },
    loadeMore: {
        '&:hover': {
            cursor: "pointer"
        },
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.5em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdbdbd',
            borderRadius: "3px",
            backgroundClip: 'padding-box',
        },

    }

}));
export default useStyles