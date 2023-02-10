import Layout from "@/layout"
import ArtikelLayout from "@/layout/artikel"
import Header from "@/layout/header"
import StatistikLayout from "@/layout/statistik";
import { ContextProvider, useAppContext } from "@/utils/context"
import parse from 'html-react-parser';

export default function Artikel() {
  const { state } = useAppContext()
  return (
    <>
      <Header title="Artikel" />
      <div className="p-4 rounded-3">
        <div className="row g-4 overflow-hidden mb-5">
          {state.data?.artikel?.map((item, index) => (
            <div className="col-12" key={index}>
              <div className="card overflow-hidden w-100 shadow border-0">
                <div className="row g-0">
                  <div className="position-relative col-md-4">
                    <div className="bg-overlay-berita"></div>
                    <img loading="lazy"
                      src={item.gambar ? process.env.NEXT_PUBLIC_IMAGE_URL + item.gambar : "/assets/images/no-image.png"}
                      className="img-fluid img-berita-lg" alt="Berita" />
                  </div>
                  <div className="card-body position-relative col-md-6">
                    <h6 className="btn btn-sm btn-primary">
                      <span className="d-flex gap-2">
                        <i className="bi bi-calendar"></i>
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span>
                    </h6>
                    <h5 className="card-title fw-semibold truncate mt-3">
                      <a href="" className="text-decoration-none text-dark">{item.judul}</a>
                    </h5>
                    <span className="card-text truncate-2">
                      {/* {parse(item.isi)} */}
                      {parse(item.isi.substring(0, 150))}
                    </span>
                    <a href="/berita/" className="text-decoration-none fw-semibold">Baca selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

Artikel.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <ContextProvider>
      <Layout>
        <ArtikelLayout>
          {page}
        </ArtikelLayout>
      </Layout>
    </ContextProvider>
  )
}