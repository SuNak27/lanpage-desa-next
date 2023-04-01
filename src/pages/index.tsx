/* eslint-disable @next/next/no-img-element */
import { useLayoutContext } from "@/layout/default";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from 'html-react-parser'
import Gambar from "@/component/Image";
import Header from "@/layout/header";
import Link from "next/link";

export default function Home() {
  const { state, dispatch } = useLayoutContext()
  useEffect(() => {
    dispatch({ type: "FETCH" })
  }, [dispatch])

  return (
    <>
      <Header title="Beranda" />
      <section className="news position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div
                  className="card-body"
                >
                  <h5 className="card-title mb-3 py-3">Berita Terbaru</h5>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    className="news-swiper"
                  >
                    {state.tag !== 'success' && (
                      <div className="mb-5">
                        <div className="card-body row mb-4">
                          <div className="col-3">
                            <Skeleton width={250} height={150} />
                          </div>
                          <div className="col-9">
                            <Skeleton width={250} height={20} className={'mb-3'} />
                            <Skeleton width={'100%'} height={20} />
                            <Skeleton width={'100%'} height={20} />
                            <Skeleton width={'100%'} height={20} />
                          </div>
                        </div>
                      </div>
                    )}

                    {state.data.info_desa?.artikel?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="card-body row mb-4">
                          <div className="col-lg-3 text-center">
                            <Gambar image={item.gambar ?? ''} layout="responsive" className="img-fluid mb-3" tag='img' />
                          </div>
                          <div className="col-lg-9">
                            <h5 className="card-title">{item.judul}</h5>
                            <div className="card-text">
                              {parse(item.isi.substring(0, 400))}
                            </div>
                            <Link href={`/artikel/${item.slug}`} className="text-decoration-none">
                              Selengkapnya <i className="bi bi-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="row container-fluid px-5">
        <div className="col-lg-8 my-4 px-0 bg-danger">
          <div className="card">
            <div className="card-header m-0 ">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="w-100 pt-2 m-0">
                  <h4 className="fw-bold">Headline</h4>
                </div>
              </div>
            </div>
            <section className="card-body">
              <div className="row g-0">
                <div className="position-relative col-md-4">
                  <div className="bg-overlay-berita"></div>
                  <img loading="lazy"
                    src={"/assets/images/no-image.png"}
                    className="img-fluid img-berita-lg rounded" alt="Berita" />
                </div>
                <div className="card-body position-relative col-md-6">
                  <div className="btn btn-sm btn-primary">
                    <span className="d-flex gap-2">
                      <i className="bi bi-calendar"></i>
                      {new Date().toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </span>

                  </div>
                  <h5 className="card-title fw-semibold truncate mt-3">
                    <Link href={`/artikel/`} className="text-decoration-none title-artikel text-dark"
                    >{ }</Link>
                  </h5>
                  <div className="card-text truncate-2">
                    {/* {parse(item.isi.substring(0, 150))} */}
                    Lorem ipsum dolor
                  </div>
                  <Link href={`/artikel/`} className="text-decoration-none fw-semibold">
                    Baca selengkapnya
                    <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-geo-alt-fill flex-shrink-0 mx-3 fs-1"></i>
                    <div>
                      <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                      <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 min-h-100 bg-success px-0">
          test
        </div>
      </main >



      <section className="map">
        <div className="p-0 m-0">
          {parse(state.data?.master_data?.map_desa ?? '')}
        </div>
      </section>
    </>
  )
}