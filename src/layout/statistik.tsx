import ActiveLink from "@/component/ActiveLink";
import { StatistikContext } from "@/utils/context";
import { useEffect, useState } from "react";

export default function StatistikLayout({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/statistik`)
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
              <h4 className="fw-semibold mb-4">Statistik</h4>
              <div className="list-group list-group-flush">
                <ActiveLink href="/statistik" className="list-group-item list-group-item-action"
                  activeClassName={'active'} aria-current="true">
                  Statistik Rentang Umur
                </ActiveLink>
                <ActiveLink href="/statistik/agama" activeClassName={'active'} className="list-group-item list-group-item-action">
                  Agama
                </ActiveLink>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <StatistikContext.Provider value={data}>
                  {children}
                </StatistikContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}