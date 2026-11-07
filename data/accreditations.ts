export type Accreditation = {
  id: string;
  name: string;
  shortName: string;
  logo: { src: string; width: number; height: number; alt: string };
  href?: string;
  description?: string;
  certificateNumber?: string;
  validUntil?: string;
};

export const accreditations: Accreditation[] = [
  {
    id: "nita",
    name: "National Industrial Training Authority (NITA)",
    shortName: "NITA",
    logo: {
      src: "/img/accreditations/nita.png",
      width: 320,
      height: 128,
      alt: "NITA accreditation logo",
    },
    href: "https://www.nita.go.ke/"
  },
];
