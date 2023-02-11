import { useAppContext } from "@/utils/context"
import { useEffect } from "react"
import Hero from "./hero"
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"
import { api } from "@/utils/apiService"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { state, commit } = useAppContext()

  useEffect(() => {
    if (state.data?.master_data || state.data?.info_desa) {
      return
    } else {
      // commit({ type: "FETCH" })
    }

    switch (state.tag) {
      case "loading":
        Promise.all([
          api.get("/info-desa"),
          api.get("/desa"),
        ])
          .then(([info_desa, desa]) => {
            commit({
              type: "SUCCESS",
              payload: {
                master_data: info_desa.data,
                info_desa: desa.data
              }
            })
          })
          .catch((info_desa) => {
            commit({
              type: "ERROR",
              payload: info_desa.message
            })
          })
        break
      default:
        break
    }


  }, [commit, state.data?.info_desa, state.data?.master_data, state.tag])

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