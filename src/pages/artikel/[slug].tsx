/* eslint-disable @next/next/no-img-element */
import Layout from "@/layout";
import ArtikelLayout, { useArtikelContext } from "@/layout/artikel";
import Header from "@/layout/header";
import { api } from "@/utils/apiService";
import { ContextProvider, useAppContext } from "@/utils/context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import parse from 'html-react-parser'
import Gambar from "@/component/Image";

export default function DetailArtikel() {
  const { state } = useArtikelContext();

  function dateFormat(date: string | number | Date | undefined) {
    if (!date) return null;
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + ' ' + month + ' ' + year;
    return output;
  }

  return (
    <>
      <Header title="Detail Artikel" />

      <div className="container mt-5 mb-5 pb-5">
        <div className="row">
          <div>
            {state.tag === "loading" ? <Skeleton height={300} />
              : <Gambar image={""} />}

          </div>
          <div>
            <p className="mt-3 mb-4 d-flex gap-2">
              <i className="ri-time-line text-sec"></i>
              <span>
                {state.tag === "loading" && <Skeleton width={100} />}
              </span>
              -
              <span>By</span>
              <strong>
                Admin
              </strong>
            </p>
            <h4 className="mb-4 fw-semibold">
              {state.tag === "loading" && <Skeleton width={300} />}
            </h4>

            <div className="text-justify">
              {state.tag === "loading" && <Skeleton count={10} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

DetailArtikel.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <ArtikelLayout>
      {page}
    </ArtikelLayout>
  )
}