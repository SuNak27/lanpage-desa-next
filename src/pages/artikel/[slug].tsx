/* eslint-disable @next/next/no-img-element */
import Layout from "@/layout";
import ArtikelLayout, { useArtikelContext } from "@/layout/artikel";
import Header from "@/layout/header";
import Skeleton from "react-loading-skeleton";
import parse from 'html-react-parser'
import Gambar from "@/component/Image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DetailArtikel() {
  const { state, commit } = useArtikelContext();
  const { query } = useRouter();
  const slug = query.slug as string;

  function dateFormat(date: string | number | Date | undefined) {
    if (!date) return null;
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = day + ' ' + month + ' ' + year;
    return output;
  }

  useEffect(() => {
    if (query.slug) {
      console.log(state, 'state');
      commit({ type: "FETCH_DETAIL", payload: slug });
    }
  }, [commit, query.slug, slug, state, state.tag])

  return (
    <>
      <Header title="Detail Artikel" />

      <div className="container mt-5 mb-5 pb-5">
        <div className="row">
          <div>
            {state.tag === "detail" ? <Skeleton height={300} />
              : <Gambar image={"https://picsum.photos/750/300"} className="w-100 img-berita-xl" type="link" width={750} height={300} />
            }

          </div>
          <div>
            <p className="mt-3 mb-4 d-flex gap-2">
              <i className="ri-time-line text-sec"></i>
              <span>
                {state.tag === "detail" && <Skeleton width={100} />}
                {dateFormat(state.data.detail_artikel?.created_at)}
              </span>
              -
              <span>By</span>
              <strong>
                Admin
              </strong>
            </p>
            <h4 className="mb-4 fw-semibold">
              {state.tag === "detail" && <Skeleton width={300} />}
              {state.data.detail_artikel?.judul}
            </h4>

            <div className="text-justify">
              {state.tag === "detail" && <Skeleton count={10} />}
              {parse(state.data.detail_artikel?.isi ?? "")}
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