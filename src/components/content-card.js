import React from 'react'
import {content, offeredService, serviceTitle,registerButtonContainer, serviceImageContainer, servicesContainer, servicesOfferedContainer,servicesOfferedTitle} from "./content-card.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function ContentCard() {
    return (
        <div className={content}>
            <div className={servicesOfferedContainer}><span className={servicesOfferedTitle}>Our Services</span></div>

            <div className={servicesContainer}>
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
 
            <div className={offeredService}>
                <span className={serviceTitle}>Property Instrument Registration</span>
                <div className={serviceImageContainer}><StaticImage src="../images/marriage-contract.jpg"/></div>
                <div className="serviceDescContainer">
                    <p className="serviceDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue diam, aliquam nec ultricies at, convallis quis odio. In odio.</p>
                </div>
                <div></div>
                <div className={registerButtonContainer}>
                <button>Register</button>
                </div>
            </div> 

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
            </div>
                  
        </div>
    )
}
