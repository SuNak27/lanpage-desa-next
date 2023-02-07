import Layout from "@/layout"
import AboutLayout from "@/layout/about"
import Header from "@/layout/header"
import { useAppContext } from "@/utils/context"

export default function AparaturDesa() {
  const { state } = useAppContext()
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
                {state.data?.tentang_kami?.desa_struktural.map((item, index) => (
                  <tr key={index}>
                    <th scope="row" className="text-center">{index + 1}</th>
                    <td>{item.nip}</td>
                    <td>{item.nama_penduduk}</td>
                    <td>{item.nama_jabatan}</td>
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

AparaturDesa.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <AboutLayout>
        {page}
      </AboutLayout>
    </Layout>
  )
}