/* eslint-disable @next/next/no-img-element */
import Pagination from "@/component/Pagination";
import ArtikelLayout, { useArtikelContext } from "@/layout/artikel"
import Header from "@/layout/header"
import parse from 'html-react-parser';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export default function Artikel() {
  const { state, commit } = useArtikelContext()
  const router = useRouter()

  function onClickNextPage() {
    commit({ type: "NEXT_PAGE" })
  }

  function onClickPrevPage() {
    commit({ type: "PREV_PAGE" })
  }

  useEffect(() => {
    commit({ type: "FETCH" })
  }, [commit, router.query.kategori])
  return (
    <>
      <Header title="Artikel" />
      <div className="p-4 rounded-3">
        <div className="row g-4 overflow-hidden mb-5">
          {state.tag !== 'success' && (
            [1, 2, 3, 4, 5].map((item, index) => (
              <div className="col-12" key={index}>
                <div className="card overflow-hidden w-100 shadow border-0">
                  <div className="row g-0">
                    <div className="position-relative col-md-4">
                      <Skeleton height={200} />
                    </div>
                    <div className="card-body position-relative col-md-6">
                      <Skeleton height={20} width={100} />
                      <h5 className="card-title fw-semibold truncate mt-3">
                        <Skeleton height={20} width={200} />
                      </h5>
                      <p className="card-text">
                        <Skeleton height={20} count={3} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {state.data?.artikel.data.map((item, index) => (
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
                    <div className="btn btn-sm btn-primary">
                      <span className="d-flex gap-2">
                        <i className="bi bi-calendar"></i>
                        {new Date(item.created_at).toLocaleDateString("id-ID", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span>

                    </div>
                    <h5 className="card-title fw-semibold truncate mt-3">
                      <Link href={`/artikel/${item.slug}`} className="text-decoration-none title-artikel text-dark"
                      >{item.judul}</Link>
                    </h5>
                    <div className="card-text truncate-2">
                      {parse(item.isi.substring(0, 150))}
                    </div>
                    <Link href={`/artikel/${item.slug}`} className="text-decoration-none fw-semibold">
                      Baca selengkapnya
                      <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12">
            <div className="d-flex justify-content-center">
              <Pagination page={state.data.artikel.page} total_pages={state.data.artikel.total_pages} onClickNext={onClickNextPage} onClickPrev={onClickPrevPage} onClickPage={(page) => commit({ type: "SET_PAGE", payload: page })} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Artikel.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <ArtikelLayout>
      {page}
    </ArtikelLayout>
  )
}