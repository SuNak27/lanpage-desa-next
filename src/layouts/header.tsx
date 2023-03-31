import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { useLayoutContext } from "./Default";

type Props = {
  title?: string;
};

export default function Header(props: Props) {
  const { state, dispatch } = useLayoutContext();
  const title = `${state.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`;

  useEffect(() => {
    dispatch({ type: "CHANGE_TITLE", payload: props.title ?? "Beranda" });
  }, [dispatch, props.title]);

  return (
    <Head>
      <title>
        {title}
      </title>
      <meta name="description" content="Aplikasi Sistem Informasi Desa" />
      <meta name="keywords" content="Sistem Informasi Desa" />
      <meta name="author" content="Alfad Sabil Haq" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/assets/images/logo.png" />
    </Head>
  )
}
