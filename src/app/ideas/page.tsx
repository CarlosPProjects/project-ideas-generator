import Container from '@/components/Container'
import React from 'react'
import GeneratorForm from './_components/generator-form'
import CardList from './_components/card-list'

const Ideas = () => {
  return (
    <Container className='flex-1 flex flex-col'>
      <div className='flex flex-col space-y-8 items-center py-10'>
        <h1 className='text-3xl font-medium'>Think It, Code It</h1>
        <GeneratorForm />
      </div>
      <CardList />
    </Container>
  )
}

export default Ideas