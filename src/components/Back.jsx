import {  HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { ChevronLeft } from "lucide-react"

export default function Back(){
  return (
    <HStack wrap="wrap" gap="8">
          <VStack key="lg">
            <IconButton
              aria-label="Search database"
              variant="outline"
              size="lg"
            >
              <ChevronLeft size={68} strokeWidth={1.75} style={{color:"black"}}/>
            </IconButton>
          </VStack>
    </HStack>
  )
}

