import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {
  const image = [
    '/assets/images/main-bg.jpg',
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
  ]
  return (
    <section className="hero">
      <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {image.map((item, index) => (
            <div className="carousel-item active" data-bs-interval="2000" key={index}>
              <Image
                src={item}
                alt="Logo"
                width={1366}
                height={768}
                priority={false}
                className="d-block h-100 w-100 position-absolute"
              />
              <div className="bg-overlay"></div>
              <div className="hero-caption position-relative">
                <div className="container">
                  <h1 className="hero-title">Selamat Datang di Website</h1>
                  <h5 className="hero-text">
                    Karanganyar, Paiton, Probolinggo
                  </h5>
                  <a href="#" className="btn btn-primary">
                    Selengkapnya
                  </a>

                  <div className="w-100 h-100 hero-jumlah mt-6">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={4}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      className="hero-swiper"
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        520: {
                          slidesPerView: 2,
                        },
                        900: {
                          slidesPerView: 4,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="card rounded-lg">
                          <div className="card-body text-center">
                            <h5 className="card-title">Penduduk</h5>
                            <p className="card-text">2.000.000</p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card rounded-lg">
                          <div className="card-body text-center">
                            <h5 className="card-title">Penduduk</h5>
                            <p className="card-text">2.000.000</p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card rounded-lg">
                          <div className="card-body text-center">
                            <h5 className="card-title">Penduduk</h5>
                            <p className="card-text">2.000.000</p>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="card rounded-lg">
                          <div className="card-body text-center">
                            <h5 className="card-title">Penduduk</h5>
                            <p className="card-text">2.000.000</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}