import Container from '@/components/Container'
import React from 'react'
import GeneratorForm from './_components/generator-form'
import CardList from './_components/card-list'
import { IdeasProvider } from '@/contexts/IdeasContext'

const Ideas = () => {
  return (
    <IdeasProvider>
      <Container className='flex-1 flex py-4 gap-4'>
        <GeneratorForm />
        <CardList />
      </Container>
    </IdeasProvider>
  )
}

export default Ideas