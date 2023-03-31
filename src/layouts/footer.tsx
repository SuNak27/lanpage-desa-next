/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function Footer() {
  return (
    <section className="footer-wrapper text-white pt-5">
      <div className="container">
        <footer>
          <div className="row pt-0">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                className="logo"
                width={50}
                height={50}
              />
              <div className="mt-3">
                <p className="fw-bold m-0">
                  Desa Website
                </p>
                <a className="fw-bold m-0">
                  https://desa-website.com
                </a>
              </div>
              <p className="d-flex pt-3">
                <i className="ri-facebook-circle-fill ri-2x icon-socmed"></i>
                <i className="ri-instagram-fill ri-2x icon-socmed"></i>
                <i className="ri-twitter-fill ri-2x icon-socmed"></i>
              </p>
            </div>
            <div className="col-lg-4 ps-lg-5 mb-4 mb-lg-0">
              <h5 className="fw-bold">Link Terkait</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/tentang-kami"
                    className="text-white link-terkait text-decoration-none"
                  >Tentang Kami</a
                  >
                </li>
                <li>
                  <a
                    href="/berita"
                    className="text-white link-terkait text-decoration-none"
                  >Berita</a
                  >
                </li>
              </ul>
            </div>
            <div className="col-lg-4 ps-lg-5 mb-0 mb-lg-0">
              <h5 className="fw-bold">Jam Pelayanan</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-baseline">
                  <p className="mb-0">Senin - Jumat</p>
                </li>
                <li className="d-flex align-items-baseline">
                  <p>08.00 - 16.00 WIB</p>
                </li>
                <li className="d-flex align-items-baseline">
                  <p className="mb-0">Hubungi Kami:</p>
                </li>
                <li className="d-flex align-items-baseline">
                  <span
                  ><i className="ri-whatsapp-fill"></i>
                    08123456789
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider-footer"></div>
          <div className="text-center pt-4 pb-4">
            <p className="mb-0">
              &copy;
              <span className="current-year"></span>
              Website
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}