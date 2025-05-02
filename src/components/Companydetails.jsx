import React, { useEffect, useState } from 'react';
import "./InvoicePage.css";
import InputField from './Ifield';
import { Box, Field, Input, Image, Flex, Text } from "@chakra-ui/react";

export default function Cdetails({ companyDetails, onChange }) {
    const [preview, setPreview] = useState(null);

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            onChange("logo1", previewUrl);
        }
    };

    useEffect(() => {
        if (companyDetails.logo1) {
            setPreview(companyDetails.logo1);
        }
    }, [companyDetails.logo1]);

    return (
        <div className="Cdetails" style={{ background: "white", padding: "1.7rem" }}>
            <h4 style={{ color: "black", fontSize: "1.7rem", fontWeight: "700" }}>Company Details*</h4>

            <div style={{ padding: "1rem 2rem" }}>
                <InputField
                    type="email"
                    text="Email"
                    placeholder="eg. jhondoe@company.com"
                    value={companyDetails.email1}
                    onChange={(e) => onChange("email1", e.target.value)}
                />
                <p style={{ fontSize: "0.7rem" }}>*We will automatically fill the provided details.</p>
            </div>

            <h6 style={{ color: "gray", fontWeight: "600" }}>Billing Details :</h6>

            <div style={{ padding: "2rem" }}>
                <InputField
                    type="text"
                    text="Company Name"
                    placeholder="Invoicely Inc."
                    value={companyDetails.name1}
                    onChange={(e) => onChange("name1", e.target.value)}
                />

                
                <Box w="full" mb="1.5rem">
                    <label htmlFor="logo-upload">
                        <Text style={{ color: "black", marginBottom: "0.5rem" }}>Logo</Text>
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

                <InputField
                    type="text"
                    text="Address"
                    placeholder="221B Baker Street"
                    value={companyDetails.address1}
                    onChange={(e) => onChange("address1", e.target.value)}
                />
                <InputField
                    type="text"
                    text="City"
                    placeholder="London"
                    value={companyDetails.city1}
                    onChange={(e) => onChange("city1", e.target.value)}
                />
                <InputField
                    type="text"
                    text="State"
                    placeholder="Greater London"
                    value={companyDetails.state1}
                    onChange={(e) => onChange("state1", e.target.value)}
                />
                <InputField
                    type="text"
                    text="Zip"
                    placeholder="NW1 6XE"
                    value={companyDetails.zip1}
                    onChange={(e) => onChange("zip1", e.target.value)}
                />
                <InputField
                    type="text"
                    text="Country"
                    placeholder="UK"
                    value={companyDetails.country1}
                    onChange={(e) => onChange("country1", e.target.value)}
                />
                <InputField
                    type="text"
                    text="Tax ID"
                    placeholder="912-34-5678"
                    value={companyDetails.taxId1}
                    onChange={(e) => onChange("taxId1", e.target.value)}
                />
            </div>

            <hr style={{ border: "none", borderTop: "1.5px dashed #1082d9", marginTop: "-2rem" }} />
        </div>
    );
}
