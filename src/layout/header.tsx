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
  }, []);

  return (
    <Head>
      <title>
        {props.title} | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name="description" content="Aplikasi Sistem Informasi Desa" />
      <link rel="icon" href="/assets/images/logo.png" />
    </Head>
  )
}
