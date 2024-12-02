'use client';
import React from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IRegistrationFormInput, registrationSchema } from "@/app/schemas/userSchema";
import { newRegistration } from "@/app/api/register/userService";


export default function SignUpForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationFormInput>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: IRegistrationFormInput) => {
    try {
      await newRegistration(data);
      console.log("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <div className="signup-1 flex items-center relative">
          <div className="container px-4 mx-auto relative z-10">
            <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
              <div className="box bg-white p-6 md:px-12 md:pt-12 border-2 border-gray-300 dark:border-white rounded">
                <h1 className="flex items-center justify-center text-[3rem] text-black ">
                  Zen Mindset
                </h1>
                <h2 className="text-3xl   dark:text-black text-center">
                  Create a new account
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="signup-form mt-6 md:mt-12">
                    <div className="border-2 border-solid rounded flex items-center mb-4 ">

                      <div className="flex-1">
                        {/* {errors.username && <p className="text-red-800 border border-black">{errors.username.message}</p>} */}
                        <input
                          {...register("username")}
                          type="text"
                          placeholder="Username"
                          className="text-black dark:text-black h-10 py-1 pl-3 w-full"
                        />
                        {errors.username && <p className="text-red-800">{errors.username.message}</p>}
                      </div>

                    </div>

                    <div className="border-2 border-solid rounded flex items-center mb-4">

                      <div className="flex-1">
                        {/* {errors.email && <p className="text-red-800 border border-black">{errors.email.message}</p>} */}
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="E-mail"
                          className="text-black dark:text-black h-10 py-1 pl-3  w-full"
                        />
                        {errors.email && <p className="text-red-800">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="border-2 border-solid rounded flex items-center mb-4">
                      <div className="flex-1">
                        <input
                          {...register("password")}
                          type="text"
                          placeholder="Password"
                          className="text-black dark:text-black h-10 py-1 pl-3 w-full"
                        />
                        {errors.password && <p className="text-red-800">{errors.password.message}</p>}
                      </div>
                    </div>

                    <div className="border-2 border-solid rounded flex items-center mb-4">
                      <div className="flex-1">
                        <input
                          {...register("fullName")}
                          type="text"
                          placeholder="Full name"
                          className="text-black dark:text-black h-10 py-1 pl-3 w-full"
                        />
                      </div>
                    </div>

                    <div className="border-2 border-solid rounded flex items-center mb-4">
                      <div className="flex-1">
                        <input
                          {...register("age")}
                          type="number"
                          placeholder="Age"
                          className="text-black dark:text-black h-10 py-1 pl-3 w-full"
                        />
                      </div>
                    </div>

                    <p className="text-sm text-center mt-6 text-black">
                      By signing up, you agree to our{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        Privacy Policy
                      </a>
                    </p>

                    <div className="text-center mt-6 md:mt-12">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300" type="submit" >
                        Sign Up{" "}
                        <span className="far fa-paper-plane ml-2"></span>
                      </button>
                    </div>
                  </div>
                </form>

                <div className="border-t border-solid mt-6 md:mt-12 pt-4">
                  <p className="text-gray-500 text-center">
                    Already have an account,{" "}
                    <Link href="/login" className="text-indigo-600 hover:underline">Log in</Link>
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
