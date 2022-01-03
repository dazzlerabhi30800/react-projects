import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour, homeObjOne, homeObjThree} from './Data'

function SignUp() {
    return (
        <>
           
           <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
        </>
    )
}

export default SignUp
