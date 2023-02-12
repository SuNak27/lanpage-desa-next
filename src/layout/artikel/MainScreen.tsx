import Gambar from "@/component/Image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { useLayoutContext } from "../default";
import SideArtikelLayout from "./SideScreen";

export default function MainStatistikLayout({ children }: { children: React.ReactNode }) {
  const Layout = useLayoutContext();
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            {children}
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '6em' }}>
              {/* <form className="d-lg-flex d-none" role="search" action="/berita">
                <input className="form-control me-2" type="search" placeholder="Cari Berita...." aria-label="Search" name="search" />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form> */}

              <div className="mt-4">
                <h3 className="fw-bolder my-4">Berita Terbaru</h3>
                {Layout.state.tag === 'loading' && (
                  [1, 2, 3].map((item, index) => (
                    <div className="d-flex my-3" key={index}>
                      <div style={{ width: '30%' }}>
                        <Skeleton width={100} height={70} />
                      </div>
                      <div className="p-2" style={{ width: '70%' }}>
                        <Skeleton width={100} height={10} />
                        <Skeleton width={200} height={10} />
                        <Skeleton width={200} height={10} />
                      </div>
                    </div>
                  ))
                )}
                {Layout.state.data.info_desa?.artikel?.map((item, index) => (
                  <div className="d-flex my-3" key={index}>
                    <div style={{ width: '30%' }}>
                      <Gambar
                        image={item.gambar ?? ''}
                        width={100}
                        height={70}
                        className="rounded"
                      />
                    </div>
                    <Link href={`/artikel/${item.slug}`} className="p-2 text-decoration-none" style={{ width: '70%', color: 'black' }}>
                      <h3 className="fs-6 fw-semibold">
                        {item.judul.length > 25 ? item.judul.substring(0, 25) + '...' : item.judul}
                      </h3>
                      <p style={{ fontSize: '13px' }}>
                        <span className="d-flex gap-1"><i className="bi bi-calendar"></i>
                          {new Date(item.created_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              <SideArtikelLayout />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}