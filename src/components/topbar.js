import * as React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {topbar, topbarWrapper, logo,topbarIconContainer, box, govImageContainer, govImage, topLeft, topRight} from "./topbar.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Topbar () {
    return (
        <div className={topbar}>
            <div className={topbarWrapper}>
                    <div className={topLeft}>                  
                        <div className={govImageContainer}>
                            <StaticImage className={govImage} src="../images/Code-of-Arms-colour.png"/>
                        </div>
                        
                    </div>
                    <div className={box}>
                        <span className={logo}>Civil and National Registration</span>
                    </div>
                    <div className={topRight}>
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
            </div>
        </div>
    )
}

