import Container from '@/components/Container'
import React from 'react'
import CardProject from './_components/card-project'

const Ideas = () => {
  return (
    <Container className='flex-1 flex flex-col'>
      <div>
        <h1>Project Ideas</h1>
      </div>
      <div className='grid grid-cols-3'>
        <CardProject />
      </div>
    </Container>
  )
}

export default Ideas