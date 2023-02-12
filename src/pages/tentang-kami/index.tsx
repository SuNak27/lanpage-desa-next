import AboutLayout, { useAboutContext } from "@/layout/about"
import Header from "@/layout/header"
import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"

export default function About() {
  const { state, commit } = useAboutContext()
  useEffect(() => {
    commit({ type: 'FETCH' })
  }, [commit])
  return (
    <>
      <Header title="Tentang Kami" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Profil Desa</h4>
        <div className="row">
          <div className="col-lg-12">
            {state.tag !== 'success' && (
              <>
                <Skeleton height={20} className={'float-end'} width={'90%'} />
                <Skeleton height={20} count={5} />
              </>
            )}
            <p>
              {state.data?.profil_desa}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <AboutLayout>
      {page}
    </AboutLayout>
  )
}