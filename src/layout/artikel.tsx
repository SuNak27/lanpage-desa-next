import ActiveLink from "@/component/ActiveLink";
import { useAppContext } from "@/utils/context";
import { Artikel } from "@/utils/dataInterface";
import { useEffect } from "react";

export default function ArtikelLayout({ children }: { children: React.ReactNode }) {
  const { state, commit } = useAppContext();
  useEffect(() => {
    if (state.data?.artikel || state.data?.kategori) {
      return
    };

    commit({ type: "FETCH" });
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/artikel`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/kategori?limit=10&page=1`),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([res1, res2]) => {
        commit({
          type: "SUCCESS",
          payload: {
            artikel: res1.data,
            kategori: res2.data,
          },
        });
      })
      .catch((err) => {
        commit({
          type: "ERROR",
          payload: err.message,
        });
      });
  }, [])

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

                {state.data?.artikel?.map((item, index) => (
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
                  {state.data?.kategori?.map((item, index) => (
                    <ActiveLink className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index} activeClassName={"active"} href={`/kategori/${item.slug}`}>
                      {item.nama_kategori}
                      {badge(item.artikel?.length ?? 0)}
                    </ActiveLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}