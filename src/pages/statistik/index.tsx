import Layout from "@/layout"
import Header from "@/layout/header"
import StatistikLayout from "@/layout/statistik"
import { ContextProvider, useAppContext } from "@/utils/context"
import { useContext } from "react"
import { Pie } from "react-chartjs-2"
import Skeleton from "react-loading-skeleton"

export default function Statistik() {
  const { state } = useAppContext()

  // Dummy Data
  const chartData = {
    labels: state.data?.statistik?.umur.data.map((umur) => {
      return `${umur.rentang_umur} Tahun`
    }),
    datasets: [
      {
        data: state.data?.statistik?.umur.data.map((umur) => umur.jumlah_penduduk),
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

  const chartOptions = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    Doughnut: {
      cutoutPercentage: 10,
    },
  }


  return (
    <>
      <Header title="Statistik Umur" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Data Penduduk Menurut Umur (Rentang)</h4>
        <div className="row">
          <div className="col-lg-12 mx-auto mb-4" style={{
            maxWidth: "400px",
          }}>
            {state.tag !== 'success' ? (
              <>
                <Skeleton width={400} height={400} circle />
              </>
            )
              : <Pie data={chartData} options={chartOptions} width={10} height={10} />
            }
          </div>
          <div className="col-lg-12">
            <table className="table table-striped-columns table-hover">
              <thead>
                <tr>
                  <th scope="col" className="text-center">No</th>
                  <th scope="col">Rentang Umur</th>
                  <th scope="col" className="text-center">Jumlah Penduduk</th>
                  <th scope="col">Laki - Laki</th>
                  <th scope="col">Perempuan</th>
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
                {state.data?.statistik?.umur.data.map((umur, index) => (
                  <tr key={index}>
                    <th scope="row" className="text-center">{index + 1}</th>
                    <td>
                      {umur.rentang_umur}
                    </td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <div>
                          {umur.jumlah_penduduk} Penduduk
                        </div>
                        <div>
                          <span className="badge bg-primary">
                            {umur.persen_penduduk}%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <div>{umur.jumlah_penduduk_laki_laki} Penduduk</div>
                        <div>
                          <span className="badge bg-primary">{umur.persen_penduduk_laki_laki}%</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <div>{umur.jumlah_penduduk_perempuan} Penduduk</div>
                        <div>
                          <span className="badge bg-primary">{umur.persen_penduduk_perempuan}%
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="text-center"></th>
                  <td><strong>Jumlah</strong></td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>{state.data?.statistik?.umur.jumlah_penduduk} Penduduk</strong>
                      </div>
                      <div>
                        <span className="badge bg-primary"><strong>{state.data?.statistik?.umur.persen_penduduk}%</strong></span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>{state.data?.statistik?.umur.jumlah_penduduk_laki_laki} Penduduk</strong>
                      </div>
                      <div>
                        <span className="badge bg-primary">
                          <strong>
                            {state.data?.statistik?.umur?.persen_penduduk_laki_laki}%
                          </strong>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>
                          {state.data?.statistik?.umur?.jumlah_penduduk_perempuan} Penduduk
                        </strong>
                      </div>
                      <div>
                        <span className="badge bg-primary">
                          <strong>
                            {state.data?.statistik?.umur?.persen_penduduk_perempuan}%
                          </strong>
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

Statistik.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <ContextProvider>
      <Layout>
        <StatistikLayout>
          {page}
        </StatistikLayout>
      </Layout>
    </ContextProvider>
  )
}