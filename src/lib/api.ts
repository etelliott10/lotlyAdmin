export const apiBaseUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  process.env.NEXT_PUBLIC_API_BASE ??
  "http://localhost:8000";

function handleAuthFailure(status: number) {
  if (typeof window === "undefined") return;
  if (status !== 401 && status !== 403) return;
  sessionStorage.removeItem("lotly_admin_access_token");
  sessionStorage.removeItem("lotly_access_token");
  if (!window.location.pathname.startsWith("/login")) {
    window.location.href = "/login";
  }
}

async function parseApiResponse<TResponse>(
  response: Response,
): Promise<TResponse> {
  const text = await response.text();
  const data = text ? (JSON.parse(text) as TResponse & { detail?: string }) : null;

  if (!response.ok) {
    const message =
      (data && "detail" in data && data.detail) ||
      `Request failed (${response.status})`;
    throw new Error(message);
  }

  return data as TResponse;
}

export async function apiGet<TResponse>(path: string): Promise<TResponse> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    handleAuthFailure(response.status);
  }

  return parseApiResponse(response);
}

export async function apiPost<TResponse>(
  path: string,
  payload: Record<string, unknown>,
): Promise<TResponse> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    handleAuthFailure(response.status);
  }

  return parseApiResponse(response);
}

export async function apiPatch<TResponse>(
  path: string,
  payload: Record<string, unknown>,
): Promise<TResponse> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    handleAuthFailure(response.status);
  }

  return parseApiResponse(response);
}
