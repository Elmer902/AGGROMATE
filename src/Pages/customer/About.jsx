import React from 'react'
import images from '../../../constants/images'

const About = () => {
  return (
    <>
<div 
  style={{
    backgroundImage: `
      linear-gradient(to left, #387718 23%, transparent 140%), 
      url(${images.aboutBg})
    `
  }}
  className="md:h-screen w-full md:bg-contain bg-cover bg-bottom p-10 md:py-40 md:px-24 md:bg-left bg-no-repeat flex md:flex-row flex-col md:gap-28 gap-8 md:items-start md:text-start text-center items-center"
>
  {/* Left */}
  <div className="flex flex-col md:w-1/3 w-full text-start">
    <div className="bg-lime-200 h-0.5 md:w-32 w-28 mb-4"></div>
    <h1 className="md:text-5xl text-4xl text-white font-bold">Who We Are</h1>
  </div>

  {/* Righ */}
  <div className="md:w-2/3 text-start text-xs font-semibold text-white leading-relaxed">
    Agromate is your gateway to a better food system in Bamenda. We're a passionate team on a mission to connect you directly with local farmers, bringing the freshest produce straight from farm to fridge.
    <br /><br />
    <strong>Why We Do It</strong><br />
    We believe everyone deserves access to healthy, delicious food. But the traditional food system often creates barriers, leading to inflated prices, limited choices, and a disconnect between consumers and the source of their food.
    <br /><br />
    <strong>The Agromate Difference</strong>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li>Hyper-Local Focus: We connect you directly with Bamenda-area farmers, ensuring peak freshness and supporting your local community.</li>
      <li>On-Demand Convenience: Order farm-fresh produce through our user-friendly app and have it delivered straight to your doorstep.</li>
      <li>Fair Prices & Transparency: Our streamlined supply chain eliminates unnecessary middlemen, offering competitive prices for both farmers and consumers. You'll know exactly where your food comes from and who you're supporting.</li>
      <li>Sustainable Practices: We champion eco-friendly agriculture and empower local farmers to adopt sustainable practices.</li>
    </ul>
  </div>
</div>

    </>
  )
}

export default About