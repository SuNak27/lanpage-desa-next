import ActiveLink from "@/component/ActiveLink";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 300) {
        navbar.classList.add("shadow");
        navbar.classList.add("navbar-show");
        navbar.classList.replace("navbar-dark", "navbar-light");
      } else {
        navbar.classList.remove("navbar-show");
        navbar.classList.remove("shadow");
        navbar.classList.replace("navbar-light", "navbar-dark");
      }
    });
  }, []);
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light w-100"
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item">
              <ActiveLink activeClassName="active" className="nav-link" href="/">
                Beranda
              </ActiveLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
