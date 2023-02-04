import ActiveLink from "@/component/ActiveLink";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-danger");
      } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-danger");
      }
    });
  }, []);
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark position-fixed w-100 top-0"
      style={{
        zIndex: 50,
      }}
    >
      <div className="container">
        <Link className="navbar-brand" href="/about">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="logo"
          />
          <span className="fw-bold ms-3">Lanpage Desa</span>
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
