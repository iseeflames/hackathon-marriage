import React from 'react'
import FooterV2 from '../components/footerv2'
import Signupv2 from '../components/signupv2'
import TopbarV2 from '../components/topbarv2'

export default function Register() {
    return (
        <div>
            <TopbarV2/>               
            <Signupv2 title="Register Account"/>        
            <FooterV2/>
        </div>
    )
}
