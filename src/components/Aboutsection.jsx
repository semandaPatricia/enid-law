import React from 'react'

const Aboutsection = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            src="https://images.pexels.com/photos/6077861/pexels-photo-6077861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">About the firm</h2>
  
          <p className="mt-4">
          The Firm was created in 2009 as an independent team of legal experts to comprehensively resolve legal issues in the interests of large businesses.

          </p>
          <br></br>
          <p>Both large and small enterprises use our help, and accounting offices and human resources
             departments also consult on legal aspects. In all areas that connect employer and employee, 
             questions and difficulties may 
            arise to which labor law has answers. And our team  knows where to look for them.</p>
            <br></br>
            <p>Over the years of practice, we have learned to calculate the moves of our opponents, act proactively and, as a result, comprehensively solve the task. A creative approach to providing legal assistance is at the core of our philosophy and is a tool for resolving even the most hopeless disputes.</p>
  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutsection