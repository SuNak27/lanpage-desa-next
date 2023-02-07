import { Context } from "@/utils/context";
import Head from "next/head";
import { useContext, useEffect } from "react";

export default function Header(props: { title: string }) {
  const { title, setTitle } = useContext(Context);

  useEffect(() => {
    setTitle(props.title);
  }, [])
  return (
    <Head>
      <title>
        {title} | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name="description" content="Aplikasi Sistem Informasi Desa" />
      <link rel="icon" href="/assets/images/logo.png" />
    </Head>
  )
}
