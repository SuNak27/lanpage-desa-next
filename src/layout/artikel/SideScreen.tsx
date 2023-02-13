import ActiveLink from "@/component/ActiveLink"
import Badge from "@/component/Badge"
import { useArtikelContext } from "@/layout/artikel"
import { useLayoutContext } from "@/layout/default"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Skeleton from "react-loading-skeleton"

export default function SideArtikelLayout() {
  const Layout = useLayoutContext()
  const { state, commit } = useArtikelContext()
  const router = useRouter()

  function onClick() {
    commit({ type: 'ALL_KATEGORI' })
  }
  return (
    <>
      <div className="mt-4">
        <h3 className="fw-bolder my-4">Kategori</h3>

        <ul className="list-group list-group-flush list-kategori">
          <button className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${router.pathname == '/artikel' ? 'active' : ''}`} onClick={() => router.push('/artikel')}>
            Semua
            {router.pathname == '/artikel' &&
              <span className="badge bg-primary rounded-pill">{state.data.artikel.total_data}</span>
            }
          </button>
          {state.tag === 'loading' && (
            [1, 2, 3, 4, 5].map((item, index) => (
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index}>
                <Skeleton width={100} height={10} />
                <Skeleton width={50} height={10} />
              </li>
            ))
          )}
          {state.data.kategori.data.map((item, index) => (
            <ActiveLink className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index} activeClassName={"active"} href={`/artikel/kategori/${item.slug}`}>
              {item.nama_kategori}
              <Badge number={item.artikel?.length ?? 0} />
            </ActiveLink>
          ))}
          <button className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => onClick()}>
            Lihat Semua Kategori
            <i className="bi bi-arrow-right"></i>
          </button>
        </ul>
      </div>
    </>
  )
}