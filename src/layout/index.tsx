import { Context } from "@/utils/context"
import { useState } from "react"
import Hero from "./hero"
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("")

  return (
    <Context.Provider value={{ title, setTitle }}>
      <Header title={title} />
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </Context.Provider>
  )
}