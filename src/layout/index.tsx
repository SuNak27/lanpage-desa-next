import { ContextProvider, useAppContext } from "@/utils/context"
import { useEffect, useState } from "react"
import Hero from "./hero"
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("Beranda")
  const { state, commit } = useAppContext();

  useEffect(() => {
    commit({ type: "FETCH" })
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/desa`)
      .then(res => res.json())
      .then(res => {
        commit({ type: "SUCCESS", payload: { info_desa: res.data } })
      })
      .catch(err => {
        commit({ type: "ERROR", payload: err })
      })
  }, [])

  return (
    <ContextProvider>
      <Header title={title} />
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </ContextProvider>
  )
}