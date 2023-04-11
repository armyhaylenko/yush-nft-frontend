import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from "./components/Header/Header";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from './components/SecondPage/SecondPage';
import Footer from './components/Footer/Footer';
import RunningText from "./components/RunningText/RunningText";
import Creators from './components/Creators/Creators';
import MyCounter from './components/Counter/MyCounter';
import ThirdPage from "./components/ThirdPage/ThirdPage";

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
        <FirstPage/>
        <RunningText/>
        <SecondPage/>
        <ThirdPage/>
        <MyCounter/>
        <Creators/>
        <Footer/>
    </div>
);
}