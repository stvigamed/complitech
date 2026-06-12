export interface Brand {
  name: string;
  subtitle?: string;
  slug: string;
}

export const brands: Brand[] = [
  { name: 'Terumo', slug: 'terumo' },
  { name: 'Gima', slug: 'gima' },
  { name: 'Radiometer', slug: 'radiometer' },
  { name: 'Ethicon', subtitle: 'Johnson & Johnson', slug: 'ethicon' },
  { name: 'Beckman Coulter', slug: 'beckman-coulter' },
  { name: 'Abbott', slug: 'abbott' },
  { name: 'Covidien', slug: 'covidien' },
  { name: 'Iris', subtitle: 'Medtronic', slug: 'iris' },
  { name: 'Tem', slug: 'tem' },
  { name: 'NeoMedica', subtitle: 'Bioscience Technology', slug: 'neomedica' },
  { name: 'Instrumentation Laboratory', subtitle: 'A Werfen Company', slug: 'il' },
  { name: 'Thermo Fisher Scientific', slug: 'thermo-fisher' },
  { name: 'BD', slug: 'bd' },
  { name: 'Siemens Healthineers', slug: 'siemens' },
  { name: 'Roche', slug: 'roche' },
  { name: 'DiaSorin', slug: 'diasorin' },
  { name: 'Stago', slug: 'stago' },
  { name: 'Sysmex', slug: 'sysmex' },
];
