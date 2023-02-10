import { Context } from "@/utils/context"
import { useEffect, useState } from "react"
import Hero from "./hero"
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("Beranda")
  const [masterData, setMasterData] = useState(null)
  const [desa, setDesa] = useState(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/info-desa`)
      .then(res => res.json())
      .then(res => {
        setMasterData(res.data)
      })
      .catch(err => {
        console.error(err)
      })

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/desa`)
      .then(res => res.json())
      .then(res => {
        setDesa(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const value = {
    title,
    setTitle,
    masterData,
    setMasterData,
    desa,
    setDesa,
  }


  return (
    <Context.Provider value={value}>
      <Header title={title} />
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </Context.Provider>
  )
}