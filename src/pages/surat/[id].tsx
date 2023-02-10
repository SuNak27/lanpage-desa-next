import Header from "@/layout/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Data = {
  nomor_surat: string;
  nama_pemegang: string;
  nik_pemegang: string;
  tanggal_surat: string;
  masa_berlaku: string;
  penandatangan: string;
}

export default function Surat() {
  const router = useRouter();
  const [data, setData] = useState<Data | null>(null)
  const { id, q } = router.query;

  useEffect(() => {
    if (!id || !q) {
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/surat/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': q as string
      }
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [id, q])

  return (
    <>
      <Header title="Cek Surat" />

      <div className="container py-5">

        <div className="text-center mb-4">
          <h1 className="fw-semibold">Cek Surat</h1>
          <p className="text-muted">Nomor : {data?.nomor_surat}</p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card rounded-4 shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="nomor_surat" className="form-label">Nomor Surat</label>
                      <input type="text" className="form-control" id="nomor_surat" disabled value={data?.nomor_surat} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nama_pemegang" className="form-label">Nama Pemegang Surat</label>
                      <input type="text" value={data?.nama_pemegang} className="form-control" id="nama_pemegang" disabled />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nama" className="form-label">NIK Pemegang Surat</label>
                      <input type="text" value={data?.nik_pemegang} className="form-control" id="nama" disabled />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nama" className="form-label">Tanggal Surat</label>
                      <input type="text" value={data?.tanggal_surat} className="form-control" id="nama" disabled />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nama" className="form-label">Masa Berlaku</label>
                      <input type="text" value={data?.masa_berlaku} className="form-control" id="nama" disabled />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nama" className="form-label">Penanda Tangan :</label>
                      <input type="text" value={data?.penandatangan} className="form-control" id="nama" disabled />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}