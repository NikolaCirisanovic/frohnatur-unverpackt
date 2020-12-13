import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Frohnatur - Unverpackt" />
    <h5>Hier entsteht eine neue Website</h5>
      <Image />
    <div style={{backgroundColor: '#dedede', maxWidth: `100%`, marginBottom: `1.45rem` }}>
    </div>
    <p>Besuchen Sie uns doch auf:</p>
    <a 
      rel="noreferrer" 
      href="https://www.frohnatur-lueneburg.de/" 
      target="_blank"
      >Frohnatur Lüneburg
    </a> 
    <br />
    <span>Logo</span>
    <a 
      rel="noreferrer" 
      href="https://www.instagram.com/frohnatur_unverpackt/" 
      target="_blank"
      >Frohnatur Unverpackt auf Instagram
    </a> 
  </Layout>
)

export default IndexPage
