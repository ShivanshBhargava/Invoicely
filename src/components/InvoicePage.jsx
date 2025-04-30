import React from 'react'
import {useState} from "react"
import "./InvoicePage.css"
import logo from "../assets/Logo.png"
import { Box, Field, Input, Image, defineStyle, Flex, Text} from "@chakra-ui/react"
import Next from "./Next"
import Back from "./Back"
import Stepper, { Step } from './Stepper';
import Ydetails from './Yourdetails';
import Cdetails from './Companydetails'
import Idetails from './Invoicedetails'

export default function InvoicePage(){

    return (
        <>

        <div className="Page">

            <div className="Inputs">
                {/* Logo Part */}
                <div className='Logo'>
                <img src={logo} style={{height:"5rem"}}></img>
                <div style={{background:"white", lineHeight:"1.4rem", padding:"1rem"}}>
                    <h4 style={{color:"black", background:"white", letterSpacing:"0.3rem"}}>INVOICELY</h4>
                    <h5 style={{color:"#1083d9", background:"white", fontWeight:"500"}}>By Shivansh Bhargava</h5>
                </div>
                </div>

                <Stepper
                    initialStep={1}
                    onStepChange={(step) => console.log(step)}
                    onFinalStepCompleted={() => console.log("All steps completed!")}
                    backButtonText="Previous"
                    nextButtonText="Next"
                    nextButtonComponent={<Next />}
                    backButtonComponent={<Back />}
                >
                <Step>
                    <Ydetails/>
                </Step>

                <Step>
                    <Cdetails/>
                </Step>
                <Step>
                    <Idetails/>
                </Step>
                </Stepper>
            </div>

            <div className="Preview">
                <div className='preview'></div>
            </div>

        </div>

        </>
    )
}

const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "white",
    px: "0.5",
    top: "-3",
    insetStart: "2",
    fontWeight: "500",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
      color: "black",
      top: "2.5",
      insetStart: "3",
    },
    _peerFocusVisible: {
      color: "black",
      top: "-3",
      insetStart: "2",
    },
  })