import ActiveLink from "@/component/ActiveLink";
import { useEffect } from "react";
import { useLayoutContext } from "./../default";
import { AboutProvider } from "./AboutScreen.machine";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: "FETCH" })
  }, [dispatch])
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
                <AboutProvider>
                  <main>{children}</main>
                </AboutProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}