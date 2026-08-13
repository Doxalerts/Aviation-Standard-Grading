import type { CertificationRecord } from "@/lib/certs";

/**
 * ASG CERTIFICATE LIBRARY
 *
 * One record = one certified slab.
 * Keep certNumber unique.
 * Put slab photos in /public/certs and reference them here.
 */
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
    frontImage: "/asg-card-showcase.png",
    backImage: "/asg-card-showcase.png",
    notes:
      "Certification record retained from the original ASG demonstration vault."
  }
];
