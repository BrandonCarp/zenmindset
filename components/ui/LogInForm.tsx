import React from "react";
import Link from "next/link";

export default function LogInForm() {
  return (
    <div>
      <div>
        <div className="signup-1 flex items-center relative  ">
          <div className="container px-4 mx-auto relative z-10">
            <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">

              <div className="box bg-white p-6 md:px-12 md:pt-12 border-2 border-gray-300 dark:border-white  rounded">
                <h1 className="flex items-center justify-center text-[3rem] text-black">Zen Mindset</h1>
                <h2 className="text-3xl text-gray-800 text-center">
                  Create a new account
                </h2>

                <form>
                  <div className="signup-form mt-6 md:mt-12">
                    <div className="border-2 border-solid rounded flex items-center mb-4">

                      <div className="flex-1">

                        <input
                          type="text"
                          placeholder="Username"
                          className="text-gray-700 h-10 py-1 pl-3 w-full"
                        />
                      </div>
                    </div>



                    <div className="border-2 border-solid rounded flex items-center mb-4">
                      <div className="flex-1">
                        <input
                          type="password"
                          placeholder="Password"
                          className="text-gray-700 h-10 py-1 pl-3 w-full"
                        />
                      </div>
                    </div>


                    <div className="text-center mt-6 md:mt-12">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">
                        Log in{" "}
                        <span className="far fa-paper-plane ml-2"></span>
                      </button>
                    </div>
                  </div>
                </form>

                <div className="border-t border-solid mt-6 md:mt-12 pt-4">
                  <p className="text-gray-500 text-center">
                    Already have an account,{" "}
                    <Link href="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}