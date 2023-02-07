type DesaStruktural = {
  id_desa_struktural: number,
  id_desa: number,
  id_penduduk: number,
  id_jabatan: number,
  tanggal_mulai: string,
  tanggal_selesai: string,
  nip: string,
  no_sk_pengangkatan: string,
  no_sk_pemberhentian: string,
  nama_penduduk: string,
  nama_jabatan: string,
  tanggal_lahir: string,
}

type Layanan = {
  id_layanan: number,
  nama_layanan: string,
  slug: string,
  icon: string,
  deskripsi: string,
}

type Faq = {
  id_faq: number,
  slug: string,
  pertanyaan: string,
  jawaban: string,
}

type Artikel = {
  id_artikel: number,
  id_kategori: number,
  id_desa: number,
  slug: string,
  judul: string,
  isi: string,
  gambar: string | null,
  created_at: string,
  updated_at: string,
  deleted_at: string | null,
}

export interface Data {
  tentang_kami?: TentangKami;
  info_desa?: InfoDesa
}


export interface TentangKami {
  profil_desa: string,
  visi: string,
  misi: string,
  desa_struktural: DesaStruktural[],
}


export interface InfoDesa {
  nama_desa: string,
  nama_kecamatan: string,
  nama_kabupaten: string,
  nama_provinsi: string,
  jumlah_penduduk: number,
  jumlah_keluarga: number,
  jumlah_rumah_tangga: number,
  jumlah_dusun: number,
  layanan: Layanan[],
  faq: Faq[],
  artikel: Artikel[],
  desa_struktural: DesaStruktural[],
}