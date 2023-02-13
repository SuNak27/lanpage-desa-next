import AboutLayout, { useAboutContext } from "@/layout/about"
import Header from "@/layout/header"
import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"

export default function VisiMisi() {
  const { state, commit } = useAboutContext()
  useEffect(() => {
    commit({ type: 'FETCH' })
  }, [commit])
  return (
    <>
      <Header title="Visi Misi" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Visi</h4>
        <div className="row">
          <div className="col-lg-12">
            {state.tag === 'loading' && (
              <Skeleton height={20} count={5} />
            )}
            <p className="text-justify">
              {state.data?.visi}
            </p>
          </div>
        </div>

        <h4 className="fw-semibold mb-4">Misi</h4>
        <div className="row">
          <div className="col-lg-12">
            {state.tag === 'loading' && (
              <Skeleton height={20} count={5} />
            )}
            {state.data?.misi}
          </div>
        </div>
      </div>
    </>
  )
}

VisiMisi.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <AboutLayout>
      {page}
    </AboutLayout>
  )
}