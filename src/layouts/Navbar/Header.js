/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';

// imagess
import avartar from '../../../assets/avartar.png';
import computer from '../../../assets/computer.jpg';

const useStyles = makeStyles({
    //   Header
    heading: {
        padding: '70px',
        backgroundColor: 'white',
        textAlign: 'center',
        fontFamily: ' "eurostile", sans-serif',
    },
    h3: {
        fontSize: '2.2rem',
        margin: '20px 10px',
        color: 'blue',
        fontFamily: 'serif',
        textShadow: '3px 4px 3px rgb(250, 128, 114)',
        '@media screen and (max-width: 290px)': {
            margin: '10px -22px',
        },
    },
    h: {
        fontSize: '1.7rem',
        lineHeight: '30px',
        fontFamily: 'eurostile',
        color: 'rgb(0,112,60)',
        textShadow: '2px 2px 2px rgb(115, 147, 179)',
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
        // textAlign: 'center',
        width: '280px',
        height: '260px',
        // maxWidth: '100%',
        margin: '0 auto',
        // marginTop: '-30px',
        borderRadius: '90%',
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

function Header() {
    const classes = useStyles();

    return (
        <div>
            <div>
                <title>Home-Hashtag404</title>
            </div>

            <div className={classes.heading}>
                <h1 className={classes.h3}>
                    Explorer, Frontend Developer & Enthusiast Learner
                </h1>
                <h3 className={classes.h}>
                    I design and code beautifully simple things, and I love what I do.
                </h3>
            </div>

            {/* Images    */}
            <div className={classes.imgs}>
                <div className={classes.img}>
                    <div className={classes.img1}><Image style={{ borderRadius: '100%' }} src={avartar} /></div>
                    <div className={classes.img2}><Image src={computer} /></div>
                </div>
            </div>

            {/* Blue bar */}
            <div className={classes.blue_bar}>
                <div className={classes.blue_bar_content}>
                    <h1>Hi, I am Rishu Kumari.</h1>
                    <p>
                        I am a passionate React developer and dedicated learner, journeying through the exciting world of web development.
                        With a strong foundation in React and a love for crafting dynamic user experiences, As a developer, I revel in the
                        process of turning intricate designs into responsive, feature-rich websites that engage and inspire users. I am
                        committed to staying on the cutting edge of web technologies, and my journey as a learner is an integral part of my
                        development path. Each project I undertake serves as an opportunity to not only showcase my skills but also to explore
                        new horizons.Lets code, learn, and innovate together.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
