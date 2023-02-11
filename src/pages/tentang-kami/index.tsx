import Layout from "@/layout"
import AboutLayout from "@/layout/about"
import Header from "@/layout/header"
import { ContextProvider, useAppContext } from "@/utils/context"
import Skeleton from "react-loading-skeleton"

export default function About() {
  const { state } = useAppContext()
  return (
    <>
      <Header title="Tentang Kami" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Profil Desa</h4>
        <div className="row">
          <div className="col-lg-12">
            {state.tag == 'loading' || state.tag == "error" && (
              <>
                <Skeleton height={20} className={'float-end'} width={'90%'} />
                <Skeleton height={20} count={5} />
              </>
            )}
            <p>
              {state.data?.tentang_kami?.profil_desa}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: React.ReactNode) {
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