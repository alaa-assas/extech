import React from 'react'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import ClientCards from '../../components/ClientCards/ClientCards'
import PricingPlans from '../../components/PricingPlans/PricingPlans'
import Brand from '../../components/Brand/Brand'
import Businesses from '../../components/Businesses/Businesses'
import Hero from '../../components/Hero/Hero'
import Processes from '../../components/Processes/Processes'
import Featureds from '../../components/Featureds/Featureds'
import Viedo from '../../components/Viedo/Viedo'
import ContactSec from '../../components/ContactSec/ContactSec'
import ContactSec2 from '../../components/ContactSec2/ContactSec2'

export default function Home() {
  return (
    <>
      <NavBar ishome={true}></NavBar>
      <Hero></Hero>
      <Brand></Brand>
      <Businesses></Businesses>
      <Viedo></Viedo>
      <Processes></Processes>
      <PricingPlans></PricingPlans>
      <ContactSec></ContactSec>
      <ClientCards></ClientCards>
      <Featureds></Featureds>
      <ContactSec2></ContactSec2>
      <Footer ishome={true}></Footer>
    </>
  )
}
