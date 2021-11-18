import * as React from "react"
import Topbar from "../components/topbar"
import {body} from "../pages/index.module.css"
import Footer from "../components/footer"
import WelcomePage from "../components/welcome-page"
import BusinessStatements from "../components/business-statements"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
  return (
    <main className={body}>
      <title>Home Page | Hackathon Solution</title>
      <Topbar/>      
      <BusinessStatements/>
      <WelcomePage/>
      <Footer/>
    </main>
  )
}

export default IndexPage
