/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client'
import { InputField, PasswordInputField } from '@/components/forms'
import { Button } from '@/components/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useLogin } from '../utils/client-auth'

// import { useToast } from '@/components/ui'
import toast, { Toaster } from 'react-hot-toast';

export function AuthRegisterForm() {
  const router = useRouter()
  // const loginMutation = useLogin()

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")

  // const { toast } = useToast()

  function saveRegistrationData({firstName, lastName, username, password}: any) {
    // Create an object to store the registration data
    const registrationData = {
      firstName,
      lastName,
      username,
      password, // You may want to hash the password for security in a real-world scenario
    };
  
    try {
      // Save the object as a string in localStorage
      localStorage.setItem("registrationData", JSON.stringify(registrationData));
      setFirstname("")
      setLastname("")
      setUserName("")
      setPassword("")
      toast.success("Registration successfully.");
      router.push('/login')
    } catch (error) {
      toast.error("Error registering user")
      console.error("Error saving registration data:", error);
    }
  }

  

  return (
    <form
      id="login-form"
      onSubmit={saveRegistrationData}
    >
      <Toaster />
        <>
          <div className="flex flex-col">
          <InputField
              type="text"
              label="First Name"
              required={true}
              onInput={(e: any) => {
                const value = e.target.value;
                setFirstname(value);
              }}
            />

            <InputField
              type="text"
              label="Last Name"
              required={true}
              onInput={(e: any) => {
                const value = e.target.value;
                setLastname(value);
              }}
            />

            <InputField
              type="text"
              label="Email Address / Username"
              required={true}
              onInput={(e: any) => {
                const value = e.target.value;
                setUserName(value);
              }}
            />

            <PasswordInputField
              type="password"
              label="Password"
              required={true}
              onInput={(e: any) => {
                const value = e.target.value;
                setPassword(value);
              }}
            />
          </div>
          <div className="bottom-0 mt-10 relative flex">
            <Button
              variant="primary"
              type="button"
              onClick={() => saveRegistrationData({firstName, lastName, username, password})}
              size="md"
              className="px-10"
              disabled={username === '' && password === '' && firstName === '' && lastName === ''}
            >
              Register
            </Button>
          </div>
          <div className="mt-10">
            <span className="my-3 text-sm text-gray-600">
              Already a member? &nbsp;
              <a className="pl-2 font-medium text-[#2A94C7] underline" href="/login">
                Login here
              </a>
              
            </span>
          </div>
        </>
    </form>
  )
}
