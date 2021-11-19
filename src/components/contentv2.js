import React from 'react'
import {offeredService, serviceTitle,registerButtonContainer, serviceImageContainer, servicesContainer, servicesOfferedContainer,servicesOfferedTitle} from "./contentv2.module.css"
import { StaticImage } from "gatsby-plugin-image"
import {Container, Col, Row} from 'react-bootstrap'

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
                <button>Register</button>
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
                <button>Register</button>
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
                    <button>Register</button>
                </div>
            </div> 
                    </Col>

                   
                </Row>
            </Container>

        </div>

        </div>
    )
}

