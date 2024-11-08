'use client';
import React from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import DarkModeButton from "./DarkModeButton";

// https://strapi.io/blog/form-validation-in-typescipt-projects-using-zod-and-react-hook-forma


const FormSchema = z.object({
  username: z
    .string()
    .min(3, "Username must not be lesser than 3 characters")
    .max(25, "Username must not be greater than 25 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "The username must contain only letters, numbers and underscore (_)",
    ),
  email: z.string().email("Invalid email. Email must be a valid email address"),
  password: z
    .string()
    .min(3, "Password must not be lesser than 3 characters")
    .max(16, "Password must not be greater than 16 characters"),
  fullName: z.string().min(3, "Name must not be lesser than 3 characters"),
  age: z.string().refine(
    (age) => {
      return Number(age) >= 18;
    },
    { message: "You must be 18 years or older" },
  ),
});

type IFormInput = z.infer<typeof FormSchema>;


// Example code :
// const onSubmit = async (data: IFormInput) => {
//   // Prepare data to send
//   const payload = {
//     user_name: data.username,
//     password: data.password,
//     email: data.email,
//     full_name: data.fullName,
//     age: data.age, // Ensure age is properly passed as a number if needed
//   };

//   try {
//     // Make a POST request to the Flask backend
//     const response = await fetch('http://localhost:5000/api/users/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload), // Send data as a JSON string
//     });

//     const result = await response.json();

//     if (response.ok) {
//       // Handle success - user created
//       alert('User registered successfully!');
//       console.log('User data:', result);
//       // You can redirect or perform other actions on success
//     } else {
//       // Handle error - user not created
//       alert('Registration failed: ' + result.error);
//     }
//   } catch (error) {
//     console.error('Network error:', error);
//     alert('An error occurred while registering the user.');
//   }
// };



export default function SignUpForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
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

                      </div>

                    </div>

                    <div className="border-2 border-solid rounded flex items-center mb-4">

                      <div className="flex-1">
                        {/* {errors.email && <p className="text-red-800 border border-black">{errors.email.message}</p>} */}
                        <input
                          {...register("email")}
                          type="text"
                          placeholder="E-mail"
                          className="text-black dark:text-black h-10 py-1 pl-3  w-full"
                        />
                      </div>
                    </div>

                    <div className="border-2 border-solid rounded flex items-center mb-4">
                      <div className="flex-1">
                        <input
                          {...register("password")}
                          type="password"
                          placeholder="Password"
                          className="text-black dark:text-black h-10 py-1 pl-3 w-full"
                        />
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
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300" onClick={handleSubmit(onSubmit)}>
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
