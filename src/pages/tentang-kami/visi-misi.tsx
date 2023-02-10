import Layout from "@/layout"
import AboutLayout from "@/layout/about"
import Header from "@/layout/header"
import { ContextProvider, useAppContext } from "@/utils/context"
import { useContext } from "react"

export default function VisiMisi() {
  const { state } = useAppContext()
  return (
    <>
      <Header title="Visi Misi" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Visi</h4>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify">
              {state.data?.tentang_kami?.visi}
            </p>
          </div>
        </div>

        <h4 className="fw-semibold mb-4">Misi</h4>
        <div className="row">
          <div className="col-lg-12">
            {state.data?.tentang_kami?.misi}
          </div>
        </div>
      </div>
    </>
  )
}

VisiMisi.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <ContextProvider>
      <Layout>
        <AboutLayout>
          {page}
        </AboutLayout>
      </Layout>
    </ContextProvider>
  )
}