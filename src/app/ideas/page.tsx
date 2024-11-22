import Container from '@/components/Container'
import React from 'react'
import GeneratorForm from './_components/generator-form'
import CardList from './_components/card-list'

const Ideas = () => {
  return (
    <Container className='flex-1 flex py-4'>
      <GeneratorForm />
      <CardList />
    </Container>
  )
}

export default Ideas