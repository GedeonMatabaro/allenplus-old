"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import logo from "@/public/logo.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Leaf, Heart, Users, Moon, Sun, Type, ChevronDown, Accessibility } from "lucide-react"
import { cn } from "@/lib/utils"
import LanguageSelect from "./LanguageSelect"
import DarkModeToggleButton from "./darkModeToggle"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [fontSize, setFontSize] = React.useState("normal")
  const [currentLanguage, setCurrentLanguage] = React.useState("en")

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle dark mode
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Handle font size
  React.useEffect(() => {
    const root = document.documentElement
    root.classList.remove("text-sm", "text-base", "text-lg")
    if (fontSize === "small") root.classList.add("text-sm")
    else if (fontSize === "large") root.classList.add("text-lg")
    else root.classList.add("text-base")
  }, [fontSize])


  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Our Impact" },
    { href: "/partners", label: "Partners" },
    { href: "/future-goals", label: "Future Goals" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? " bg-transparent" : "bg-card/60  backdrop-blur-md",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex justify-between items-center py-4 transition-all duration-300",
            isScrolled &&
              "bg-card/60 backdrop-blur-md rounded-3xl shadow-lg border border-green-100/50 dark:border-gray-700/50 px-6 mx-4",
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-105 p-0">
                <Image
                  src={logo}
                  alt="ALLEN+ Logo"
                  className="h-14 w-14 object-contain"
                  />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block w-24">
              <div className="font-semibold text-sm text-gray-800 dark:text-gray-300">Aid Life Learn Environment</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-all duration-300 group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher with Dropdown */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 px-4 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 border border-transparent hover:border-green-200 dark:hover:border-green-700"
                >
                  <span className="text-sm font-medium mr-2">
                    {languages.find((lang) => lang.code === currentLanguage)?.code.toUpperCase() || "EN"}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-2xl border-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl p-2">
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Select Language
                </div>
                <DropdownMenuSeparator className="my-1" />
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className={cn(
                      "rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 cursor-pointer transition-all duration-200 py-3 px-3",
                      currentLanguage === language.code &&
                        "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
                    )}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{language.code.toUpperCase()}</span>
                    </div>
                    {currentLanguage === language.code && (
                      <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <LanguageSelect /> */}

            {/* Accessibility Menu */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                >
                  <Accessibility className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-xl border-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl">
                <div className="p-2">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-2">
                      {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                      <span className="text-sm">Dark Mode</span>
                    </div>
                    <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                  </div>
                  <DropdownMenuSeparator />
                  <div className="py-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Type className="h-4 w-4" />
                      <span className="text-sm">Font Size</span>
                    </div>
                    <div className="flex space-x-1">
                      {["small", "normal", "large"].map((size) => (
                        <Button
                          key={size}
                          variant={fontSize === size ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setFontSize(size)}
                          className="text-xs h-8 px-2 rounded-lg"
                        >
                          {size === "small" ? "A" : size === "normal" ? "A" : "A"}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <DarkModeToggleButton /> */}
            {/* CTA Buttons */}
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-green-200 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                <Users className="h-4 w-4 mr-2" />
                Volunteer
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/donate">
                <Heart className="h-4 w-4 mr-2" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 px-3 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                >
                  <span className="text-sm font-medium mr-1">
                    {languages.find((lang) => lang.code === currentLanguage)?.code.toUpperCase() || "EN"}
                  </span>
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 rounded-2xl border-0 bg-white/95 backdrop-blur-md shadow-xl p-2">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className={cn(
                      "rounded-xl cursor-pointer transition-all duration-200 py-2",
                      currentLanguage === language.code &&
                        "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
                    )}
                  >
                    <span className="font-medium">{language.name}</span>
                    {currentLanguage === language.code && (
                      <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <LanguageSelect /> */}


            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMobileMenuOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0",
          )}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-green-100/50 dark:border-gray-700/50 p-8 mt-6 mx-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-4 mb-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium py-2 px-4 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Accessibility Controls */}
            {/* <div className="border-t border-green-100 dark:border-gray-700 pt-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="text-sm">Dark Mode</span>
                </div>
                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Type className="h-4 w-4" />
                  <span className="text-sm">Font Size</span>
                </div>
                <div className="flex space-x-2">
                  {["small", "normal", "large"].map((size) => (
                    <Button
                      key={size}
                      variant={fontSize === size ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setFontSize(size)}
                      className="text-xs h-8 px-3 rounded-lg flex-1"
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </div> */}
            {/* <DarkModeToggleButton /> */}
            {/* Mobile CTA Buttons */}
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-xl border-green-200 text-green-700 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Users className="h-4 w-4 mr-2" />
                  Volunteer
                </Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg transition-all duration-300"
              >
                <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Heart className="h-4 w-4 mr-2" />
                  Donate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
