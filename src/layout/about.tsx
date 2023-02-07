import ActiveLink from "@/component/ActiveLink";
import { AboutContext } from "@/utils/context";
import { TentangKami } from "@/utils/dataInterface";
// import { useAppContext } from "@/utils/context";
import { createContext, useContext, useEffect, useState } from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tentang-kami`)
      .then(res => res.json())
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <>
      <div className="container m-5 p-5">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-3">
            <div
              style={{ backgroundColor: '#ebf4ff', top: '6em' }}
              className="p-4 position-sticky rounded-3 about-menu"
            >
              <h4 className="fw-semibold mb-4">Tentang Kami</h4>
              <div className="list-group list-group-flush">
                <ActiveLink href="/tentang-kami" className="list-group-item list-group-item-action"
                  activeClassName={'active'} aria-current="true">
                  Profil Desa
                </ActiveLink>
                <ActiveLink href="/tentang-kami/visi-misi" activeClassName={'active'} className="list-group-item list-group-item-action">Visi Misi</ActiveLink>
                <ActiveLink href="/tentang-kami/aparatur-desa" activeClassName={'active'} className="list-group-item list-group-item-action">Aparatur Desa</ActiveLink>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <AboutContext.Provider value={data}>
                  {children}
                </AboutContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}