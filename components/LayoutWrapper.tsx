// components/LayoutWrapper.tsx
'use client'

import { usePathname } from "next/navigation"
import Navbar from "./navbar"
import Footer from "./footer"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hiddenPaths = ["/AuthUser/login","/AuthUser/register","/AuthUser/resetPassword"]
  const hideLayout = hiddenPaths.includes(pathname)

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}
