import React from 'react'
import "./InvoicePage.css"
import InputField from './Ifield'
import { Input } from "@chakra-ui/react"

export default function Pdetails({ paymentDetails, onChange }) {
  return (
    <>
      <div className="Ydetails" style={{ background: "white", padding: "1.7rem" }}>
        <h4 style={{ color: "black", background: "white", fontSize: "1.7rem", fontWeight: "700" }}>
          Payment Details*
        </h4>
        <div style={{ padding: "1rem 2rem 1rem 2rem" }}>
          <p style={{ fontSize: "0.7rem", marginTop: "-0.5rem" }}>
            *We will automatically fill the provided details.
          </p>
        </div>

        <div style={{ padding: "2rem" }}>
          {/* Bank name */}
          <InputField
            type="text"
            text="Bank name"
            placeholder="HSBC"
            value={paymentDetails.bankName}
            onChange={(e) => onChange("bankName", e.target.value)}
          />

          {/* Account number */}
          <InputField
            type="text"
            text="Account number"
            placeholder="123456789012"
            value={paymentDetails.accountNumber}
            onChange={(e) => onChange("accountNumber", e.target.value)}
          />

          {/* Account name */}
          <InputField
            type="text"
            text="Account name"
            placeholder="Johnathan Doe"
            value={paymentDetails.accountName}
            onChange={(e) => onChange("accountName", e.target.value)}
          />

          {/* IFSC code */}
          <InputField
            type="text"
            text="IFSC code"
            placeholder="SBIN0001234"
            value={paymentDetails.ifscCode}
            onChange={(e) => onChange("ifscCode", e.target.value)}
          />

          {/* Swift code */}
          <InputField
            type="text"
            text="Swift code"
            placeholder="HDFCINBBXXX"
            value={paymentDetails.swiftCode}
            onChange={(e) => onChange("swiftCode", e.target.value)}
          />
        </div>

        <hr style={{ border: "none", borderTop: "1.5px dashed #1082d9", marginTop: "-2rem" }} />
      </div>
    </>
  );
}
