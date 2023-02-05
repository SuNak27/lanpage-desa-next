import Image from 'next/image'
import { berita_baru } from '@/dummy/data'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  const data = berita_baru;
  return (
    <>
      <section className='news position-relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='row'>
                  <div className='col-md-7'>
                    <div className='card-body'>
                      <h5 className='card-title'>Berita Terbaru</h5>
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                          delay: 1500,
                          disableOnInteraction: false,
                        }}
                        className="news-swiper"
                      >
                        <SwiperSlide>
                          Tes 1
                        </SwiperSlide>
                        <SwiperSlide>
                          Tes 2
                        </SwiperSlide>
                        <SwiperSlide>
                          Tes 3
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div className='col-md-5 border-start'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
