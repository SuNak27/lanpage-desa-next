import Layout from "@/layout"
import AboutLayout from "@/layout/about"
import Header from "@/layout/header"
import { Context } from "@/utils/context"
import Head from "next/head"
import { useContext, useEffect } from "react"

export default function About() {
  return (
    <>
      <Header title="Tentang Kami" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Profil Desa</h4>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
              quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AboutLayout>
        {page}
      </AboutLayout>
    </Layout>
  )
}