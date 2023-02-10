import Layout from "@/layout"
import AboutLayout from "@/layout/about"
import Header from "@/layout/header"
import { AboutContext } from "@/utils/context"
import { useContext } from "react"

export default function VisiMisi() {
  const data = useContext(AboutContext)
  return (
    <>
      <Header title="Visi Misi" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Visi</h4>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify">
              {data?.visi}
            </p>
          </div>
        </div>

        <h4 className="fw-semibold mb-4">Misi</h4>
        <div className="row">
          <div className="col-lg-12">
            {data?.misi}
          </div>
        </div>
      </div>
    </>
  )
}

VisiMisi.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <AboutLayout>
        {page}
      </AboutLayout>
    </Layout>
  )
}