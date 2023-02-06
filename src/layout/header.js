import { Context } from "@/utils/context";
import Head from "next/head";
import { useContext, useEffect } from "react";

export default function Header(props) {
  const { setTitle } = useContext(Context)

  useEffect(() => {
    setTitle(props.title)
  }, [])
  return (
    <Head>
      <title>
        {props.title}
      </title>
      <meta name="description" content="Aplikasi Sistem Informasi Desa" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
