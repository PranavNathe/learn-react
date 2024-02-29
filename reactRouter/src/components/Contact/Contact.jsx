import React, { useState } from 'react'
import {Input, Button} from "@nextui-org/react";

function Contact() {
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
        <Button color="primary" variant="shadow" >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Contact