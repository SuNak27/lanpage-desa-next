import Layout from "@/layout"
import Header from "@/layout/header"
import StatistikLayout, { useStatistikContext } from "@/layout/statistik"
import { ContextProvider, useAppContext } from "@/utils/context"
import { useEffect } from "react"
import { Pie } from "react-chartjs-2"
import Skeleton from "react-loading-skeleton"

export default function Statistik() {
  const { state, commit } = useStatistikContext()

  const chartData = {
    labels: state.data?.agama.data.map((agama) => {
      return `${agama.agama}`
    }),
    datasets: [
      {
        data: state.data?.agama.data.map((agama) => agama.jumlah_penduduk),
        label: "Jumlah Penduduk",
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FF9F40",
          "#9966FF",
          "#C9DE00",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
      },
    ],
  }

  useEffect(() => {
    commit({ type: "FETCH" })
  }, [commit])

  return (
    <>
      <Header title="Statistik Agama" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Data Penduduk Menurut Agama</h4>
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-12 mx-auto mb-4" style={{
              maxWidth: "400px",
            }}>
              {state.tag !== 'success' ? (
                <>
                  <Skeleton height={400} circle width={400} />
                </>
              ) : (
                <Pie data={chartData} width={10} height={10} />
              )}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-striped-columns table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-center"
                      style={{
                        minWidth: "50px",
                      }}
                    >No</th>
                    <th scope="col"
                      style={{
                        minWidth: "150px",
                      }}
                    >Agama</th>
                    <th scope="col" className="text-center"
                      style={{
                        minWidth: "200px",
                      }}
                    >Jumlah Penduduk</th>
                    <th scope="col"
                      style={{
                        minWidth: "175px",
                      }}
                    >Laki - Laki</th>
                    <th scope="col"
                      style={{
                        minWidth: "175px",
                      }}
                    >Perempuan</th>
                  </tr>
                </thead>
                <tbody>
                  {state.tag !== 'success' && (
                    [1, 2, 3, 4, 5].map((item, index) => (
                      <tr key={index}>
                        <th scope="row" className="text-center">
                          <Skeleton width={20} />
                        </th>
                        <td>
                          <Skeleton width={100} />
                        </td>
                        <td>
                          <Skeleton width={100} />
                        </td>
                        <td>
                          <Skeleton width={100} />
                        </td>
                        <td>
                          <Skeleton width={100} />
                        </td>
                      </tr>
                    ))
                  )}
                  {state.data?.agama.data.map((agama, index) => (
                    <tr key={index}>
                      <th scope="row" className="text-center">{index + 1}</th>
                      <td>
                        {agama.agama}
                      </td>
                      <td>
                        <div className="d-flex justify-content-between">
                          <div>
                            {agama.jumlah_penduduk} Penduduk
                          </div>
                          <div>
                            <span className="badge bg-primary">
                              {agama.persen_penduduk}%
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-between">
                          <div>{agama.jumlah_penduduk_laki_laki} Penduduk</div>
                          <div>
                            <span className="badge bg-primary">{agama.persen_penduduk_laki_laki}%</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-between">
                          <div>{agama.jumlah_penduduk_perempuan} Penduduk</div>
                          <div>
                            <span className="badge bg-primary">{agama.persen_penduduk_perempuan}%
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Statistik.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <StatistikLayout>
      {page}
    </StatistikLayout>
  )
}