import ActiveLink from "@/component/ActiveLink";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar: HTMLElement | null = document.getElementById("navbar");
      if (window.scrollY > 300) {
        navbar?.classList.add("shadow");
        navbar?.classList.add("navbar-show");
        navbar?.classList.replace("navbar-dark", "navbar-light");
      } else {
        navbar?.classList.remove("navbar-show");
        navbar?.classList.remove("shadow");
        navbar?.classList.replace("navbar-light", "navbar-dark");
      }
    });
  }, []);
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark w-100"
      style={{
        zIndex: 9999,
      }}
    >
      <div className="container">
        <Link className="navbar-brand" href="/about">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="logo"
          />
          <span className="ms-3">Desa Karanganyar</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="svg-icon svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"></path>
            <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"></path>
          </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item">
              <ActiveLink activeClassName="active" className="nav-link" href="/">
                Beranda
              </ActiveLink>
            </li>
            <li className="nav-item dropdown">
              <ActiveLink activeClassName="active" exactactiveclassname='active' className="nav-link dropdown-toggle" aria-expanded="false" href="/tentang-kami" data-bs-toggle="dropdown">
                Tentang Kami
              </ActiveLink>
              <ul className="dropdown-menu fade-up">
                <li>
                  <ActiveLink activeClassName="active" className="dropdown-item" href="/tentang-kami">
                    Tentang Kami
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activeClassName="active" className="dropdown-item" href="/tentang-kami/visi-misi">
                    Visi Misi
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activeClassName="active" className="dropdown-item" href="/tentang-kami/aparatur-desa">
                    Aparatur Desa
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <ActiveLink activeClassName="active" exactactiveclassname='active' className="nav-link dropdown-toggle" aria-expanded="false" href="/statistik" data-bs-toggle="dropdown">
                Statistik
              </ActiveLink>
              <ul className="dropdown-menu fade-up">
                <li>
                  <ActiveLink activeClassName="active" className="dropdown-item" href="/statistik">
                    Umur
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink activeClassName="active" className="dropdown-item" href="/statistik/agama">
                    Agama
                  </ActiveLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <ActiveLink activeClassName="active" exactactiveclassname="active" className="nav-link" href="/artikel">
                Artikel
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
