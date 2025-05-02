import React from 'react'
import {useState, useEffect, useRef} from "react"
import "./InvoicePage.css"
import logo from "../assets/Logo.png"
import Next from "./Next"
import Back from "./Back"
import Stepper, { Step } from './Stepper';
import Ydetails from './Yourdetails';
import Cdetails from './Companydetails'
import Idetails from './Invoicedetails'
import Pdetails from "./PaymentDetails"
import Iterms from './InvoiceTerms'
import Download from './Download'
import html2pdf from "html2pdf.js";

export default function InvoicePage(){

    const [yourDetails, setYourDetails] = useState({
        email: '',
        name: '',
        logo: null,
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        taxId: ''
    });

    const [companyDetails, setCompanyDetails] = useState({
        email1: '',
        name1: '',
        logo1: null,
        address1: '',
        city1: '',
        state1: '',
        zip1: '',
        country1: '',
        taxId1: ''
    });

    const handleYDetailsChange = (field, value) => {
        setYourDetails(prev => ({ ...prev, [field]: value }));
        console.log(yourDetails)
    };

    const handleCDetailsChange = (field, value) => {
        setCompanyDetails(prev => ({ ...prev, [field]: value }));
        console.log(companyDetails)
    };

    const [invoiceDetails, setInvoiceDetails] = useState({
        currency: 'IN',
        note: '',
        discount: '',
        taxes: '',
        items: []
    });
    
    
    const handleInvoiceDetailsChange = (field, value) => {
        setInvoiceDetails(prev => ({ ...prev, [field]: value }));
        console.log(invoiceDetails);
    };

    const [paymentDetails, setPaymentDetails] = useState({
        bankName: '',
        accountNumber: '',
        accountName: '',
        ifscCode: '',
        swiftCode: ''
      });
      
      const handlePaymentDetailsChange = (field, value) => {
        setPaymentDetails(prev => ({ ...prev, [field]: value }));
        console.log(paymentDetails);
      };

      const [invoiceTerms, setInvoiceTerms] = useState({
        invoiceNumber: '',
        issueDate: '',
        dueDate: ''
    });
    
    const handleInvoiceTermsChange = (field, value) => {
        setInvoiceTerms(prev => ({ ...prev, [field]: value }));
        console.log(invoiceTerms);
    };

    const subtotal = invoiceDetails.items.reduce((total, item) => {
        const quantity = parseFloat(item.quantity || 0);
        const price = parseFloat(item.price || 0);
        return total + quantity * price;
      }, 0);

      const discountPercent = parseFloat(invoiceDetails.discount || 0);
      const taxPercent = parseFloat(invoiceDetails.taxes || 0);
      
      const discountAmount = (discountPercent / 100) * subtotal;
      const taxAmount = (taxPercent / 100) * subtotal;
      
      const amount = subtotal - discountAmount + taxAmount;

  const invoiceRef = useRef();

  const handleDownload = () => {
    const element = invoiceRef.current;
    const options = {
      margin:       0.5,
      filename:     'invoice.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  };


    return (
        <>

        <div className="Page">

            <div className="Inputs">
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
                <Step style={{objectFit:"contain"}}>
                    <Ydetails yourDetails={yourDetails} 
                        onChange={handleYDetailsChange} />
                </Step>

                <Step>
                    <Cdetails companyDetails={companyDetails} 
                        onChange={handleCDetailsChange}/>
                </Step>
                <Step>
                    <Idetails 
                        invoiceDetails={invoiceDetails} 
                        onChange={handleInvoiceDetailsChange} 
                    />
                </Step>
                <Step>
                    <Pdetails 
                        paymentDetails={paymentDetails}
                        onChange={handlePaymentDetailsChange}
                    />
                </Step>
                <Step>
                    <Iterms 
                        invoiceTerms={invoiceTerms}
                        onChange={handleInvoiceTermsChange}
                    />
                </Step>
                <Step>
                    <Download onClick={handleDownload}/>
                </Step>
                </Stepper>
            </div>

            <div className="Preview" ref={invoiceRef} id="invoice-preview">
                <div className='preview' style={{ borderRadius:"1.1rem"}}>
                    <div style={{display:"flex", justifyContent:"space-around", color:"gray", padding:"1.5rem 0rem 1.5rem 0rem", alignItems:"center", background:"transparent"}}>
                        <div style={{flex:"3", marginLeft:"4rem", fontSize:"0.8rem"}}>
                            <div>INVOICE NO</div>
                            {invoiceTerms.invoiceNumber ? <div style={{color:"black", fontWeight:"500"}}>{invoiceTerms.invoiceNumber}</div> : <div style={{width:"7rem", background:"rgb(214, 214, 214)", borderRadius:"2rem"}}>.</div>}
                        </div>
                        <div style={{flex:"1", marginLeft:"4rem", fontSize:"0.8rem"}}>
                            <div>ISSUED</div>
                            <div style={{color:"black", fontWeight:"500"}}>
                            {invoiceTerms.issueDate ? invoiceTerms.issueDate : <div style={{width:"6rem", background:"rgb(214, 214, 214)", borderRadius:"2rem"}}>.</div>}
                            </div>
                        </div>
                        <div style={{flex:"1", marginLeft:"4rem", fontSize:"0.8rem"}}>
                            <div>DUE DATE</div>
                            <div style={{color:"black", fontWeight:"500"}}>
                            {invoiceTerms.dueDate ? invoiceTerms.dueDate : <div style={{width:"6rem", background:"rgb(214, 214, 214)", borderRadius:"2rem"}}>.</div>}
                            </div>
                        </div>
                    </div>
                    <hr style={{border: "none",borderTop: "1px dashed rgb(214, 214, 214)"}} />



                    <div style={{display:"flex"}}>
                        <div style={{padding:"1rem 4rem 2rem 4rem", lineHeight:"3.5rem", border:"1px dashed rgb(214, 214, 214)", flex:"1", height:"22rem"}}>
                            <div style={{flex:"3", fontSize:"0.8rem", color:"gray"}}>FROM</div>
                            <div>{yourDetails.logo ? (
                                <img
                                src={(yourDetails.logo)}
                                alt="Uploaded Logo"
                                style={{ height: "4rem", objectFit: "contain" }}
                                />
                            ): <div style={{height:"4rem", borderRadius:"50%", width:"4rem", background:"rgb(214, 214, 214)"}}></div>
                            }</div>
                            
                            {yourDetails.name ? (
                                <div style={{fontSize:"1.5rem", fontWeight:"700", color:"black"}}>{yourDetails.name}</div>
                            ):<div style={{ width: "10rem", height: "1.2rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"1.2rem" }}></div>}
                            
                            {yourDetails.email ? (
                                <div style={{fontSize:"1rem", fontWeight:"400", color:"black"}}>{yourDetails.email}</div>
                            ):<div style={{ width: "15rem", height: "1rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"1rem" }}></div>}
                            
                            <div style={{lineHeight:"1rem",}}>
                                {yourDetails.address ? <p style={{fontSize:"0.8rem", color:"gray"}}>{yourDetails.address}</p> : <p style={{width:"10rem", height: "1rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.5rem"}}></p>}
                                {yourDetails.city ? <p style={{fontSize:"0.8rem", color:"gray"}}>{yourDetails.city}, {yourDetails.state} {yourDetails.zip}</p>:<p style={{width:"15rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.5rem"}}></p>}
                                {yourDetails.country ? <p style={{fontSize:"0.8rem", color:"gray"}}>{yourDetails.country}</p>: <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                                {yourDetails.taxId ? <p style={{fontSize:"0.8rem", color:"gray"}}>Tax ID: {yourDetails.taxId}</p> : <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                            </div>
                        </div>
                        <div style={{padding:"1rem 4rem 2rem 4rem", lineHeight:"3.5rem", border:"1px dashed rgb(214, 214, 214)", flex:"1", height:"22rem"}}>
                            <div style={{flex:"3", fontSize:"0.8rem", color:"gray"}}>TO</div>
                            <div>{companyDetails.logo1 ? (
                                <img
                                src={(companyDetails.logo1)}
                                alt="Uploaded Logo"
                                style={{ height: "4rem", objectFit: "contain" }}
                                />
                            ): <div style={{height:"4rem", borderRadius:"50%", width:"4rem", background:"rgb(214, 214, 214)"}}></div>
                            }</div>
                            
                            {companyDetails.name1 ? (
                                <div style={{fontSize:"1.5rem", fontWeight:"700", color:"black"}}>{companyDetails.name1}</div>
                            ):<div style={{ width: "10rem", height: "1.2rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"1.2rem" }}></div>}
                            
                            {companyDetails.email1 ? (
                                <div style={{fontSize:"1rem", fontWeight:"400", color:"black"}}>{companyDetails.email1}</div>
                            ):<div style={{ width: "15rem", height: "1rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"1rem" }}></div>}
                            
                            <div style={{lineHeight:"1rem",}}>
                                {companyDetails.address1 ? <p style={{fontSize:"0.8rem", color:"gray"}}>{companyDetails.address1}</p> : <p style={{width:"10rem", height: "1rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.5rem"}}></p>}
                                {companyDetails.city1 ? <p style={{fontSize:"0.8rem", color:"gray"}}>{companyDetails.city1}, {companyDetails.state1} {companyDetails.zip1}</p>:<p style={{width:"15rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.5rem"}}></p>}
                                {companyDetails.country1 ? <p style={{fontSize:"0.8rem", color:"gray"}}>{companyDetails.country1}</p>: <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                                {companyDetails.taxId1 ? <p style={{fontSize:"0.8rem", color:"gray"}}>Tax ID: {companyDetails.taxId1}</p> : <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                            </div>
                        </div>
                    </div>

                    <div style={{padding:"0rem 4rem 0rem 4rem"}}>
                    <div style={{display:"flex"}}>

                        <div style={{flex:"1", padding:"1rem 4rem 1rem 0rem"}}>
                            <div style={{fontSize:"0.8rem", color:"gray"}}>DESCRIPTION</div>
                        </div>
                        <div style={{ padding:"1rem 0rem 1rem 4rem", display:"flex", justifyContent:"space-between", flex:"1"}}>
                            <div style={{fontSize:"0.8rem", color:"gray"}}>QTY</div>
                            <div style={{fontSize:"0.8rem", color:"gray"}}>PRICE</div>
                            <div style={{fontSize:"0.8rem", color:"gray"}}>AMOUNT</div>
                        </div>
                    </div>
                    
                    {invoiceDetails.items.map((item, index) => (
                        <>
                        <hr style={{border: "none",borderTop: "1px dashed rgb(214, 214, 214)",  padding:"0rem 4rem 1rem 4rem"}} />
                        <div key={item.id} style={{ display: "flex", marginBottom: "1rem" }}>
                        <div style={{ flex: "1", padding: "0rem 4rem 0rem 0rem" }}>
                            <div style={{ fontSize: "0.8rem", color: "black" }}>
                            {item.description}
                            </div>
                        </div>
                        <div
                            style={{
                            padding: "0rem 0rem 0rem 4rem",
                            display: "flex",
                            justifyContent: "space-between",
                            flex: "1",
                            }}
                        >
                            <div style={{ fontSize: "0.8rem", color: "black" }}>
                            {item.quantity}
                            </div>
                            <div style={{ fontSize: "0.8rem", color: "black" }}>
                            {item.price}
                            </div>
                            <div style={{ fontSize: "0.8rem", color: "black" }}>
                            {(parseFloat(item.quantity || 0) * parseFloat(item.price || 0)).toFixed(2)}
                            </div>
                        </div>
                        </div>
                        </>
                    ))}

                        <div style={{padding:"0rem 0rem 0rem 0rem"}}>
                            <div style={{display:"flex"}}>
                                <div style={{flex:"1", padding:"1rem 4rem 1rem 0rem"}}>
                                {invoiceDetails.note ? <p style={{fontSize:"0.8rem", color:"gray"}}>{invoiceDetails.note}</p> : <p style={{width:"10rem", height: "1rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.5rem", marginLeft:"-8.2rem"}}></p>}
                                </div>
                                <div style={{ padding:"1rem 0rem 1rem 4rem", flex:"1", lineHeight:"2rem"}}>
                                    <div style={{fontSize:"0.9rem", color:"black", display:"flex", justifyContent:"space-between", alignItems:"end"}}>
                                        <div>Subtotal</div>
                                        <div>{currencyMap[invoiceDetails.currency]?.symbol}{subtotal.toFixed(2)}</div>
                                    </div>
                                    <div style={{fontSize:"0.9rem", color:"black", display:"flex", justifyContent:"space-between", alignItems:"end"}}>
                                        <div>Amount</div>
                                        <div style={{fontWeight:"700", color:"black", fontSize:"1.2rem"}}>{currencyMap[invoiceDetails.currency]?.symbol}{amount.toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <hr style={{border: "none",borderTop: "1px dashed rgb(214, 214, 214)"}} />
                    <div style={{display:"flex"}}>
                        <div style={{flex:"1", padding:"1rem 4rem 2rem 4rem",}}>
                            <div style={{fontSize:"0.8rem", color:"gray"}}>BANK DETAILS</div>
                            <div style={{display:"flex", width:"100%", marginTop:"1rem", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.8rem", color:"gray", fontWeight:"700"}}>Bank Name :</p>
                                {paymentDetails.bankName ? <p style={{fontSize:"0.8rem", color:"black"}}>{paymentDetails.bankName}</p> : <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                            </div>

                            <div style={{display:"flex", width:"100%", marginTop:"0.5rem", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.8rem", color:"gray", fontWeight:"700"}}>Account Number :</p>
                                {paymentDetails.accountNumber ? <p style={{fontSize:"0.8rem", color:"black"}}>{paymentDetails.accountNumber}</p> : <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                            </div>

                            <div style={{display:"flex", width:"100%", marginTop:"0.5rem", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.8rem", color:"gray", fontWeight:"700"}}>Account Name :</p>
                                {paymentDetails.accountName ? <p style={{fontSize:"0.8rem", color:"black"}}>{paymentDetails.accountName}</p> : <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                            </div>

                            <div style={{display:"flex", width:"100%", marginTop:"0.5rem", justifyContent:"space-between"}}>
                                <p style={{fontSize:"0.8rem", color:"gray", fontWeight:"700"}}>Swift Code :</p>
                                {paymentDetails.swiftCode ? <p style={{fontSize:"0.8rem", color:"black"}}>{paymentDetails.swiftCode}</p> : <p style={{width:"5rem", height: "0.8rem", background: "rgb(214, 214, 214)", borderRadius: "1rem", marginTop:"0.4rem"}}></p>}
                            </div>

                        </div>
                        <div style={{ flex: "1", padding: "1rem 4rem 2rem 4rem" }}>
                        <div style={{ fontSize: "0.8rem", color: "gray" }}>PAYABLE IN</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <div style={{ marginTop:"1rem"}}>
                            <img src={currencyMap[invoiceDetails.currency]?.flag} alt="flag" width={40} height={15} />
                            </div>
                            <div style={{ marginTop:"1rem"}}>
                            <p style={{ fontSize: "0.8rem", color: "black", fontWeight: "700" }}>
                                {currencyMap[invoiceDetails.currency]?.currency}
                            </p>
                            <p style={{ fontSize: "0.8rem", color: "gray", fontWeight: "400" }}>
                                {currencyMap[invoiceDetails.currency]?.symbol} {invoiceDetails.currency}
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}

const currencyMap = {
    US: {
      currency: "US Dollar",
      symbol: "$",
      flag: "https://cdn-icons-png.flaticon.com/512/323/323310.png",
    },
    CA: {
      currency: "Canadian Dollar",
      symbol: "CA$",
      flag: "https://cdn-icons-png.flaticon.com/128/16022/16022020.png",
    },
    MX: {
      currency: "Mexican Peso",
      symbol: "MX$",
      flag: "https://cdn-icons-png.flaticon.com/128/13980/13980579.png",
    },
    BR: {
      currency: "Brazilian Real",
      symbol: "R$",
      flag: "https://cdn-icons-png.flaticon.com/128/16021/16021981.png",
    },
    ZA: {
      currency: "South Africa Rand",
      symbol: "R",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197562.png",
    },
    NG: {
      currency: "Nigerian Naira",
      symbol: "₦",
      flag: "https://cdn-icons-png.flaticon.com/128/16022/16022476.png",
    },
    MA: {
      currency: "Moroccan Dirham",
      symbol: "د.م.",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197551.png",
    },
    EG: {
      currency: "Egyptian Pound",
      symbol: "E£",
      flag: "https://cdn-icons-png.flaticon.com/128/11848/11848666.png",
    },
    CN: {
      currency: "Chinese Yuan",
      symbol: "¥",
      flag: "https://cdn-icons-png.flaticon.com/128/197/197375.png",
    },
    JP: {
      currency: "Japanese Yen",
      symbol: "¥",
      flag: "https://cdn-icons-png.flaticon.com/128/197/197604.png",
    },
    IN: {
      currency: "Indian Rupee",
      symbol: "₹",
      flag: "https://cdn-icons-png.flaticon.com/128/16022/16022214.png",
    },
    KR: {
      currency: "South Korean Won",
      symbol: "₩",
      flag: "https://cdn-icons-png.flaticon.com/128/197/197582.png",
    },
    EU: {
      currency: "Euro",
      symbol: "€",
      flag: "https://cdn-icons-png.flaticon.com/128/14538/14538918.png",
    },
    AU: {
      currency: "Australian Dollar",
      symbol: "A$",
      flag: "https://cdn-icons-png.flaticon.com/512/197/197507.png",
    },
    NZ: {
      currency: "New Zealand Dollar",
      symbol: "NZ$",
      flag: "https://cdn-icons-png.flaticon.com/128/10576/10576628.png",
    },
    FJ: {
      currency: "Fijian Dollar",
      symbol: "FJ$",
      flag: "https://cdn-icons-png.flaticon.com/128/16022/16022107.png",
    },
  };
  