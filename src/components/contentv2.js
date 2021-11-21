import React from 'react'
import {contentCardLink, button65,offeredService, serviceTitle,registerButtonContainer, serviceImageContainer, servicesOfferedContainer,servicesOfferedTitle} from "./contentv2.module.css"
import { StaticImage } from "gatsby-plugin-image"
import {Container, Col, Row} from 'react-bootstrap'
import { Link } from "gatsby"

export default function ContentV2() {
    return (
        <div>
            <div className={servicesOfferedContainer}>
                <span className={servicesOfferedTitle}>Our Services</span>
            </div>

            <div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                    <div className={offeredService}>
                <span className={serviceTitle}>Marriage Registration</span>
                <div className={serviceImageContainer}><StaticImage src="../images/marriage-contract.jpg"/></div>
                <div className="serviceDescContainer">
                    <p className="serviceDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue diam, aliquam nec ultricies at, convallis quis odio. In odio.</p>
                </div>
                <div></div>
                <div className={registerButtonContainer}>
                <button className={button65}><Link className={contentCardLink} to="/marriage-regist" >Get Started</Link></button>
                </div>
            </div> 
                    </Col>

                    <Col xs={12} md={4}>
                    <div className={offeredService}>
                <span className={serviceTitle}>Property Instrument Registr.</span>
                <div className={serviceImageContainer}><StaticImage src="../images/marriage-contract.jpg"/></div>
                <div className="serviceDescContainer">
                    <p className="serviceDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue diam, aliquam nec ultricies at, convallis quis odio. In odio.</p>
                </div>
                <div></div>
                <div className={registerButtonContainer}>
                <button className={button65}><Link className={contentCardLink} to="/prop-regist" >Get Started</Link></button>
                </div>
            </div> 
                    </Col>

                    <Col xs={12} md={4}>
                    <div className={offeredService}>
                <span className={serviceTitle}>Change of Surname</span>
                <div className={serviceImageContainer}><StaticImage src="../images/marriage-contract.jpg"/></div>
                <div className="serviceDescContainer">
                    <p className="serviceDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue diam, aliquam nec ultricies at, convallis quis odio. In odio.</p>
                </div>
                <div></div>
                <div className={registerButtonContainer}>
                    <button className={button65}><Link className={contentCardLink} to="/surname-chang" >Get Started</Link></button>
                </div>
            </div> 
                    </Col>
                   
                </Row>
            </Container>

        </div>

        </div>
    )
}

