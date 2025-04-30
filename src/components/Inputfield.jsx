import React from 'react'
import { Box, Field, Input, defineStyle } from "@chakra-ui/react"

export default function InputField({type, text, placeholder}){

    
    return <>
    <Field.Root isRequired>
    <Box pos="relative" w="full">
        <Input className="peer" 
        placeholder={placeholder} 
        _placeholder={{ color: "transparent" }}
        _focus={{ _placeholder: { color: "gray.400" } }}
        type={type} 
        textAlign="right"
        style={{background:"white", color:"black", marginBottom:"1rem"}}/>
        <Field.Label css={floatingStyles} style={{color:"black"}}>{text}</Field.Label>
    </Box>
    </Field.Root>
    </>
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