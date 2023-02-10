import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Header from "@/layout/header";
import { useAppContext } from "@/utils/context";
import parse from 'html-react-parser'
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const { state, commit } = useAppContext();
  function image(image: string) {
    if (image !== "") {
      return (
        <img alt="image" src={process.env.NEXT_PUBLIC_IMAGE_URL + image ?? ''} className="img-news rounded-4" style={{
          objectFit: 'cover',
          width: '100%',
          height: '150px'
        }} />
      );
    } else {
      return (
        <img alt="image" width={300} height={150} src={'/assets/images/no-image.png'} className="img-news rounded-4" style={{
          objectFit: 'cover',
          width: '100%',
          height: '150px'
        }} />
      );
    }
  }

  useEffect(() => {
    if (state.data?.info_desa || state.data?.master_data) {
      return
    };
    commit({ type: "FETCH" });

  }, [])
  return (
    <>
      <Header title={'Beranda'}></Header>
      <section className="news position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div
                  className="card-body"
                  style={{
                    maxHeight: "300px",
                  }}
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
                    {state.tag === 'loading' && (
                      <SwiperSlide className="mb-5">
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
                      </SwiperSlide>
                    )}
                    {state.data?.info_desa?.artikel?.map((item, index) => (
                      <SwiperSlide key={index} className="mb-5">
                        <div className="card-body row mb-4">
                          <div className="col-3">{image(item.gambar ?? '')}</div>
                          <div className="col-9">
                            <h5 className="card-title">{item.judul}</h5>
                            <div className="card-text">
                              {/* {item.isi.substring(0, 400)}... */}
                              {parse(item.isi.substring(0, 400))}
                            </div>
                            <a href="#" className="text-decoration-none">
                              Selengkapnya <i className="bi bi-arrow-right"></i>
                            </a>
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
            slidesPerView={3}
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
            {state.tag === 'loading' && (
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
            {state.tag === 'loading' && (
              [1, 2].map((item) => (
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
                    {/* <img width={300} height={300} alt="foto" src={item.} /> */}
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
              <Image
                src="https://picsum.photos/500/300"
                alt="Online Articles"
                width={500}
                height={300}
                className="img-fluid rounded-5"
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
                {state.tag === 'loading' && (
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
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7499959945194!2d113.4958403143558!3d-7.709953678511709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd703f599489a1b%3A0xf34d3ceb3f9ddf2c!2sUniversitas%20Nurul%20Jadid!5e0!3m2!1sid!2sid!4v1675631267104!5m2!1sid!2sid" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

          {parse(state.data?.master_data?.map_desa ?? '')}
        </div>
      </section>
    </>
  );
}
