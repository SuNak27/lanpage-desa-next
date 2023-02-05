import Image from 'next/image'
import { berita_baru, layanan } from '@/dummy/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

export default function Home() {
  const data = berita_baru;
  const dataLayanan = layanan;
  function image(image) {
    console.log(image);
    if (image !== '') {
      return (
        <img
          src={image}
          className="d-block h-100 w-100 img-news rounded-4"
        />
      )
    } else {
      return (
        <div>Terst</div>
      )
    }
  }
  return (
    <>
      <section className='news position-relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='row'>
                  <div className='col-lg-7 col-12'>
                    <div className='card-body' style={{
                      height: "300px",
                    }}>
                      <h5 className='card-title'>Berita Terbaru</h5>
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
                        {data?.map((item, index) => (
                          <SwiperSlide key={index} className="mb-5">
                            <div className="card">
                              <div className="card-body row">
                                <div className="col-3">
                                  {image(item.image)}
                                </div>
                                <div className="col-9">
                                  <h5 className="card-title">{item.title}</h5>
                                  <p className="card-text">{item.content}</p>
                                  <a href="#" className="btn btn-primary">Selengkapnya</a>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className='col-lg-5 col-12'>
                    <div className='card-body'>
                      <h5 className='card-title'>Alamat Kantor Desa</h5>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7499959945194!2d113.49584031435582!3d-7.709953678511709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd703f599489a1b%3A0xf34d3ceb3f9ddf2c!2sUniversitas%20Nurul%20Jadid!5e0!3m2!1sid!2sid!4v1675610229126!5m2!1sid!2sid" style={{ border: 0, height: '250px' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-100' ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='layanan'>
        <div className="container py-6">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="text-center w-100">
              <h1 className="fw-bold">Informasi Pelayanan</h1>
              <p className="fs-5">Layanan yang disediakan oleh desa</p>
            </div>
            {/* <a href="#" className="btn btn-primary">Selengkapnya</a>  */}
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            loop={true}
            space-between="30"
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
            {dataLayanan?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-3 card-layanan">
                  <i className={`fs-5 me-2 text-primary d-inline ` + item.icon}></i>
                  <h5 className="fw-bold d-inline-block mb-3">{item.nama_layanan}</h5>
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
        </div >
      </section >
    </>
  )
}
