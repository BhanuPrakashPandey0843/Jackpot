import React from 'react'

import Hero from "../components/Hero/Hero"
import ShopCards from "../components/FashionGridComponent/FashionGridComponent"
import Banner from "../components/Banner/Banner"
import Moreproducts from "../components/Moreproducts/Moreproducts"
import Newsletter from "../components/Newsletter/Newsletter"

const LandingPage = () => {
  return (
    <div>
   
     <Hero />
     <ShopCards />
     <Banner />
     <Moreproducts />
    <Newsletter />

    </div>
  )
}

export default LandingPage
