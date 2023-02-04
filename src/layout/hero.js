import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [photo, setPhoto] = useState([]);
  const photos = "https://api.unsplash.com/photos/?client_id=" + process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  console.log(photo);

  useEffect(() => {
    fetch(photos)
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data);
      });
  }, []);

  return (
    // <section className="hero">
    //   <Image
    //     src="/assets/images/main-bg.jpg"
    //     alt="Logo"
    //     width="1000"
    //     height="1000"
    //     priority={false}
    //     className="d-block h-100 w-100 position-absolute"
    //   />

    //   <div className="bg-overlay"></div>

    //   <div className="container position-relative">
    //     <div className="row">
    //       <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
    //         <div className="hero-content">
    //           <h1 className="hero-title">Selamat Datang di Website Desa</h1>
    //           <p className="hero-text">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    //             voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
    //             quidem quas quos nemo voluptatum. Quisquam, quae. Quisquam
    //             voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
    //             quidem quas quos nemo voluptatum. Quisquam, quae.
    //           </p>
    //           <a href="#" className="btn btn-primary">
    //             Selengkapnya
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="hero">
      <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {photo.map((photo) => {
            return (
              <div className="carousel-item active" data-bs-interval="2000" key={photo.id}>
                <Image
                  src={photo.urls.full}
                  alt="Logo"
                  width="auto"
                  height="auto"
                  priority={false}
                  className="d-block h-100 w-100 position-absolute"
                />
                <div className="bg-overlay"></div>
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
                      <div className="hero-content">
                        <h1 className="hero-title">Selamat Datang di Website Desa</h1>
                        <p className="hero-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
                          quidem quas quos nemo voluptatum. Quisquam, quae. Quisquam
                          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
                          quidem quas quos nemo voluptatum. Quisquam, quae.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}