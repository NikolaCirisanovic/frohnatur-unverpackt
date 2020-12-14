import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Frohnatur - Unverpackt" />
    <div style={{backgroundColor: '#dedede', marginBottom: `1.45rem` }}>
      <h5 style={{textAlign: 'center'}}>Hier entsteht eine neue Website</h5>
      <div className="image-wrapper">
        <div className="image-overlay">
          <p>Coming soon</p>
        </div>
       
      <Image />

      </div>
        
      <p style={{textAlign: 'center'}}>Besuchen Sie uns doch auf: <br /> <br />
      <a style={{textAlign: 'center'}} 
        rel="noreferrer" 
        href="https://www.frohnatur-lueneburg.de/" 
        target="_blank"
        >Frohnatur Lüneburg
      </a> 
      <br />
      <br />
      <a 
        rel="noreferrer" 
        href="https://www.instagram.com/frohnatur_unverpackt/" 
        target="_blank"
        > Frohnatur Unverpackt auf Instagram (Lüneburg)
      </a>
      <br />
      <br />
      <a 
        rel="noreferrer" 
        href="https://www.instagram.com/frohnatur_unverpackt_tarp/" 
        target="_blank"
        > Frohnatur Unverpackt auf Instagram (Tarp)
      </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
