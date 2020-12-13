import React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
 
  return (
    <>
      <div
        
      >
        <main style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: '#dedede'      
        }}>{children}</main>
      </div>
    </>
  )
}



export default Layout
