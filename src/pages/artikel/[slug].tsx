/* eslint-disable @next/next/no-img-element */
import Layout from "@/layout";
import ArtikelLayout from "@/layout/artikel";
import Header from "@/layout/header";
import { api } from "@/utils/apiService";
import { ContextProvider, useAppContext } from "@/utils/context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import parse from 'html-react-parser'

export default function DetailArtikel() {
  const { state, commit } = useAppContext();

  function dateFormat(date: string | number | Date | undefined) {
    if (!date) return null;
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + ' ' + month + ' ' + year;
    return output;
  }

  function image(image: string) {
    if (image !== "") {
      return (
        <img alt="image" src={process.env.NEXT_PUBLIC_IMAGE_URL + image ?? ''} className="card-img-top img-berita-xl rounded-3" />
      );
    } else {
      return (
        <img alt="image" width={300} src={'/assets/images/no-image.png'} className="card-img-top img-berita-xl rounded-3" />
      );

    }
  }

  return (
    <>
      <Header title="Detail Artikel" />

      <div className="container mt-5 mb-5 pb-5">
        <div className="row">
          <div>
            {state.tag === "loading" ? <Skeleton height={300} />
              : image(state.data?.detail_artikel?.gambar ?? '')}
          </div>
          <div>
            <p className="mt-3 mb-4 d-flex gap-2">
              <i className="ri-time-line text-sec"></i>
              <span>
                {state.tag === "loading" && <Skeleton width={100} />}
                {state.tag === "success" && dateFormat(state.data?.detail_artikel?.created_at)}
              </span>
              -
              <span>By</span>
              <strong>
                Admin
              </strong>
            </p>
            <h4 className="mb-4 fw-semibold">
              {state.tag === "loading" && <Skeleton width={300} />}
              {state.tag === "success" && state.data?.detail_artikel?.judul}
            </h4>

            <div className="text-justify">
              {state.tag === "loading" && <Skeleton count={10} />}
              {state.tag === "success" && parse(state.data?.detail_artikel?.isi ?? '')}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

DetailArtikel.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <ContextProvider>
      <Layout>
        <ArtikelLayout>
          {page}
        </ArtikelLayout>
      </Layout>
    </ContextProvider>
  )
}