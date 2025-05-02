import React from 'react'
import {useState} from "react"
import "./InvoicePage.css"
import InputField from './Ifield'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Input } from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';



export default function Iterms({ invoiceTerms, onChange }) {
    const handleChange = (field) => (e) => {
        onChange(field, e.target.value);
    };

    return (
        <>
        <div className="Ydetails" style={{background:"white", padding:"1.7rem"}}>
            <h4 style={{color:"black", fontSize:"1.7rem", fontWeight:"700"}}>Invoice Terms*</h4>
            <div style={{padding:"1rem 2rem"}}>
                <p style={{fontSize:"0.7rem", marginTop:"-0.5rem"}}>*We will automatically fill the provided details.</p>
            </div>

            <div style={{padding:"2rem"}}>
                <InputField
                    type="text"
                    text="Invoice Number"
                    placeholder="INVOICE-01"
                    value={invoiceTerms.invoiceNumber}
                    onChange={handleChange('invoiceNumber')}
                />

                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px dashed #40cbff"}}>
                    <p style={{fontSize:"0.9rem", fontWeight:"600", flex:"1"}}>Issue date</p>
                    <Input
                        type="date"
                        px={0}
                        required
                        variant="unstyled"
                        value={invoiceTerms.issueDate}
                        onChange={handleChange('issueDate')}
                        borderRadius="0"
                        width="6rem"
                        _focus={{ borderBottom: '1.5px dashed #fbae34', boxShadow: 'none' }}
                    />
                    <FaCalendarAlt/>
                </div>

                
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px dashed #40cbff"}}>
                    <p style={{fontSize:"0.9rem", fontWeight:"600", flex:"1"}}>Due Date</p>
                    <Input
                        type="date"
                        px={0}
                        required
                        variant="unstyled"
                        value={invoiceTerms.dueDate}
                        onChange={handleChange('dueDate')}
                        borderRadius="0"
                        width="6rem"
                        _focus={{ borderBottom: '1.5px dashed #fbae34', boxShadow: 'none' }}
                    />
                    <FaCalendarAlt />
                </div>
            </div>

            <hr style={{border: "none", borderTop: "1.5px dashed #1082d9", marginTop:"0rem"}} />
        </div>
        </>
    );
}
