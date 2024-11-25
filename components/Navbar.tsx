'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const languages = [
    { code: 'th', name: 'TH', flag: '/assets/image/thai.png' },
    { code: 'en', name: 'ENG', flag: '/assets/image/english.png' },
  ];

  return (
    <div className="flex justify-between items-center h-16 px-5">
        <div className="flex me-96">
            <Link href="/">PRO SKILL LOGO</Link>
        </div>
        
        <div className="flex text-xl h-full items-center">
            <Link className={`nav-menu ${pathname === '/' ? 'active' : ''}`} href="/">หน้าหลัก</Link>
            <Link className={`nav-menu ${pathname === '/Courses' ? 'active' : ''}`} href="/Courses">คอร์สเรียนทั้งหมด</Link>
            <Link className={`nav-menu ${pathname === '/FreeCourses' ? 'active' : ''}`} href="/FreeCourses">คอร์สฟรี</Link>
            <Link className={`nav-menu ${pathname === '/About' ? 'active' : ''}`} href="/About">สําหรับองค์กร</Link>
        </div>

        <div className="flex gap-4 items-center">
            <Link href="/">ถาม / ตอบ</Link>
            <Link href="/Login">เข้าสู่ระบบ</Link>
            <Link href="/Register"><button className="btn-green py-2 px-4 rounded-md ms-10">สมัครสมาชิก</button></Link>
            <div className="relative">
              <button
                className="flex items-center gap-2 px-1 py-1 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none"
                onClick={toggleDropdown}
              >
                <Image
                  src="/assets/image/thai.png"
                  alt="Thai Flag"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
                <span>TH</span>
              </button>
              {isOpen && (
                <div className="absolute mt-2 w-24 bg-white border border-gray-300 rounded-md shadow-lg">
                  {languages.map((language) => (
                    <Link
                      key={language.code}
                      href={`/${language.code}`}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)} 
                    >
                      <Image
                        src={language.flag}
                        alt={`${language.name} Flag`}
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>{language.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <MagnifyingGlassIcon className="w-6 text-gray-500" />
        </div>
    </div>
  )
}
export default Navbar