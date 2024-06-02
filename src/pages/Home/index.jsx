import React from 'react'
import Herosection from '../../components/Herosection'
import Aboutsection from '../../components/Aboutsection';
import Feature from '../../components/Feature'; // Import Feature
import Services from '../../components/Services'; // Import Services
import Blog from '../../components/Blog'; // Import Blog
const index = () => {
  return (
    <div>
      <Herosection />
      <Aboutsection/>
      <Feature />  {/* Add Feature component here */}
      <Services />  {/* Add Services component here */}
      <Blog />  {/* Add Blog component here */}
    </div>
  )
}

export default index