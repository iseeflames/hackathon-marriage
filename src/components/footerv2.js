import * as React from "react"
import "./footerv2.module.css"
import {smartBotsContainer, footer,bottomLeft,bottomRight, middle, copyrightContainer} from "./footerv2.module.css" 
import {Container, Row, Col} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"

export default function FooterV2() {
    return (
        <div className={footer}>
            <div className="additionalContent">
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                    <div className={bottomLeft}>
                    <div>
                        <span>Useful Links</span>
                    </div>
                    <ul>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                    </ul>
                </div>
                    </Col>

                    <Col xs={6} md={3}>
                    <div className={middle}>
                <div>
                        <span>Useful Links</span>
                    </div>
                    <ul>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                    </ul>
                </div>
                    </Col>

                    <Col xs={6} md={3}>
                    <div className={bottomRight}>
                    <div>
                        <span>Useful Links</span>
                    </div>
                    <ul>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                        <li><a href="https://gov.bw/">Official Goverment Site</a></li>
                    </ul>
                </div>
                    </Col>

                    <Col xs={6} md={3} className={smartBotsContainer}>
                    <StaticImage src="../images/logo-with-tagline.png"/>
                    </Col>

                </Row>

                <Row>
                <div className={copyrightContainer}>                    
                    <span className="copyright">Copyright 2021 Elite Minds </span>
                </div>
                </Row>
            </Container>
            </div> 

            

        </div>
    )
}
