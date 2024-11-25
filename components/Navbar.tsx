'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const languages = [
    { code: 'th', name: 'TH', flag: '/assets/image/thai.png' },
    { code: 'en', name: 'ENG', flag: '/assets/image/english.png' },
  ];

  return (
    <div className="flex justify-between items-center h-16 px-5 bg-white">
        <div className="flex">
            <Link href="/" className="text-lg font-bold">PRO SKILL LOGO</Link>
        </div>

        <div className="hidden md:flex text-xl h-full items-center ms-40">
            <Link className={`nav-menu ${pathname === '/' ? 'active' : ''}`} href="/">หน้าหลัก</Link>
            <Link className={`nav-menu ${pathname === '/Courses' ? 'active' : ''}`} href="/Courses">คอร์สเรียนทั้งหมด</Link>
            <Link className={`nav-menu ${pathname === '/FreeCourses' ? 'active' : ''}`} href="/FreeCourses">คอร์สฟรี</Link>
            <Link className={`nav-menu ${pathname === '/About' ? 'active' : ''}`} href="/About">สําหรับองค์กร</Link>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <Link className="block px-4 py-3 text-lg" href="/" onClick={toggleMobileMenu}>หน้าหลัก</Link>
            <Link className="block px-4 py-3 text-lg" href="/Courses" onClick={toggleMobileMenu}>คอร์สเรียนทั้งหมด</Link>
            <Link className="block px-4 py-3 text-lg" href="/FreeCourses" onClick={toggleMobileMenu}>คอร์สฟรี</Link>
            <Link className="block px-4 py-3 text-lg" href="/About" onClick={toggleMobileMenu}>สําหรับองค์กร</Link>
            <Link className="block px-4 py-3" href="/" onClick={toggleMobileMenu}>ถาม / ตอบ</Link>
            <Link className="block px-4 py-3" href="/Login" onClick={toggleMobileMenu}>เข้าสู่ระบบ</Link>
            <Link className="block px-4 py-3" href="/Register" onClick={toggleMobileMenu}><button className="btn-green py-2 px-4 rounded-md">สมัครสมาชิก</button></Link>
          </div>
        )}

        <div className="flex gap-4 items-center">
            <Link href="/" className="hidden md:block">ถาม / ตอบ</Link>
            <Link href="/Login" className="hidden md:block">เข้าสู่ระบบ</Link>
            <Link href="/Register">
              <button className="btn-green py-2 px-4 rounded-md ms-10 hidden md:block">สมัครสมาชิก</button>
            </Link>
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
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <span className="text-xl">&#9776;</span> 
            </button>
        </div>
    </div>
  )
}
export default Navbar;
