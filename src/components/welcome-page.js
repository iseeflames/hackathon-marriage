import React from 'react'
import ContentCard from './content-card'
import {home} from "./welcome.module.css"

export default function WelcomePage() {
    return (
        <div className={home}>
            <ContentCard/>            
        </div>
    )
}
