import React from 'react'
import { Button, HStack } from "@chakra-ui/react"
import { RiArrowRightLine, RiDownloadLine } from "react-icons/ri"

export default function Download(){

    return (
        <>
        <div style={{height:"60vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div style={{ gap:"0.8rem"}}>
            <h1 style={{fontSize:"3rem", color:"black", fontWeight:"700"}}>Your Invoice is ready</h1>
            <br/>
            <h1 style={{fontSize:"1.5rem", lineHeight:"2rem", margin:"1rem 0rem 2rem 0rem"}}>Please review the details carefully before downloading the invoice</h1>
            <button
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.8rem",
                height: "5rem",
                width: "100%",
                backgroundColor: "#fbae34",
                color: "white",
                fontWeight: 600,
                fontSize: "1.6rem",
                borderRadius: "3rem",
                border: "none",
                cursor: "pointer",
                transition: "background 0.3s ease"
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#ff9900")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#fbae34")}
            >
            <RiDownloadLine style={{ color: "white", fontSize: "1.6rem" , background:"transparent"}} />
            Download Invoice
            </button>
            </div>
        </div>
        </>
    )
}