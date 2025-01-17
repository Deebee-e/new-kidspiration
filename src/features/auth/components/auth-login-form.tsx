/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client'
import { InputField, PasswordInputField } from '@/components/forms'
import { Button } from '@/components/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useLogin } from '../utils/client-auth'

import toast, { Toaster } from 'react-hot-toast';

export function AuthLoginForm() {
  const router = useRouter()
  // const loginMutation = useLogin()

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  // const { toast } = useToast()

  function login(username: string, password: string): any | object | null {
    // Retrieve the stored data
    const storedData = localStorage.getItem("registrationData");
  
    console.log(storedData)
    // Check if storedData is null
    if (!storedData) {
      toast.error("No user found. Please register first.");
      return null;
    }
  
    // Parse the stored JSON safely
    const userData = JSON.parse(storedData);
  
    // Validate credentials
    if (userData.username === username && userData.password === password) {
      toast.success("Login successful!");
      router.push('/affirmations')
      return userData;
    } else {
      toast.error("Invalid username or password.")
      console.error("Invalid username or password.");
      return null;
    }
  }
  

  return (
    <form
      id="login-form"
      // onSubmit={login}
    >
      <Toaster />
        <>
          <div className="flex flex-col">
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
          
          <div className="mt-3">
            <span className="my-3 text-sm text-gray-600">
              Don’t have an account? &nbsp;
              <a className="pl-2 font-medium text-[#2A94C7] underline" href="/register">
                Register here
              </a>
              
            </span>
          </div>
          <div className="bottom-0 mt-10 relative flex">
            <Button
              variant="primary"
              type="button"
              onClick={() => login(username, password)}
              size="md"
              className="px-10"
              disabled={username === '' && password === ''}
            >
              Login
            </Button>
          </div>
        </>
    </form>
  )
}
