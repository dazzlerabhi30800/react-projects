import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour, homeObjTwo, homeObjOne} from './Data'

function Products() {
    return (
        <>
           <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
        </>
    )
}

export default Products
