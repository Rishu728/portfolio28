/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useMediaQuery, useTheme } from '@mui/material';

// imagess
import Hashtag from '../../../assets/Hashtag.jpg';

const useStyles = makeStyles({
    navbar_back: {
        backgroundColor: 'rgb(249, 246, 238)',
    },
    navbar: {
        maxWidth: '1440px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '20px',
        '@media screen and (max-width: 1080px)': {
            display: 'flex',
            '& #icon': {
                display: 'none',
                '@media screen and (max-width: 680px)': {
                    display: 'block',
                },
                '& .MuiSvgIcon-root': {
                    width: '50px',
                },
            },
        },
        '& > div:nth-child(1)': {
            width: '190px',
            marginLeft: '3%',
        },
        '& a': {
            textDecoration: 'none',
        },
        // nav list
        '& > div:nth-child(2)': {
            width: '0.7rem',
            marginRight: '60%',
        },
    },
    Navbar_btn: {
        display: 'none',
        '@media screen and (max-width: 1080px)': {
            textAlign: 'center',
            display: 'block',
            marginLeft: '90%',
            position: 'absolute',
            top: '1.5%',
        },
    },
    Navbar_tags: {
        padding: '20px',
        maxWidth: '1440px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        '@media screen and (max-width: 1080px)': {
            display: 'none',
        },
        '& > div:nth-child(1)': {
            fontWeight: 600,
            fontFamily: ' "eurostile", sans-serif',
            marginRight: 'auto',
            maxWidth: '1440px',
            width: '90px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px',
            backgroundColor: 'rgb(249, 246, 238)',
            padding: '0px 70px',
            '& a': {
                color: 'black',
            },
            '& a:hover': {
                color: '#6E07F3', // set text color to #6E07F3 on hover
            },
        },
        // nav list1
        '& > div:nth-child(2)': {
            fontSize: '18px',
            fontWeight: 500,
            fontFamily: 'sans-serif',
            marginRight: 'auto',
            backgroundColor: 'rgb(240, 234, 214)',
            border: '2px solid #6E07F3',
            borderRadius: '30px',
            width: '125px',
            height: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            boxShadow: '2px 2px 2px rgb(115, 147, 179)',
            '& a': {
                color: '#6e07f3',
            },
            '&:hover': {
                backgroundColor: '#6e07f3',
                '& a': {
                    color: 'white',
                },
            },
        },
    },
});

function NavBarContainer() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const drawerWidth = isMobile ? '100%' : 240;
    const [ state, setState ] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event
      && event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [ anchor ]: open });
    };

    const list = (anchor) => (
        <div
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[ 'Mentorship', 'Say Hello' ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <div>
                <title>Home-Hashtag404</title>
                <nav>
                    <div className={classes.navbar_back}>
                        <div className={classes.navbar}>
                            <div className={classes.img404}>
                                <Link legacyBehaviour href="./">
                                    <Image src={Hashtag} width={80} height={40} />
                                </Link>
                            </div>
                            <div />
                            <div className={classes.Navbar_tags}>
                                <div>
                                    <Link legacyBehaviour href="./FormPage">
                                        <a> Mentorship</a>
                                    </Link>
                                </div>
                                <div>
                                    <Link legacyBehaviour href="./SayHello">
                                        <a> Say Hello</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <>
                <div className={classes.Navbar_btn}>
                    <React.Fragment key="top">
                        <Button onClick={toggleDrawer('top', true)}>
                            <MenuOpenIcon />
                        </Button>
                        <Drawer
                            anchor="top"
                            open={state.top}
                            onClose={toggleDrawer('top', false)}
                        >
                            {list('top')}
                        </Drawer>
                    </React.Fragment>
                </div>
            </>
        </div>
    );
}
export default NavBarContainer;
