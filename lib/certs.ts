export type CertificationRecord = {
  certNumber: string;
  aliases: string[];
  cardName: string;
  game: string;
  year: string;
  setName: string;
  cardNumber: string;
  variant: string;
  grade: string;
  gradeLabel: string;
  status: "Verified" | "Inactive";
  certifiedOn: string;
  image: string;
  notes?: string;
};

export const certificationRecords: CertificationRecord[] = [
  {
    certNumber: "ASG-000001",
    aliases: ["000001", "1", "0001234567"],
    cardName: "Charizard ex",
    game: "Pokémon",
    year: "2023",
    setName: "Scarlet & Violet 151 — Japanese",
    cardNumber: "201/165",
    variant: "Special Art Rare",
    grade: "10",
    gradeLabel: "Gem Mint",
    status: "Verified",
    certifiedOn: "2026-04-18",
    image: "/asg-card-showcase.png",
    notes: "Certification record retained from the original ASG demonstration vault."
  }
];

export function normalizeCert(value: string): string {
  return decodeURIComponent(value)
    .trim()
    .replace(/^#/, "")
    .replace(/\s+/g, "")
    .toUpperCase();
}

export function findCertification(value: string): CertificationRecord | undefined {
  const normalized = normalizeCert(value);
  return certificationRecords.find((record) => {
    if (normalizeCert(record.certNumber) === normalized) return true;
    return record.aliases.some((alias) => normalizeCert(alias) === normalized);
  });
}
