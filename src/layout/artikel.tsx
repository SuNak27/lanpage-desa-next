/* eslint-disable @next/next/no-img-element */
import ActiveLink from "@/component/ActiveLink";
import { api } from "@/utils/apiService";
import { useAppContext } from "@/utils/context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export default function ArtikelLayout({ children }: { children: React.ReactNode }) {
  const { state, commit } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    if (router.query.slug) {
      switch (state.tag) {
        case "loading":
          api.get("/artikel/" + router.query.slug).then((res) => {
            commit({
              type: "SUCCESS",
              payload: {
                detail_artikel: res.data,
              }
            })
          }).catch((err) => {
            commit({
              type: "ERROR",
              payload: err.message || "Terjadi kesalahan saat memuat data"
            })
          })
          break;
        default:
          break;
      }
    }
    if (state.data?.artikel || state.data?.kategori) {
      return
    };
    commit({ type: "FETCH" });
    switch (state.tag) {
      case "loading":
        Promise.all([
          api.get("/artikel"),
          api.get("/kategori")
        ])
          .then(([artikel, kategori]) => {
            commit({
              type: "SUCCESS",
              payload: {
                artikel: artikel.data,
                kategori: kategori.data,
              }
            })
          })
          .catch((err) => {
            commit({
              type: "ERROR",
              payload: err.message || "Terjadi kesalahan saat memuat data"
            })
          })
        break;
      default:
        break;
    }
  }, [commit, router.query.slug, state.data?.artikel, state.data?.detail_artikel, state.data?.kategori, state.tag])

  function badge(props: number) {
    if (props > 0) {
      return (
        <span className="badge bg-primary rounded-pill">{props}</span>
      );
    } else {
      return (
        <span className="badge bg-primary rounded-pill d-none">{props}</span>
      );
    }
  }

  function image(image: string) {
    if (image !== "") {
      return (
        <img alt="image" src={process.env.NEXT_PUBLIC_IMAGE_URL + image ?? ''} className="img-berita-sm rounded-4" />
      );
    } else {
      return (
        <img alt="image" width={300} height={150} src={'/assets/images/no-image.png'} className="img-berita-sm rounded-4" />
      );

    }
  }
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            {children}
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '6em' }}>
              <form className="d-lg-flex d-none" role="search" action="/berita">
                <input className="form-control me-2" type="search" placeholder="Cari Berita...." aria-label="Search" name="search" />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>

              <div className="mt-4">
                <h3 className="fw-bolder my-4">Berita Terbaru</h3>

                {state.tag !== 'success' && (
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
                {state.data?.info_desa?.artikel?.map((item, index) => (
                  <div className="d-flex my-3" key={index}>
                    <div style={{ width: '30%' }}>
                      {image(item.gambar ?? '')}
                    </div>
                    <a href="" className="p-2 text-decoration-none" style={{ width: '70%', color: 'black' }}>
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
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="fw-bolder my-4">Kategori</h3>

                <ul className="list-group list-group-flush list-kategori">
                  <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center active">
                    Semua
                    <span className="badge bg-primary rounded-pill">{state.data?.artikel?.length}</span>
                  </button>
                  {state.tag !== 'success' && (
                    [1, 2, 3, 4, 5].map((item, index) => (
                      <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index}>
                        <Skeleton width={100} height={10} />
                        <Skeleton width={50} height={10} />
                      </li>
                    ))
                  )}
                  {state.data?.kategori?.map((item, index) => (
                    <ActiveLink className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index} activeClassName={"active"} href={`/kategori/${item.slug}`}>
                      {item.nama_kategori}
                      {badge(item.artikel?.length ?? 0)}
                    </ActiveLink>
                  ))}
                  <ActiveLink className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" activeClassName={"active"} href={`/kategori`}
                  >
                    Lihat Semua Kategori
                    <i className="bi bi-arrow-right"></i>
                  </ActiveLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}