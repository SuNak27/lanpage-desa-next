import { useEffect } from "react";
import { useLayoutContext } from "../default";
import { ArtikelProvider } from "./ArtikelScreen.machine";
import MainStatistikLayout from "./MainScreen";

export default function StatistikLayout({ children }: { children: React.ReactNode }) {
  const Layout = useLayoutContext();
  useEffect(() => {
    Layout.dispatch({ type: 'FETCH' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Layout.dispatch])

  return (
    <>
      <ArtikelProvider>
        <MainStatistikLayout>
          {children}
        </MainStatistikLayout>
      </ArtikelProvider>
    </>
  )
}