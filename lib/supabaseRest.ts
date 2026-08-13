const SUPABASE_URL = "https://vvfbemeofpmdaxvaghbf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_rCXPt7bmDqKzc4UO8dRsKg_F0ob7bDS";

export type SupabaseCertificateRow = {
  id: number;
  cert_number: string;
  card_name: string;
  game: string;
  year: string;
  set_name: string;
  card_number: string;
  variant: string;
  grade: string;
  grade_label: string;
  status: "Verified" | "Inactive";
  certified_on: string;
  front_image_path: string | null;
  back_image_path: string | null;
  notes: string | null;
};

export type AdminLoginResult = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: {
    id: string;
    email?: string;
  };
};

function normalizeCert(value: string) {
  return decodeURIComponent(value)
    .trim()
    .replace(/^#/, "")
    .replace(/\s+/g, "")
    .toUpperCase();
}

function certCandidates(value: string) {
  const normalized = normalizeCert(value);
  const numeric = normalized.replace(/^ASG-?/, "");
  const padded = /^\d+$/.test(numeric) ? numeric.padStart(6, "0") : numeric;

  return Array.from(
    new Set([
      normalized,
      numeric,
      `ASG-${numeric}`,
      padded,
      `ASG-${padded}`,
    ].filter(Boolean))
  );
}

export function getPublicCertImageUrl(path: string | null) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;

  const clean = path.replace(/^\/+/, "");
  return `${SUPABASE_URL}/storage/v1/object/public/cert-images/${clean}`;
}

export async function fetchCertificateByNumber(value: string) {
  const candidates = certCandidates(value);
  const orFilter = candidates
    .map((candidate) => `cert_number.eq.${encodeURIComponent(candidate)}`)
    .join(",");

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/certificates?select=*&or=(${orFilter})&limit=1`,
    {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Certificate lookup failed (${response.status})`);
  }

  const rows = (await response.json()) as SupabaseCertificateRow[];
  return rows[0] ?? null;
}

export async function loginAdmin(email: string, password: string) {
  const response = await fetch(
    `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
    {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.msg || body?.error_description || "Invalid login");
  }

  return (await response.json()) as AdminLoginResult;
}

export async function verifyAsgAdmin(accessToken: string) {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/asg_admins?select=user_id,role&limit=1`,
    {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) return false;
  const rows = (await response.json()) as Array<{ user_id: string; role: string }>;
  return rows.length > 0;
}

export async function uploadCertImage(
  accessToken: string,
  certNumber: string,
  side: "front" | "back",
  file: File
) {
  const extension = (file.name.split(".").pop() || "jpg").toLowerCase();
  const safeCert = normalizeCert(certNumber).replace(/[^A-Z0-9-]/g, "");
  const path = `${safeCert}/${side}.${extension}`;

  const response = await fetch(
    `${SUPABASE_URL}/storage/v1/object/cert-images/${path}`,
    {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": file.type || "application/octet-stream",
        "x-upsert": "true",
      },
      body: file,
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Image upload failed: ${body}`);
  }

  return path;
}

export type NewCertificateInput = {
  cert_number: string;
  card_name: string;
  game: string;
  year: string;
  set_name: string;
  card_number: string;
  variant: string;
  grade: string;
  grade_label: string;
  status: "Verified" | "Inactive";
  certified_on: string;
  front_image_path: string;
  back_image_path: string;
  notes: string | null;
};

export async function saveCertificate(
  accessToken: string,
  certificate: NewCertificateInput
) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/certificates`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(certificate),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Certificate save failed: ${body}`);
  }

  const rows = (await response.json()) as SupabaseCertificateRow[];
  return rows[0] ?? null;
}
