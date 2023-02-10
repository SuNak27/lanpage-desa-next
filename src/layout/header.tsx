import { useAppContext } from "@/utils/context";
import Head from "next/head";
import { useContext, useEffect } from "react";

type Props = {
  title?: string;
};

export default function Header(props: Props) {
  const { state, commit } = useAppContext();

  useEffect(() => {
    commit({ type: "CHANGE_TITLE", payload: props.title ?? "Beranda" });
  }, [props.title]);

  return (
    <Head>
      <title>
        {state.title} | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name="description" content="Aplikasi Sistem Informasi Desa" />
      <meta name="keywords" content="Sistem Informasi Desa" />
      <meta name="author" content="Alfad Sabil Haq" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/assets/images/logo.png" />
    </Head>
  )
}
