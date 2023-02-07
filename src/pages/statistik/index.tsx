import Layout from "@/layout"
import Header from "@/layout/header"
import StatistikLayout from "@/layout/statistik"
import { StatistikContext } from "@/utils/context"
import { useContext } from "react"

export default function Statistik() {
  const data = useContext(StatistikContext)
  return (
    <>
      <Header title="Statistik Umur" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Data Penduduk Menurut Umur (Rentang)</h4>
        <div className="row">
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
                {data?.umur.data.map((umur, index) => (
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
                        <strong>{data?.umur.jumlah_penduduk} Penduduk</strong>
                      </div>
                      <div>
                        <span className="badge bg-primary"><strong>{data?.umur.persen_penduduk}%</strong></span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>{data?.umur.jumlah_penduduk_laki_laki} Penduduk</strong>
                      </div>
                      <div>
                        <span className="badge bg-primary">
                          <strong>
                            {data?.umur?.persen_penduduk_laki_laki}%
                          </strong>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>
                          {data?.umur?.jumlah_penduduk_perempuan} Penduduk
                        </strong>
                      </div>
                      <div>
                        <span className="badge bg-primary">
                          <strong>
                            {data?.umur?.persen_penduduk_perempuan}%
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
    <Layout>
      <StatistikLayout>
        {page}
      </StatistikLayout>
    </Layout>
  )
}