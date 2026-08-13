import { certificationRecords } from "@/data/certificates";

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
  frontImage: string;
  backImage: string;
  notes?: string;
};

export type CertificationLookupRecord = CertificationRecord & {
  /**
   * Temporary compatibility field for the existing cert result page.
   * Once the page is upgraded, it will use frontImage and backImage directly.
   */
  image: string;
};

export function normalizeCert(value: string): string {
  return decodeURIComponent(value)
    .trim()
    .replace(/^#/, "")
    .replace(/\s+/g, "")
    .toUpperCase();
}

export function findCertification(
  value: string
): CertificationLookupRecord | undefined {
  const normalized = normalizeCert(value);

  const record = certificationRecords.find((certificate) => {
    if (normalizeCert(certificate.certNumber) === normalized) {
      return true;
    }

    return certificate.aliases.some(
      (alias) => normalizeCert(alias) === normalized
    );
  });

  if (!record) {
    return undefined;
  }

  return {
    ...record,

    // Keeps the current cert page working until we upgrade it
    // to display both front and back slab images.
    image: record.frontImage
  };
}
