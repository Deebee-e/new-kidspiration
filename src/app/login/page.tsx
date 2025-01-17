"use client";

import { AuthLoginForm } from "@/features/auth";
import { ChevronLeftCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

// export const metadata: Metadata = {
//   title: 'Login Page',
//   description: 'Enter Login Credentials to access your account.',
// }
export default function LoginPage() {
  return (
    <section>
      <div className="flex min-h-screen justify-center">
        <div className="relative hidden bg-[url('/images/kids-login.jpg')] bg-cover bg-center lg:block lg:w-2/5">
        {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
          <div className="px-10 pt-6 ">
            <Link href="/">
              <div className="flex items-center left-0 space-x-4">
                <h2 className="text-4xl font-extrabold text-center text-white text-gradient-rainbow">KidSpiration</h2>
              </div>
            </Link>
          </div>
          <div className="absolute bottom-20 left-0 right-0 m-auto sm:w-[30em]">
            <p className="text-xm md:text-xl lg:text-md font-bold text-white">
              “Daily drops of positive affirmations to inspire and motivate your kids”
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-3xl items-center p-8 lg:w-5/5 lg:px-12">
          <div className="mx-auto w-full md:w-8/12">
            <Link href="/">
              <h1 className="flex items-center space-x-2 text-sm font-bold capitalize tracking-wider text-[#2A94C7]">
                <ChevronLeftCircle className="h-5 w-5" />
                <span>Back Home</span>
              </h1>
            </Link>

            <h1 className="my-10 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Login to your <br /> Account
            </h1>
            <AuthLoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
