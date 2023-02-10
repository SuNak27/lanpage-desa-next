import { useAppContext } from "@/utils/context";
import Head from "next/head";
import { useEffect } from "react";

type Props = {
  title?: string;
};

export default function Header(props: Props) {
  const { state } = useAppContext();

  return (
    <Head>
      <title>
        {props.title ?? state.title} | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name="description" content="Aplikasi Sistem Informasi Desa" />
      <link rel="icon" href="/assets/images/logo.png" />
    </Head>
  )
}
