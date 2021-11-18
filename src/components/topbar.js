import * as React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {topbar, topbarWrapper, logo,topbarIconContainer, topLeft, topRight, box} from "./topbar.module.css"

export default function Topbar () {
    return (
        <div className={topbar}>
            <div className={topbarWrapper}>
                    <div className={box}>
                        <div className={topbarIconContainer}>
                            <InstagramIcon/>
                        </div>

                        <div className={topbarIconContainer}>
                            <TwitterIcon/>
                        </div>

                        <div className={topbarIconContainer}>
                            <FacebookIcon/>
                        </div>           
                        
                    </div>
                    <div className={box}>
                        <span className={logo}>Marriage Hackathon</span>
                    </div>
                    <div className={box}>
                        <div className={topbarIconContainer}>
                            <Brightness4Icon/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

