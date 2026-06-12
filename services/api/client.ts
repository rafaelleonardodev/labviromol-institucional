const BASE_URL = process.env.API_URL;

type FetchOptions = RequestInit & {
  revalidate?: number | false;
  tags?: string[];
  params?: Record<string, string | number | boolean | undefined | null>;
};

function buildUrl(path: string, params?: FetchOptions["params"]): string {
  if (!params) return `${BASE_URL}${path}`;
  const qs = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      qs.set(key, String(value));
    }
  }
  const queryString = qs.toString();
  return queryString ? `${BASE_URL}${path}?${queryString}` : `${BASE_URL}${path}`;
}

async function apiFetch<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const { revalidate, tags, params, ...init } = options;

  const res = await fetch(buildUrl(path, params), {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
    next: {
      revalidate: revalidate ?? 3600,
      ...(tags && { tags }),
    },
  });

  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);

  const contentType = res.headers.get("content-type");
  if (!contentType?.includes("application/json")) return null as T;

  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string, options?: FetchOptions) =>
    apiFetch<T>(path, { method: "GET", ...options }),

  post: <T>(path: string, body: unknown, options?: FetchOptions) =>
    apiFetch<T>(path, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    }),
};