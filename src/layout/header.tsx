import { useAppContext } from "@/utils/context";
import Head from "next/head";
import { useEffect } from "react";

export default function Header(props: { title: string }) {
  const { state, commit } = useAppContext();

  useEffect(() => {
    commit({ type: "CHANGE_TITLE", payload: props.title });
  }, [])
  return (
    <Head>
      <title>
        {state.title} | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name="description" content="Aplikasi Sistem Informasi Desa" />
      <link rel="icon" href="/assets/images/logo.png" />
    </Head>
  )
}
