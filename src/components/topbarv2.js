import * as React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {middle, logoContainer, menu, accountAccess, topbar, logo,topbarIconContainer, box, govImageContainer, govImage, topLeft, topRight, menuContainer} from "./topbarv2.module.css"
import { StaticImage } from "gatsby-plugin-image"
import {Container, Row, Col} from 'react-bootstrap'

export default function TopbarV2() {
    return (
        <div className={topbar}>
            <div>
                <Container>
                    <Row>
                        <Col xs={12} md={2} className={topLeft}>
                        <div>                  
                        <div className={govImageContainer}>
                            <StaticImage className={govImage} src="../images/Code-of-Arms-colour.png"/>
                        </div>
                        
                    </div>
                        </Col>
                        
                        <Col xs={12} md={8}>
                        <div className={middle}>

                            <div className={logoContainer}>
                        <span className={logo}>Civil and National Registration</span>
                        </div>

                        </div>
                        </Col>
                        

                        <Col xs={12} md={2}>
                            
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
                        </Col>
                    </Row>
                </Container>

                
                <div className={menuContainer}>
                <Container>
                    <Row>
                        <Col md={9} className={menu}>
                    <div >
                        Menu | Services | About Us
                    </div>
                        </Col>

                        <Col md={3} className={accountAccess}>
                        <div >
                            Login | Register
                        </div>
                    </Col>
                    </Row>
                </Container>
                </div>
            </div>
        </div>
    )
}
