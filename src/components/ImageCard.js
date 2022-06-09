import React from 'react';
import "./ImageCard.css";
import { Typography, Link } from "@mui/material";
import { ReactComponent as TwitterIcon } from "../assets/icon/twitter_big_outline.svg";

import { textColor } from "../constant";
const ITEM_WIDTH = 200
const CARD_HEIGHT = 300

export default function ImageCard(props) {
    /*
        {
            profile: "",
            nickname: "",
            title: "",
            description: "",
            twitterHandle: ""
        }
    */
    return (
        <div className="card-container" >
            <img src={props.profile} height={ITEM_WIDTH} width={ITEM_WIDTH} style={{
                borderRadius: '10%'
            }} />
            {/* <img src={glasstint} height={ITEM_WIDTH} width={ITEM_WIDTH} style={{
                position: "absolute",
                borderRadius: '10%',
                top: ITEM_WIDTH,
            }} /> */}
            <Typography variant="h5"
                component="div" sx={{
                    width: ITEM_WIDTH,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontFamily: 'SpecialText',
                    color: textColor
                }}>
                {props.nickname}
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    width: ITEM_WIDTH,
                    textAlign: 'center',
                    fontFamily: 'NormalText',
                    color: textColor


                }}>
                {props.title}
            </Typography>

            <Link
                variant="h6"
                target="_blank" rel="noopener noreferrer"
                href={`https://twitter.com/${props.twitterHandle}`}
                sx={{
                    width: ITEM_WIDTH,
                    textAlign: 'center',
                    fontFamily: 'NormalText',
                    color: textColor,
                    justifyContent: 'center',
                    display:"flex",
                    alignItems:"center"
                }}>
                <TwitterIcon fill={textColor} stroke={textColor} stroke-width='0' style={{
                    width: 18,
                    height:18
                }} />
                {' @'+props.twitterHandle}
            </Link>
        </div>
    );
}
