import {
    Button,
    Flex,
    Input,
    Box,
    Text,
    Heading,
    IconButton,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { FiX } from 'react-icons/fi';
  
  function Dynamic({ items, onItemsChange }) {
    const handleChange = (index, field, value) => {
      const updated = [...items];
      updated[index][field] = value;
      onItemsChange(updated);
    };
  
    const handleAddItem = () => {
      onItemsChange([
        ...items,
        { id: +new Date(), description: '', quantity: '', price: '' },
      ]);
    };
  
    const handleRemoveItem = (id) => {
      const filtered = items.filter((item) => item.id !== id);
      onItemsChange(filtered);
    };
  
    return (
      <>
        <Heading fontSize="1rem" my="1rem" color="gray">Items</Heading>
        {items.map((item, index) => (
          <Flex key={item.id} align="center" gap={2} mb={2}>
            <Input
              placeholder="Item description"
              variant="unstyled"
              borderBottom="1px dashed #40cbff"
              value={item.description}
              onChange={(e) => handleChange(index, 'description', e.target.value)}
              _focus={{ borderBottom: '1.5px dashed #fbae34', boxShadow: 'none' }}
            />
            <Input
              placeholder="Qty"
              width="5rem"
              variant="unstyled"
              borderBottom="1px dashed #40cbff"
              value={item.quantity}
              onChange={(e) => handleChange(index, 'quantity', e.target.value)}
              _focus={{ borderBottom: '1.5px dashed #fbae34', boxShadow: 'none' }}
            />
            <Input
              placeholder="Price"
              width="5rem"
              variant="unstyled"
              borderBottom="1px dashed #40cbff"
              value={item.price}
              onChange={(e) => handleChange(index, 'price', e.target.value)}
              _focus={{ borderBottom: '1.5px dashed #fbae34', boxShadow: 'none' }}
            />
            <IconButton
              icon={<FiX />}
              size="sm"
              onClick={() => handleRemoveItem(item.id)}
              variant="ghost"
              colorScheme="red"
              aria-label="Remove item"
            />
          </Flex>
        ))}
        <Button size="sm" onClick={handleAddItem} mt={2} color="#ffb300">
          + Add Item
        </Button>
      </>
    );
  }
  
  export default Dynamic;
  