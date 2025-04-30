import {  HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { ChevronRight } from "lucide-react"

export default function Next(){
  return (
    <HStack wrap="wrap" gap="8">
          <VStack key="lg">
            <IconButton
              aria-label="Search database"
              variant="outline"
              size="lg"
            >
              <ChevronRight size={68} strokeWidth={1.75} style={{color:"black"}}/>
            </IconButton>
          </VStack>
    </HStack>
  )
}

