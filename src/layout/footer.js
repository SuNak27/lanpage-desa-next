import Image from "next/image";

export default function Footer() {
  return (
    <section class="footer-wrapper text-white pt-5">
      <div class="container">
        <footer>
          <div class="row pt-0">
            <div class="col-lg-4 mb-4 mb-lg-0">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                class="logo"
                width={50}
                height={50}
              />
              <div class="mt-3">
                <p class="fw-bold m-0">
                  Desa Website
                </p>
                <a class="fw-bold m-0">
                  https://desa-website.com
                </a>
              </div>
              <p class="d-flex pt-3">
                <i class="ri-facebook-circle-fill ri-2x icon-socmed"></i>
                <i class="ri-instagram-fill ri-2x icon-socmed"></i>
                <i class="ri-twitter-fill ri-2x icon-socmed"></i>
              </p>
            </div>
            <div class="col-lg-4 ps-lg-5 mb-4 mb-lg-0">
              <h5 class="fw-bold">Link Terkait</h5>
              <ul class="list-unstyled">
                <li>
                  <a
                    href="/tentang-kami"
                    class="text-white link-terkait text-decoration-none"
                  >Tentang Kami</a
                  >
                </li>
                <li>
                  <a
                    href="/berita"
                    class="text-white link-terkait text-decoration-none"
                  >Berita</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-4 ps-lg-5 mb-0 mb-lg-0">
              <h5 class="fw-bold">Jam Pelayanan</h5>
              <ul class="list-unstyled">
                <li class="d-flex align-items-baseline">
                  <p class="mb-0">Senin - Jumat</p>
                </li>
                <li class="d-flex align-items-baseline">
                  <p>08.00 - 16.00 WIB</p>
                </li>
                <li class="d-flex align-items-baseline">
                  <p class="mb-0">Hubungi Kami:</p>
                </li>
                <li class="d-flex align-items-baseline">
                  <span
                  ><i class="ri-whatsapp-fill"></i>
                    08123456789
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="divider-footer"></div>
          <div class="text-center pt-4 pb-4">
            <p class="mb-0">
              &copy;
              <span class="current-year"></span>
              Website
            </p>
          </div>
        </footer>
      </div>
    </section>
  )
}