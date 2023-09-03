/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import Image from 'next/image';
import { makeStyles } from '@mui/styles';

// imagess
// import One from '../../../assets/One.jpg';
// import Two from '../../../assets/Two.jpg';
// import Three from '../../../assets/Three.jpg';

const useStyles = makeStyles({
    containerback: {
        backgroundColor: 'white',
        padding: '1px',
    },
    container: {
        backgroundColor: 'white',
        maxWidth: '1330px',
        margin: '-160px auto',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0px',
        borderRadius: '20px',
        paddingBottom: '110px',
        '@media screen and (max-width: 850px)': {
            flexDirection: 'column',
            alignItems: 'center',
            // margin: "-100px 50px",
        },
        '& > div': {
            maxWidth: '500px',
            minWidth: '350px',
            height: '930px',
            margin: '1px',
            width: '100%',
            boxShadow: '0 0 2px #d4d1d1',
            border: '0px solid #d4d1d1',
            '@media screen and (max-width: 1070px)': {
                minWidth: '280px',
                height: '930px',
                maxWidth: '900px',
            },
        },
        '& > div:nth-child(1)': {
            textAlign: 'center',
            fontSize: 'x-large',
            borderRadius: '20px 0px 0px 20px',
            '@media screen and (max-width: 850px)': {
                borderRadius: '0px 0px',
            },
            '& > ul': {
                '& > li': {
                    '& > p': {
                        fontWeight: 'bold',
                        color: 'black',
                    },
                },
            },
        },
        '& > div:nth-child(2)': {
            textAlign: 'center',
            fontSize: 'x-large',
            borderRadius: '0px 0px',
            '& > ul': {
                '& > li': {
                    '& > p': {
                        fontWeight: 'bold',
                        color: 'black',
                    },
                },
            },

        },
        '& > div:nth-child(3)': {
            textAlign: 'center',
            fontSize: 'x-large',
            borderRadius: ' 0px 20px 20px 0px',
            '& > ul': {
                '& > li': {
                    '& > p': {
                        fontWeight: 'bold',
                        color: 'black',
                    },
                },
            },
            '@media screen and (max-width: 850px)': {
                borderRadius: '0px 0px',
            },
            '& li': {
                margin: '-2px',
            },
        },
        '& li': {
            // textDecoration: 'none',
            listStyle: 'none',
            '& p': {
            },
        },
    },
    paratext: {
        color: 'black',
    },
    designer_img: {
        width: '25%',
        height: '5%',
        borderRadius: '50%',
        objectFit: 'cover',
        marginLeft: '37%',
        marginTop: '50px',
        marginBottom: '13px',
    },
    frontend_img: {
        width: '22%',
        height: '5%',
        borderRadius: '50%',
        objectFit: 'cover',
        marginLeft: '36.5%',
        marginTop: '50px',
        marginBottom: '13px',
    },
    img_mentor: {
        width: '29%',
        height: '5%',
        borderRadius: '50%',
        objectFit: 'cover',
        marginLeft: '34%',
        marginTop: '43px',
        marginBottom: '10px',
    },
    designer_things: {
        fontSize: 16,
        '& > p:nth-child(2)': {
            color: '#6E07F3',
            marginBottom: '-40px',
            '@media screen and (max-width: 961px)': {
                marginTop: '-30px',
            },
        },
        '& > p:nth-child(4)': {
            color: '#6E07F3',
        },
        '& p': {
            padding: '10px 10px',
            fontSize: '18px',
            margin: '22px',
            lineHeight: '30px',
            color: 'black',
        },
        '& ul': {
            padding: '0px',
            listStyle: 'none',
            color: 'black',
        },
        textDecoration: 'none',
        listStyle: 'none',
    },
    frontend_div2: {
        fontSize: 16,
        '& > p:nth-child(2)': {
            margin: '35px',
            color: '#6E07F3',
            marginBottom: '-30px',
        },
        '& > p:nth-child(4)': {
            color: '#6E07F3',
            marginTop: '-15px',
        },
        '& p': {
            fontSize: '18px',
            padding: '5px 10px',
            margin: '20px',
            lineHeight: '30px',
            color: 'black',
        },
        '& ul': {
            padding: '0px',
            listStyle: 'none',
            lineHeight: '18px',
            color: 'black',
        },
    },
    mentor_div2: {
        fontSize: 16,
        '& > p:nth-child(2)': {
            color: '#6E07F3',
            marginBottom: '-40px',
        },
        '& > p:nth-child(4)': {
            color: '#6E07F3',
        },
        '& > p:nth-child(1)': {
            margin: '8px',
            color: 'black',
        },
        '& p': {
            fontSize: '18px',
            padding: '10px 10px',
            margin: '22px',
            lineHeight: '30px',
            color: 'black',
        },
        '& ul': {
            padding: '0px',
            color: 'black',
        },
    },
});

function Containerbox() {
    const classes = useStyles();

    return (
        <div>
            <>
                <>
                    <div />
                </>
                <div className={classes.containerback}>
                    <div className={classes.container}>
                        <div>
                            <ul>
                                <div className={classes.designer_img}>One
                                    {/* <Image src={One} /> */}
                                </div>
                                <li>
                                    <p className={classes.paratext}>Designer</p>
                                    <div className={classes.designer_things}>
                                        <p>
                                            I start walking on the path to turn my passion to professional.
                                            I developed a profound passion for design through my innate love
                                            for creating pleasing visuals and transforming spaces.This fervor
                                            for designing led me to hone my skills through continuous learning
                                            and hands-on experience, allowing me to evolve into a dedicated
                                            and creative designer.
                                            I value simple content structure, clean design patterns and thoughtful
                                            interactions.
                                        </p>
                                        <p>Things I enjoy designing:</p>
                                        <p>UI, Web, Apps, Logos, Layout</p>
                                        <p>Design Tools:</p>
                                        <ul>
                                            <li />
                                            Material-UI
                                            <br />
                                            <li />
                                            <br /> Figma
                                            <li />
                                            <br /> Font Awesome
                                            <li />
                                            <br /> Chakra UI
                                            <li />
                                            <br /> Framer X
                                            <li />
                                            <br />
                                            React-icons
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <div className={classes.frontend_img}>Two
                                    {/* <Image src={Two} /> */}
                                </div>
                                <li>
                                    <p>Frontend Developer</p>
                                    <div className={classes.frontend_div2}>
                                        <p>
                                            Bridging Code and Creativity for Unforgettable Digital Experiences.
                                            I like to code things from scratch, and enjoy bringing ideas to life
                                            in the browser.
                                            Passionate Front-End Developer with a deep love for design and creating
                                            visually appealing and digital experiences. I blend technical expertise
                                            with a strong passion for design, for crafting responsive, captivating,
                                            and user-friendly websites that leave a lasting impact

                                        </p>
                                        <p>Languages I use:</p>
                                        <p>HTML, Reactjs, Nextjs, CSS, Javascript, Git</p>
                                        <p>
                                            <br />
                                            Dev Tools:
                                        </p>
                                        <ul>
                                            React Developer Tools
                                            <li />
                                            <br />
                                            Redux DevTools
                                            <li />
                                            <br />
                                            ESLint
                                            <li />
                                            <br />
                                            Bulma
                                            <li />
                                            <br />
                                            Prettier
                                            <li />
                                            <br />
                                            Github
                                            <li />
                                            <br />
                                            Next.js DevTools
                                            <li />
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.mentorbox}>
                            <ul>
                                <div className={classes.img_mentor}>Three
                                    {/* <Image src={Three} /> */}
                                </div>
                                <li>
                                    <p>Learner</p>
                                    <div className={classes.mentor_div2}>
                                        <p>
                                            My passion for technology and my thirst for new challenges have
                                            led me to set my sights on a new horizon becoming a proficient
                                            React developer.
                                            Join me as I navigate this transition, armed with every line of
                                            code I write. I am shaping user experiences, creating seamless
                                            interactions and bringing digital concepts to life. An appetite
                                            for learning and a heart full of passion for React. Together, we
                                            will explore the world of frontend development and celebrate the victories.
                                        </p>
                                        <p>Experiences I draw from:</p>
                                        <p>designing, Website developement, Accessibility </p>
                                        <p>Overall Status:</p>
                                        <ul>
                                            2.9 years experience
                                            <li />
                                            <br />
                                            8 months learning experience
                                            <li />
                                            <br />
                                            3 major projects
                                            <li />
                                            <br />
                                            5 minor projects
                                            <li />
                                            <br />
                                            3 different team group
                                            <li />
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Containerbox;
