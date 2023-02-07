import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "@/utils/context";
import ActiveLink from "@/component/ActiveLink";

type PathArray = {
  breadcrumb: string;
  href: string;
}[];

export default function Hero() {
  const image = [
    "/assets/images/main-bg.jpg",
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
  ];
  const router = useRouter();
  const { state } = useAppContext();
  const [breadcrumbs, setBreadcrumbs] = useState<PathArray>();
  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray: PathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);

    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  const convertBreadcrumb = (string: string) => {
    return string
      .replace(/-/g, ' ')
      .replace(/oe/g, 'ö')
      .replace(/ae/g, 'ä')
      .replace(/ue/g, 'ü')
      .replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };

  if (router.pathname === "/") {
    return (
      <section className="hero">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {image.map((item, index) => (
              <div
                className="carousel-item active"
                data-bs-interval="2000"
                key={index}
              >
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
                    <h1 className="fw-bold">Sistem Informasi Desa</h1>
                    <h5 className="hero-text mb-3">
                      Karanganyar, Paiton, Probolinggo
                    </h5>
                    <a href="#" className="btn btn-primary">
                      Selengkapnya
                    </a>

                    <div className="w-100 h-100 hero-jumlah mt-5">
                      <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={4}
                        autoplay={{
                          delay: 5500,
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
      </section>
    );
  } else {
    return (
      <section className="hero main-hero">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {image.map((item, index) => (
              <div
                className="carousel-item active"
                data-bs-interval="2000"
                key={index}
              >
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
                    <h3 className="fw-bold mt-5">
                      {state?.title ? state?.title : "Sistem Informasi Desa"}
                    </h3>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <ActiveLink activeClassName={'active'} href="/">Home</ActiveLink>
                        </li>
                        {breadcrumbs.map((item, index) => (
                          <li className={"breadcrumb-item " + (router.pathname === item.href ? 'active' : '')} key={index}>
                            <ActiveLink activeClassName={'active'} href={
                              item.href
                            }>
                              {convertBreadcrumb(item.breadcrumb)}
                            </ActiveLink>
                          </li>
                        ))}

                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
