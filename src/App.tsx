import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from "./components/Header/Header";
import Header1 from "./components/Header/Header1";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: 'linear-gradient(154.76deg, #BBD4CE 12.74%, rgba(253, 235, 211, 0.71) 51.72%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
export default function App() {
const classes = useStyles();
return (
    <div className={classes.root}>
        <Header/>
    </div>
);
}