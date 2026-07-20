"use client";

import { useState } from "react";
import Link from "next/link";
import { Handshake, ChevronDown, Menu, X } from "lucide-react";

const BRAND = "#0FBA81"; // teal-green from screenshot

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span
            className="w-14 h-14 rounded-full border border-dashed flex items-center justify-center"
            style={{ borderColor: BRAND }}
          >
            <Handshake size={26} style={{ color: BRAND }} />
          </span>
          <span className="text-3xl font-extrabold text-[#0E1B3D]">
            Makaan
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-[#0E1B3D]">
          <li>
            <Link href="/" style={{ color: BRAND }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:opacity-70 transition">
              About
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setPropertyOpen(true)}
            onMouseLeave={() => setPropertyOpen(false)}
          >
            <button className="flex items-center gap-1 hover:opacity-70 transition">
              Property <ChevronDown size={16} />
            </button>
            {propertyOpen && (
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 border">
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Property Listing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Property Type
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Property Agent
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:opacity-70 transition">
              Pages <ChevronDown size={16} />
            </button>
            {pagesOpen && (
              <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 border">
                <li>
                  <Link
                    href="/testimonial"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    404 Error
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/" className="hover:opacity-70 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Buy Pro Button */}
        <Link
          href="#"
          className="hidden lg:inline-block text-white font-semibold px-6 py-3 rounded-md transition"
          style={{ backgroundColor: BRAND }}
        >
          Buy Pro Version
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#0E1B3D]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-6 pb-4">
          <ul className="flex flex-col gap-3 font-medium text-[#0E1B3D] pt-3">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => setPropertyOpen(!propertyOpen)}
              >
                Property <ChevronDown size={16} />
              </button>
              {propertyOpen && (
                <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                      Property Listing
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                      Property Type
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                      Property Agent
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                Pages <ChevronDown size={16} />
              </button>
              {pagesOpen && (
                <ul className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                      404 Error
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="inline-block text-white font-semibold px-5 py-2 rounded-md text-center"
                style={{ backgroundColor: BRAND }}
              >
                Buy Pro Version
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}