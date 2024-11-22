import Container from '@/components/Container'
import React from 'react'
import CardProject from './_components/card-project'

const Ideas = () => {
  return (
    <Container className='flex-1 flex flex-col'>
      <div className='flex justify-center py-10'>
        <h1 className='text-3xl font-medium'>Think It, Code It</h1>
      </div>
      <div className='grid grid-cols-4'>
        <CardProject />
      </div>
    </Container>
  )
}

export default Ideas