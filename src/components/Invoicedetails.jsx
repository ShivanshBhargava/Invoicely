"use client"
import { Portal, Select, createListCollection, Input } from "@chakra-ui/react"
import React from 'react'
import {useState} from "react"
import "./InvoicePage.css"
import InputField from './Ifield'
import Dynamic from "./DynamicInput"

import {
    HStack,
  } from "@chakra-ui/react"
  import { groupBy } from "es-toolkit"

  
export default function Idetails({invoiceDetails, onChange}){

    const handleItemsChange = (updatedItems) => {
        onChange('items', updatedItems);
      };

    return (
        <>
        <div className="Idetails" style={{background:"white", padding:"1.7rem"}}>
            <h4 style={{color:"black", background:"white", fontSize:"1.7rem", fontWeight:"700"}}>Invoice Details*</h4>
            <div style={{padding:"1rem 2rem 1rem 2rem"}}>
            <div>
                <Select.Root
                collection={countries}
                size="sm"
                width="320px"
                defaultValue={["IN"]}
                value={[invoiceDetails.currency]}
                onValueChange={(val) => onChange('currency', val.value[0])}
                >
                <Select.HiddenSelect />
                <Select.Label>Currency</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                    <Select.ValueText placeholder="-" />
                    <Select.Indicator />
                    </Select.Trigger>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                    <Select.Content>
                        {continents.map(([continent, items]) => (
                        <Select.ItemGroup key={continent}>
                            <Select.ItemGroupLabel style={{fontWeight:"700", color:"gray"}}>{continent}</Select.ItemGroupLabel>
                            {items.map((item) => (
                            <Select.Item item={item} key={item.value}>
                                <HStack>
                                <span>{item.flag}</span>
                                <span>{item.label}</span>
                                </HStack>
                                <Select.ItemIndicator />
                            </Select.Item>
                            ))}
                        </Select.ItemGroup>
                        ))}
                    </Select.Content>
                    </Select.Positioner>
                </Portal>
                </Select.Root>
                </div>
                <p style={{fontSize:"0.7rem"}}>*We will automatically fill the provided details.</p>
            </div>
                        
            <Dynamic items={invoiceDetails.items} onItemsChange={handleItemsChange} />
            
            <p style={{color:"gray", margin:"2rem 0rem 1rem 0rem", fontSize:"1rem", fontWeight:"600"}}>Note</p>
            <Input
            type="text"
            value={invoiceDetails.note}
            onChange={(e) => onChange('note', e.target.value)}
            px={0}
            required
            placeholder="Add a note"
            variant="unstyled"
            borderBottom="1px dashed #40cbff"
            borderRadius="0"
            _focus={{ borderBottom: '1.5px dashed #fbae34', boxShadow: 'none' }}
            />

            <div>
                <p style={{color:"gray", margin:"2rem 0rem 2rem 0rem", fontSize:"1rem", fontWeight:"600"}}>More Options</p>
                <div style={{padding:"1rem 2rem 1rem 2rem"}}>
                    <InputField type="text" 
                    text="Discount" 
                    placeholder="0"
                    value={invoiceDetails.discount}
                    onChange={(e) => onChange('discount', e.target.value)}
                    />
                    <InputField
                        type="text"
                        text="Taxes"
                        placeholder="0%"
                        value={invoiceDetails.taxes}
                        onChange={(e) => onChange('taxes', e.target.value)}
                    />
                </div>
            </div>
            </div>
            <hr style={{border: "none",borderTop: "1.5px dashed #1082d9", margin:"-2rem 0rem 2rem 0rem"}} />
        </>
    )
}

const countries = createListCollection({
    items: [
      {
        value: "US",
        label: "US Dollar",
        flag: <img src="https://cdn-icons-png.flaticon.com/512/323/323310.png" alt="US" width={20} height={15} />,
        continent: "America",
      },
      {
        value: "CA",
        label: "Canadian Dollar",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/16022/16022020.png" alt="CA" width={20} height={15} />,
        continent: "America",
      },
      {
        value: "MX",
        label: "Mexican Peso",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/13980/13980579.png" alt="MX" width={20} height={15} />,
        continent: "America",
      },
      {
        value: "BR",
        label: "Brazilian Real",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/16021/16021981.png" alt="BR" width={20} height={15} />,
        continent: "America",
      },
      {
        value: "ZA",
        label: "South Africa Rand",
        flag: <img src="https://cdn-icons-png.flaticon.com/512/197/197562.png" alt="ZA" width={20} height={15} />,
        continent: "Africa",
      },
      {
        value: "NG",
        label: "Nigerian Naira",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/16022/16022476.png"  alt="NG" width={20} height={15} />,
        continent: "Africa",
      },
      {
        value: "MA",
        label: "Moroccan Dirham",
        flag: <img src="https://cdn-icons-png.flaticon.com/512/197/197551.png" alt="MA" width={20} height={15} />,
        continent: "Africa",
      },
      {
        value: "EG",
        label: "Egyptian Pound",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/11848/11848666.png" alt="EG" width={20} height={15} />,
        continent: "Africa",
      },
      {
        value: "CN",
        label: "Chinese Yuan",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/197/197375.png" alt="CN" width={20} height={15} />,
        continent: "Asia",
      },
      {
        value: "JP",
        label: "Japanese Yen",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/197/197604.png" alt="JP" width={20} height={15} />,
        continent: "Asia",
      },
      {
        value: "IN",
        label: "Indian Rupee",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/16022/16022214.png" alt="IN" width={20} height={15} />,
        continent: "Asia",
      },
      {
        value: "KR",
        label: "South Korean Won",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/197/197582.png" alt="KR" width={20} height={15} />,
        continent: "Asia",
      },
      {
        value: "EU",
        label: "Euro",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/14538/14538918.png" alt="AU" width={20} height={15} />,
        continent : "Europe"
      },
      {
        value: "AU",
        label: "Australian Dollar",
        flag: <img src="https://cdn-icons-png.flaticon.com/512/197/197507.png" alt="AU" width={20} height={15} />,
        continent: "Oceania",
      },
      {
        value: "NZ",
        label: "New Zealand Dollar",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/10576/10576628.png" alt="NZ" width={20} height={15} />,
        continent: "Oceania",
      },
      {
        value: "FJ",
        label: "Fijian Dollar",
        flag: <img src="https://cdn-icons-png.flaticon.com/128/16022/16022107.png" alt="FJ" width={20} height={15} />,
        continent: "Oceania",
      },
    ],
    itemToString: (item) => `${item.label}`,
    itemToValue: (item) => item.value,
  });
  
  
  const continents = Object.entries(
    groupBy(countries.items, (item) => item.continent),
  )