import React from 'react'
import {useState} from "react"
import "./InvoicePage.css"
import InputField from './Inputfield'
import { Box, Field, Input, Image, defineStyle, Flex, Text} from "@chakra-ui/react"

export default function Ydetails(){
    const [preview, setPreview] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
    return (
    <>
        {/* Your Details */}
        <div className="Ydetails" style={{background:"white", padding:"1.7rem"}}>
                    <h4 style={{color:"black", background:"white", fontSize:"1.7rem", fontWeight:"700"}}>Your Details*</h4>
                    <div style={{padding:"1rem 2rem 1rem 2rem"}}>

                    {/* mail */}

                    <InputField type="email" text="Email" placeholder="eg. jhondoe@company.com"/>

                    <p style={{fontSize:"0.7rem"}}>*We will automatically fill the provided details.</p></div>
                    {/* <br/> */}
                    <h6 style={{color:"gray", fontWeight:"600"}}>Billing Details :</h6>
                    <div style={{padding:"2rem"}}>
                        {/* name input */}

                        <InputField type="text" text="Your Name" placeholder="Shivansh Bhargava"/>

                        {/* Logo */}
                        <Field.Root isRequired>
                        <Box w="full" mb="1.5rem">
                            <Field.Label style={{ color: "black", marginBottom: "0.5rem", display: "block" }}>
                            Logo
                            </Field.Label>

                            <label htmlFor="logo-upload">
                            <Flex
                                align="center"
                                justify="center"
                                direction="column"
                                border="2px dashed black"
                                borderRadius="md"
                                p="1rem"
                                cursor="pointer"
                                bg="white"
                                transition="0.2s"
                                _hover={{ bg: "gray.50" }}
                            >
                                {preview ? (
                                <Image
                                    src={preview}
                                    alt="Logo Preview"
                                    maxH="100px"
                                    objectFit="contain"
                                    borderRadius="md"
                                />
                                ) : (
                                <Text color="gray.500">Click to upload logo</Text>
                                )}
                            </Flex>
                            </label>

                            <Input
                            id="logo-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                            display="none"
                            />
                        </Box>
                        </Field.Root>
                        {/* Address input */}

                        <InputField type="text" text="Address" placeholder="221B Baker Street"/>

                        {/* city input */}
                        
                        <InputField type="text" text="City" placeholder="London"/>

                        {/* state input */}
                        
                        <InputField type="text" text="State" placeholder="Greater London"/>

                        {/* zip */}
                        
                        <InputField type="text" text="Zip" placeholder="NW1 6XE"/>

                        {/* country */}
                        
                        <InputField type="text" text="Country" placeholder="UK"/>

                        {/* tax id */}

                        <InputField type="text" text="Tax ID" placeholder="912-34-5678"/>

                    </div>

                    <hr style={{border: "none",borderTop: "1.5px dashed #1082d9", marginTop:"-2rem"}} />

                    
                </div>
    </>)
}