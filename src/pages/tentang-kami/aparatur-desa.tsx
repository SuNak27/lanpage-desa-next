import Layout from "@/layout"
import AboutLayout from "@/layout/about"
import Header from "@/layout/header"
import { aparat } from "@/dummy/data"

export default function AparaturDesa() {
  const dataJabatan = aparat
  return (
    <>
      <Header title="Aparatur Desa" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Aparatur Desa</h4>
        <div className="row">
          <div className="col-lg-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">No</th>
                  <th scope="col">NIP</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Jabatan</th>
                </tr>
              </thead>
              <tbody>
                {dataJabatan.map((item, index) => (
                  <tr key={index}>
                    <th scope="row" className="text-center">{index + 1}</th>
                    <td>{item.nip}</td>
                    <td>{item.nama}</td>
                    <td>{item.jabatan}</td>
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

AparaturDesa.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AboutLayout>
        {page}
      </AboutLayout>
    </Layout>
  )
}