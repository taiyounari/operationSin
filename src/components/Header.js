import * as React from "react";
import PropTypes from 'prop-types';

// importing material UI components
import { AppBar, Box, Toolbar, Typography, Button, Link, IconButton, useScrollTrigger, Slide } from "@mui/material";


import { ReactComponent as DiscordIcon } from "../assets/icon/discord_big_outline.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon/twitter_big_outline.svg";
import { ReactComponent as InstagramIcon } from "../assets/icon/instagram_big_outline.svg";
import { discordInviteCode, twitterHandle, instagramName, titleColor, projectName, primaryColor } from "../constant";

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
export default function Header(props) {
    return (
        <HideOnScroll {...props}>
            <AppBar color="primary" elevation={0}
            sx={{
                bgcolor:"#494949"
            }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "TitleText",
                            color: titleColor,
                            textAlign: 'center',
                        }}>
                        {projectName}
                    </Typography>
                    <Link
                        href="#aboutCollection"
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "TitleText",
                            color: titleColor,
                            textAlign: 'center',
                        }}>About
                    </Link>
                    <Link
                        href="#sneakPeeks"
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "TitleText",
                            color: titleColor,
                            textAlign: 'center',
                        }}>Sneak peeks
                    </Link>
                    <Link
                        href="#stat"
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "TitleText",
                            color: titleColor,
                            textAlign: 'center',
                        }}>Statistic
                    </Link>

                    <Link
                        href="#aboutTeam"
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "TitleText",
                            color: titleColor,
                            textAlign: 'center',
                        }}>Teams
                    </Link>
                    <Link
                        href="#faq"
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "TitleText",
                            color: titleColor,
                            textAlign: 'center',
                        }}>{'QAs'}
                    </Link>


                    {discordInviteCode !== "" &&
                        <Button href={`https://discord.com/invite/${discordInviteCode}`}
                            target="_blank" rel="noopener noreferrer"
                            color="inherit">
                            <DiscordIcon fill={titleColor} stroke={primaryColor} stroke-width='0' style={{

                            }}/>
                        </Button>}

                    {twitterHandle !== "" &&
                        <Button href={`https://twitter.com/${twitterHandle}`}
                            target="_blank" rel="noopener noreferrer"
                            color="inherit">
                            <TwitterIcon fill={titleColor} stroke={primaryColor} stroke-width='0' />

                        </Button>}

                    {instagramName !== "" &&
                        <Button href={`https://www.instagram.com/${instagramName}`}
                            target="_blank" rel="noopener noreferrer"
                            color="inherit">
                            <InstagramIcon fill={titleColor} stroke={primaryColor} stroke-width='0' />

                        </Button>
                        }
                </Toolbar>
            </AppBar>

        </HideOnScroll>
        

    );
} 