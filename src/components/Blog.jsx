import React from 'react'


const Blog = () => {
  return (
    
<section className="bg-white dark:bg-gray-900 mb-10 mt-10">
    <div className="container px-6 py-10 mx-auto">
        <h1 className=" flex justify-center items-center text-3xl font-bold  lg:text-3xl dark:text-white"> The blog</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Personal Injury Laws 
                    </a>
                    <p> There are many, and they are complicated. But that’s why we are here.</p>
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2024</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    Car Accident Lawyers
                    </a>
                    <p> Our experienced car accident lawyers can handle the entire legal process from start to finish. If you are hurting after a car accident, let our lawyers focus on your case so you can focus on your recovery.</p>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 April 2024 </span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Morning routine to boost your mood
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="" />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        All the features you want to know
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
                </div>
            </div>

          

          
        </div>
    </div>
</section>
  )
}

export default Blog