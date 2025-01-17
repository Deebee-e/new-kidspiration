/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { useClickOutside } from '@/hooks/use-clickoutside'

import { shortenCompanyName, truncateString } from '@/lib/helper'
// import { useLogout } from '@app/features/auth/utils/client-auth'


interface AppLayoutDropdownProps {
  userData: any
  showName?: boolean
}
export function AppLayoutDropDown({ userData, showName }: AppLayoutDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<any>(null)
  // const logout = useLogout()
  const router = useRouter()

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  useClickOutside(dropdownRef, handleClickOutside)

  const user = JSON.parse(userData)

  const profileIcon = (
    <div className="bg-cgreen flex bg-[#681A52] h-10 w-10 items-center justify-center rounded-full text-white">
      {user?.firstName?.[0] ?? ''}
      {user?.lastName?.[0] ?? ''}
    </div>
  )

  const handleLogout = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // logout.mutate({});
    localStorage.removeItem('registrationData');
    void router.replace('/')
  }

  const dropdownArrow = isOpen ? (
    <IoIosArrowDown className="text-cgreen h-4 w-4" aria-hidden="true" />
  ) : (
    <IoIosArrowUp className="text-cgreen h-4 w-4" />
  )

  const companyName =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : ''
  const shortenedCompanyName = shortenCompanyName(companyName, true)

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <span className="rounded-md shadow-sm">
          <span
            // type="button"
            className="inline-flex w-full justify-center rounded-md text-sm font-medium mr-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                {profileIcon}
                {showName &&  
                  <div className="">
                    <h1 className="text-start font-semibold text-[#292D32]">
                      {shortenedCompanyName}
                    </h1>

                    <p className="text-start text-[#858585]">
                      {truncateString(user?.email, 20)}
                    </p>
                  </div>
                }
                {dropdownArrow}
              </div>
            </div>
          </span>
        </span>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >

            <li
              onClick={handleLogout}
              className="flex items-center gap-3 px-5 py-3 text-red-500 transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white"
            >
              <FiLogOut />
              <span>Logout</span>
            </li>
          </div>
        </div>
      )}
    </div>
  )
}
