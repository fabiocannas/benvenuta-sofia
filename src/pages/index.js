import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import Jumbotron from 'react-bootstrap/Jumbotron';
import BootstrapCarousel from '../components/bootstrapCarousel'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Holderjs from "holderjs"

const IndexPage = () => (
  
  <Layout>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossOrigin="anonymous"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.8/holder.min.js" integrity="sha512-O6R6IBONpEcZVYJAmSC+20vdsM07uFuGjFf0n/Zthm8sOFW+lAq/OK1WOL8vk93GBDxtMIy6ocbj6lduyeLuqQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    <Seo title="Home" />
    <StaticImage
      src="../images/benvenuta-sofia.jpeg"
      width={1600}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Benvenuta-Sofia"
      style={{ marginBottom: `1.45rem` }}
    />
    <BootstrapCarousel></BootstrapCarousel>    
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous"></script>
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous"></script>
  </Layout>
)

export default IndexPage
