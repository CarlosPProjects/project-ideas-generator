import Container from '@/components/Container'
import React from 'react'
import CardProject from './_components/card-project'
import GeneratorForm from './_components/generator-form'

const Ideas = () => {
  return (
    <Container className='flex-1 flex flex-col'>
      <div className='flex flex-col space-y-8 items-center py-10'>
        <h1 className='text-3xl font-medium'>Think It, Code It</h1>
        <GeneratorForm />
      </div>
      <div className='text-center space-y-2'>
        <h2 className='text-xl font-medium'>Not project ideas found</h2>
        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className='grid grid-cols-4'>
        <CardProject />
      </div>
    </Container>
  )
}

export default Ideas