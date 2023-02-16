import ActiveLink from "@/component/ActiveLink";
import { useEffect } from "react";
import { useLayoutContext } from "../default";
import { StatistikProvider } from "./StatistikScreen.machine";

export default function StatistikLayout({ children }: { children: React.ReactNode }) {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: "FETCH" })
  }, [dispatch])
  return (
    <>
      <div className="container p-5">
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
                <StatistikProvider>
                  {children}
                </StatistikProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}