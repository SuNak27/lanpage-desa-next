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

export interface MasterData {
  id_desa: string,
  nama_kepala_desa: string,
  kode_pos: string,
  alamat_kantor_desa: string,
  visi: string,
  misi: string,
  telepon: string,
  email: string,
  website: string,
  logo: string,
  map_desa: string,
  batas_utara: null | string,
  batas_selatan: null | string,
  batas_barat: null | string,
  batas_timur: null | string,
  nama_desa: string,
  nama_kecamatan: string,
  nama_kabupaten: string,
  nama_provinsi: string
}

type StatistikUmur = {
  rentang_umur: string,
  jumlah_penduduk: number,
  persen_penduduk: string,
  jumlah_penduduk_laki_laki: string,
  jumlah_penduduk_perempuan: string,
  persen_penduduk_laki_laki: string,
  persen_penduduk_perempuan: string,
}

type StatistikAgama = {
  agama: string,
  jumlah_penduduk: number,
  persen_penduduk: string,
  jumlah_penduduk_laki_laki: string,
  jumlah_penduduk_perempuan: string,
  persen_penduduk_laki_laki: string,
  persen_penduduk_perempuan: string,
}

export interface Statistik {
  umur: {
    data: StatistikUmur[],
    jumlah_penduduk: number,
    jumlah_penduduk_laki_laki: number,
    jumlah_penduduk_perempuan: number,
    persen_penduduk: number,
    persen_penduduk_laki_laki: number,
    persen_penduduk_perempuan: number
  },
  agama: {
    data: StatistikAgama[],
  }
}