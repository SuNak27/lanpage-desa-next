export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Halaman Utama',
    href: '/',
  },
  {
    label: 'Profil Desa',
    children: [
      {
        label: 'Profil Desa',
        subLabel: 'Sejarah Singkat Desa',
        href: '#',
      },
      {
        label: 'Visi Misi',
        subLabel: 'Visi dan Misi Desa',
        href: '#',
      },
      {
        label: 'Aparatur Desa',
        subLabel: 'Struktur Organisasi Desa',
        href: '#',
      },
    ],
  },
  {
    label: 'Info Berita',
    children: [
      {
        label: 'Artikel',
        subLabel: 'Baca artikel terbaru',
        href: '#',
      },
    ],
  },
  {
    label: 'Data desa',
    children: [
      {
        label: 'Umur',
        subLabel: 'Data Umur Penduduk',
        href: '#',
      },
      {
        label: 'Agama',
        subLabel: 'Data Agama Penduduk',
        href: '#',
      },
    ],
  },
  {
    label: 'Halaman',
    href: '/',
  },
  {
    label: 'Halaman',
    href: '/',
  },
  {
    label: 'Halaman',
    href: '/',
  },
  {
    label: 'Halaman',
    href: '/',
  },
  {
    label: 'Halaman',
    href: '/',
  },
  {
    label: 'Halaman',
    href: '/',
  },
  {
    label: 'Halaman',
    href: '/',
  },
];

export default NAV_ITEMS