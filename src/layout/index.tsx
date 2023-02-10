import { useAppContext } from "@/utils/context"
import { useEffect } from "react"
import Hero from "./hero"
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { commit } = useAppContext()

  useEffect(() => {
    commit({ type: "FETCH" })
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/desa`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/info-desa`)
    ])
      .then(([info_desa, masterData]) => Promise.all([info_desa.json(), masterData.json()]))
      .then(([info_desa, masterData]) => {
        commit({
          type: "SUCCESS",
          payload: {
            info_desa: info_desa.data,
            master_data: masterData.data
          }
        })
      })
      .catch(err => {
        commit({
          type: "ERROR",
          payload: err.message
        })
      })
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  )
}