import { Context } from "@/utils/context"
import Head from "next/head"
import { useState } from "react"
import Hero from "./hero"
import Navbar from "./navbar"
export default function Layout({ children }) {
  const [title, setTitle] = useState("Beranda")

  return (
    <Context.Provider value={{ title, setTitle }}>
      <Head>
        <title>
          {title} | Aplikasi Sistem Informasi Desa
        </title>
        <meta name="description" content="Aplikasi Sistem Informasi Desa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <main>{children}</main>
    </Context.Provider>
  )
}