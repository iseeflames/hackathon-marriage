import React from 'react'
import ContentCard from './content-card'
import {home} from "./home.module.css"
export default function HomeBody() {
    return (
        <div className={home}>
            <ContentCard/>            
        </div>
    )
}
