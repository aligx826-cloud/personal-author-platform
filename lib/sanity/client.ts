import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const hasSanityConfig = Boolean(projectId && projectId.trim().length >= 8);

const token = process.env.SANITY_API_READ_TOKEN;

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-11-16",
      token,
      useCdn: !token,
    })
  : null;

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 30 } });
  } catch (error) {
    console.error("Sanity fetch failed; rendering preview content instead.", error);
    return null;
  }
}
