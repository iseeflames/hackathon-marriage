import * as React from "react"
import TopbarV2 from "../components/topbarv2"
import {indexPage} from "../pages/index.module.css"
import FooterV2 from "../components/footerv2"
import Services from "../components/services"
import BusinessStatements from "../components/business-statements"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoticeBoard from "../components/notice-board"

const IndexPage = () => {
  return (
    <main className={indexPage}>
      <title>Home Page | Hackathon Solution</title>
      <TopbarV2/>      
      <BusinessStatements/>
      <Services/>
      <NoticeBoard/>
      <FooterV2/>
    </main>
  )
}

export default IndexPage
