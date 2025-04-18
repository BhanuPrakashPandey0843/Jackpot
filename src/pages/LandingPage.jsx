import React from 'react'
import Upperheader from "../components/Upperheader/Upperheader"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import ShopCards from "../components/ShopCards/ShopCards"
import Banner from "../components/Banner/Banner"
import Moreproducts from "../components/Moreproducts/Moreproducts"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"
const LandingPage = () => {
  return (
    <div>
    <Upperheader />
    <Navbar />
     <Hero />
     <ShopCards />
     <Banner />
     <Moreproducts />
    <Newsletter />
    <Footer />
    </div>
  )
}

export default LandingPage
