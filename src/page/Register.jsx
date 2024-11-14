import React from 'react'
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
<section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
 
      <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    
                    <Input 
                     label="Your Name: "
                     type="text"
                     placeholder="Enter your name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>

                 <div>
                    
                    <Input 
                     label="Your email: "
                     type="email"
                     placeholder="Enter your email"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div>
                    
                    <Input 
                     label="Your password: "
                     type="password"
                     placeholder="Enter your password"
                     className=" border border-gray-700 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 placeholder-gray-400  dfocus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                
                  <Button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-slate-50">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Register