import Layout from "@/layout"
import Header from "@/layout/header"
import StatistikLayout from "@/layout/statistik"
import { StatistikContext } from "@/utils/context"
import { useContext } from "react"
import { Pie } from "react-chartjs-2"

export default function Statistik() {
  const data = useContext(StatistikContext)

  // Dummy Data
  const chartData = {
    labels: data?.agama.data.map((agama) => {
      return `${agama.agama}`
    }),
    datasets: [
      {
        data: data?.agama.data.map((agama) => agama.jumlah_penduduk),
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
              <Pie data={chartData} width={10} height={10} />
            </div>
          </div>
          <div className="col-lg-12">
            <table className="table table-striped-columns table-hover">
              <thead>
                <tr>
                  <th scope="col" className="text-center">No</th>
                  <th scope="col">Agama</th>
                  <th scope="col" className="text-center">Jumlah Penduduk</th>
                  <th scope="col">Laki - Laki</th>
                  <th scope="col">Perempuan</th>
                </tr>
              </thead>
              <tbody>
                {data?.agama.data.map((agama, index) => (
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
    </>
  )
}

Statistik.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <StatistikLayout>
        {page}
      </StatistikLayout>
    </Layout>
  )
}