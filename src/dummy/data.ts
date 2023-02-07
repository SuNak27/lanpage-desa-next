export type BeritaBaru = {
  id: number,
  title: string,
  image: string,
  content: string,
}

const berita_baru = [
  {
    "id": 1,
    "title": "Lorem ipsum dolor sit amet consectetur",
    "image": "https://picsum.photos/300/100",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    "id": 2,
    "title": "Lorem ipsum dolor sit amet consectetur",
    "image": "https://picsum.photos/300/100",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    "id": 3,
    "title": "Lorem ipsum dolor sit amet consectetur",
    "image": "https://picsum.photos/300/100",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  }
]

const layanan = [
  {
    "id": 1,
    "icon": "bi bi-person",
    "nama_layanan": "Kependudukan",
    "deskripsi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    "id": 2,
    "icon": "bi bi-envelope",
    "nama_layanan": "Surat",
    "deskripsi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    "id": 3,
    "icon": "bi bi-people",
    "nama_layanan": "Pengajuan KK",
    "deskripsi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    "id": 4,
    "icon": "bi bi-card-text",
    "nama_layanan": "Pengajuan KTP",
    "deskripsi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  }
]

const aparat = [
  {
    "id": 1,
    "image": "https://picsum.photos/300/300",
    "nip": "1234567890",
    "nama": "M. Fauzi",
    "jabatan": "Kepala Desa",
  },
  {
    "id": 2,
    "image": "https://picsum.photos/300/300",
    "nip": "1234567890",
    "nama": "Taufik",
    "jabatan": "Sekretaris Desa",
  },
  {
    "id": 3,
    "image": "https://picsum.photos/300/300",
    "nip": "1234567890",
    "nama": "Rahmat",
    "jabatan": "Kepala Urusan Pemerintahan",
  },
  {
    "id": 4,
    "image": "https://picsum.photos/300/300",
    "nip": "1234567890",
    "nama": "Siti",
    "jabatan": "Kepala Urusan Keuangan",
  }
]

const faq = [
  {
    "id": 1,
    "pertanyaan": "Permasalahan apa yang sering terjadi di desa ini?",
    "jawaban": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    "id": 2,
    "pertanyaan": "Bagaimana cara mengajukan surat di desa ini?",
    "jawaban": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    "id": 3,
    "pertanyaan": "Apakah desa ini memiliki fasilitas kesehatan?",
    "jawaban": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
]

export { berita_baru, layanan, aparat, faq }