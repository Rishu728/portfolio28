/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    heading: {
        padding: '70px',
        backgroundColor: 'white',
        textAlign: 'center',
        fontFamily: ' "eurostile", sans-serif',
    },
    h3: {
        fontSize: '3.2rem',
        margin: '20px 10px',
        '@media screen and (max-width: 290px)': {
            margin: '10px -22px',
        },
    },
    h: {
        fontSize: '1.7rem',
        lineHeight: '30px',
        fontFamily: ' "eurostile", sans-serif',
    },
    //  Images
    imgs: {
        backgroundColor: 'white',
    },
    img: {
        margin: '0 auto',
        textAlign: 'center',
        width: '100%',
        maxWidth: '900px',
        height: 'auto',
    },
    img1: {
        textAlign: 'center',
        width: '500px',
        height: 'auto',
        maxWidth: '100%',
        margin: '0 auto',
        marginTop: '-30px',
    },
    img2: {
        height: 'auto',
        maxWidth: '100%',
        width: '100%',
    },
    //  Blue bar
    blue_bar: {
        backgroundColor: '#6e07f3',
        height: '620px',
        marginTop: '-4px',
        '@media screen and (max-width: 400px)': {
            height: '730px',
        },
    },
    // blue_bar_content
    blue_bar_content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '45%',
        transform: 'translateY(-50%)',
        '& h1': {
            color: 'white',
            fontSize: '200%',
            fontFamily: ' "eurostile", sans-serif',
        },
        '& p': {
            paddingTop: '17px',
            color: 'white',
            textAlign: 'center',
            width: '62%',
            fontSize: '22px',
            lineHeight: '1.3',
            fontFamily: ' "eurostile", sans-serif',
        },
        '@media screen and (max-width: 454px)': {
            '& h1': {
                textAlign: 'center',
            },
            '& p': {
                fontSize: '115%',
            },
        },
    },
});

function Mentoring_style() {
    const classes = useStyles();

    return (
        <div>
            <div>
                <title>Home-Hashtag404</title>
            </div>
            <div className={classes.blue_bar}>
                <div className={classes.blue_bar_content}>
                    <h1>My Mentoring Style</h1>
                    <p>
                        I strive to function as a
                        catalyst and challenge you to grow
                        as both a designer and a human.
                        I care about the details and will
                        encourage you to think, plan, and
                        dream. These are the qualities
                        I will bring to every conversation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Mentoring_style;
