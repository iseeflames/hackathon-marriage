import * as React from "react"
import HomeBody from "../components/home-body"
import Topbar from "../components/topbar"
import {body} from "../pages/index.module.css"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main className={body}>
      <title>Home Page | Hackathon Solution</title>
      <Topbar/>
      <HomeBody/>
      <Footer/>
    </main>
  )
}

export default IndexPage
