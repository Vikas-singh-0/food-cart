import React from 'react'
import Card from '../UI/Card'
import AvailableMeals from './AvailableMeals'
import Summary from './Summary'

export default function Meals() {
  return (
        <>
                <Summary/>
                <Card><AvailableMeals/></Card>
        </>
  )
}
