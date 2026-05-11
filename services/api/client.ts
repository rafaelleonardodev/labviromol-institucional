const BASE_URL = process.env.API_URL;

type FetchOptions = RequestInit & {
  revalidate?: number | false;
  tags?: string[];
};

async function apiFetch<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const { revalidate, tags, ...init } = options;

  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
    next: {
      revalidate: revalidate ?? 3600,
      ...(tags && { tags }),
    },
  });

  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return null as T;
  }

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