/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import Tools from '../../../assets/Tools.JPG';
import Resources from '../../../assets/Resources.JPG';
import Networking from '../../../assets/Networking.JPG';
import Opportunity from '../../../assets/Opportunity.JPG';
import Growth from '../../../assets/Growth.JPG';

const useStyles = makeStyles({
    interest_back: {
        backgroundColor: 'white',
    },
    interest: {
        backgroundColor: 'white',
        textAlign: 'center',
        height: '30%',
        paddingTop: '122px',
        paddingBottom: '22px',
        '& h1': {
            fontFamily: '"eurostile", sans-serif',
        },
        '& p': {
            fontSize: '20px',
            margin: '40px',
            lineHeight: '30px',
        },
        '& Svg': {
            margin: '-4px 5px',
        },
    },
    container: {
        display: 'flex',
        margin: 'auto 90px',
        gap: '20px',
        paddingBottom: '100px',
        '@media screen and (max-width: 1080px)': {
            display: 'grid',
        },
    },
    container_one: {
        textAlign: 'center',
        '& h3': {
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '45px',
        },
        '& p': {
            lineHeight: '25px',
            fontSize: '17px',
        },
    },
});
function Benefits() {
    const classes = useStyles();

    return (
        <div className={classes.interest_back}>
            <div className={classes.interest}>
                <h1>Benefits of Mentorship</h1>
                <p>I know a thing or two because Ive done a thing or two in my design career, and Im <br />
                    committed to helping you make use of that knowledge.
                </p>
            </div>
            <div className={classes.container}>
                <div className={classes.container_one}>
                    <div>
                        <div>
                            <Image src={Tools} width={90} height={70} />
                        </div>
                        <h3>Tools</h3>
                        <p>Ill help you build confidence and
                            skill in your design tools.
                        </p>
                    </div>
                </div>
                <div className={classes.container_one}>
                    <div>
                        <div>
                            <Image src={Resources} width={90} height={70} />
                        </div>
                        <h3>Tools</h3>
                        <p>Ill help you build confidence and
                            skill in your design tools.
                        </p>
                    </div>
                </div>
                <div className={classes.container_one}>
                    <div>
                        <div>
                            <Image src={Networking} width={90} height={70} />
                        </div>
                        <h3>Tools</h3>
                        <p>Ill help you build confidence and
                            skill in your design tools.
                        </p>
                    </div>
                </div>
                <div className={classes.container_one}>
                    <div>
                        <div>
                            <Image src={Opportunity} width={90} height={70} />
                        </div>
                        <h3>Tools</h3>
                        <p>Ill help you build confidence and
                            skill in your design tools.
                        </p>
                    </div>
                </div>
                <div className={classes.container_one}>
                    <div>
                        <div>
                            <Image src={Growth} width={90} height={70} />
                        </div>
                        <h3>Tools</h3>
                        <p>Ill help you build confidence and
                            skill in your design tools.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
