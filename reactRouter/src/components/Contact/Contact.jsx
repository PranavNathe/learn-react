import React, { useState } from 'react'
import {Input, Button} from "@nextui-org/react";
import confetti from 'canvas-confetti'; 
import { toast } from 'react-toastify';

function Contact() {
  const handleBtn = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });
    toast.success("Thank You")
  }

  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl p-3'>Contact Form</h1>
      <div className='m-2'>
        <Input
          key="outside"
          type="email"
          label="Email"
          labelPlacement="outside"
          description="Enter your email address"
        />
      </div>
      <div className='m-2'>
      <Input
          key="outside"
          type="Description"
          label="Description"
          labelPlacement="outside"
          description="Enter your description"
          className="max-w-xs"
        />
      </div>
      <div className='m-2 pb-4'>
        <Button 
        color="primary" 
        variant="shadow" 
        onPress={handleBtn}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Contact