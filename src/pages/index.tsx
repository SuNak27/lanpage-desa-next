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

      <section className="layanan">
        <div className="container py-6">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="text-center w-100">
              <h2 className="fw-bold">Informasi Pelayanan</h2>
              <p className="">Layanan yang disediakan oleh desa</p>
            </div>
            {/* <a href="#" className="btn btn-primary">Selengkapnya</a>  */}
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="p-5"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {state.tag !== 'success' && (
              [1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <div className="p-3 card-layanan">
                    <Skeleton width={25} height={25} className={'mb-4'} inline />
                    <Skeleton width={'100%'} height={20} count={3} />
                  </div>
                </SwiperSlide>
              ))
            )}
            {state.data?.info_desa?.layanan?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-3 card-layanan">
                  <i
                    className={`fs-5 me-2 text-primary d-inline ` + item.icon}
                  ></i>
                  <h5 className="fw-bold d-inline-block mb-3">
                    {item.nama_layanan}
                  </h5>
                  <p className="text-muted">{item.deskripsi}</p>
                  <a
                    href="/layanan/biodata-penduduk.html"
                    className="d-flex gap-2 text-decoration-none"
                  >
                    <span>Selengkapnya</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="landing-curve">
        <svg
          viewBox="15 -1 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <section className="aparat text-white">
        <div className="container py-6">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="text-center w-100">
              <h2 className="fw-bold">Aparatur Desa</h2>
            </div>
            {/* <a href="#" className="btn btn-primary">Selengkapnya</a>  */}
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            loop={false}
            space-between="30"
            autoplay={{
              delay: 1000,
            }}
            className="p-5"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {state.tag !== 'success' && (
              [1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <div className="text-center text-white">
                    <Skeleton width={200} height={200} circle className="mb-3" />
                    <Skeleton width={'40%'} height={20} count={2} />
                  </div>
                </SwiperSlide>
              ))
            )}
            {state.data?.info_desa?.desa_struktural?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center text-white">
                  <div
                    className="octagon mx-auto mb-3 d-flex bg-success"
                    style={{ width: 200, height: 200 }}
                  >
                    {/* <img width={300} height={300} alt="foto" src={'https://picsum.photos/200/200'} /> */}
                    <Gambar
                      image="https://picsum.photos/300/300"
                      height={300}
                      width={300}
                      className="img-fluid"
                      type="link"
                      tag="img"
                    />
                  </div>
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-white text-decoration-none fw-bold text-hover-primary fs-5"
                    >
                      {item.nama_penduduk}
                    </a>
                    <div className="text-muted fs-6 fw-semibold mt-1">
                      {item.nama_jabatan}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="landing-curve">
        <svg
          viewBox="15 12 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <section className="layanan">
        <div className="container py-6">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 mb-lg-0 mb-5">
              <Gambar
                image="https://picsum.photos/500/300"
                height={300}
                width={500}
                className="img-fluid rounded-5"
                type="link"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="fw-bold">Survey Kepuasan Masyarakat</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl eget ultricies tincidunt, nisl elit
              </p>
              <a className="btn btn-primary">Isi Survey</a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container py-6">
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-5">
              <p className="fs-5">FAQ</p>
              <h2 className="fw-bold mb-4">
                Bagaimana kami dapat membantu Anda?
              </h2>
              {/* <a href="#" className="btn btn-primary">Selengkapnya</a>  */}
            </div>
            <div className="col-lg-8">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {state.tag !== 'success' && (
                  [1, 2, 3, 4, 5].map((item) => (
                    <div className="accordion-item" key={item}>
                      <h2 className="accordion-header" id={'faq_' + item}>
                        <button className={`accordion-button ${item != 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#item_${item}`} aria-expanded={item == 0} aria-controls={`item_${item}`}>
                          <Skeleton width={400} height={20} />
                        </button>
                      </h2>
                      <div id={`item_${item}`} className={`accordion-collapse collapse ${item == 0 ? 'show' : ''}`} aria-labelledby={`item_${item}`}>
                        <div className="accordion-body">
                          <Skeleton width={'100%'} height={20} count={3} />
                        </div>
                      </div>
                    </div>
                  ))
                )}
                {state.data?.info_desa?.faq?.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={'faq_' + index}>
                      <button className={`accordion-button ${index != 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#item_${index}`} aria-expanded={index == 0} aria-controls={`item_${index}`}>
                        {item.pertanyaan}
                      </button>
                    </h2>
                    <div id={`item_${index}`} className={`accordion-collapse collapse ${index == 0 ? 'show' : ''}`} aria-labelledby={`item_${index}`}>
                      <div className="accordion-body">
                        {item.jawaban}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="p-0 m-0">
          {parse(state.data?.master_data?.map_desa ?? '')}
        </div>
      </section>
    </>
  )
}