import React from 'react'
import Homes from '../../components/Homes/Homes'
import DevComponent from '../../components/DevComponent/DevComponent'
import { Counter } from '../../store/counter'

const Home = () => {
  return (
<div className="home">
  <DevComponent />
  <Counter />
  <Homes />
</div>  )
}

export default Home

