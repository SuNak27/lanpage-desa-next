import Layout from "@/layout"
import AboutLayout from "@/layout/about"
import Header from "@/layout/header"

export default function VisiMisi() {
  return (
    <>
      <Header title="Visi Misi" />
      <div className="p-4 rounded-3">
        <h4 className="fw-semibold mb-4">Visi</h4>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify">
              “Terwujudnya Desa Karanganyar yang sejahtera, mandiri, dan berdaya saing”
            </p>
          </div>
        </div>

        <h4 className="fw-semibold mb-4">Misi</h4>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-justify">
              1. Meningkatkan kesejahteraan masyarakat melalui pemberdayaan masyarakat dan pembangunan ekonomi desa yang berkelanjutan.
            </p>
            <p className="text-justify">
              2. Meningkatkan kualitas pelayanan publik yang efektif, efisien, dan transparan.
            </p>
            <p className="text-justify">
              3. Meningkatkan kualitas pemerintahan yang bersih, akuntabel, dan berwawasan lingkungan.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

VisiMisi.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AboutLayout>
        {page}
      </AboutLayout>
    </Layout>
  )
}