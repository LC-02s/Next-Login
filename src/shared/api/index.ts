const getBaseURL = () => {
  return `${typeof window === "undefined" ? process.env.NEXT_PUBLIC_FE_URL : ""}/api`;
};

export const api = {
  async fetch<T = unknown>(
    path: string,
    option?: RequestInit,
  ): Promise<{ data: T } & Response> {
    const res = await fetch(`${getBaseURL()}${path}`, option);
    const data = await res.json();

    if (res.status >= 400) {
      throw new Error(`${data.message || res.statusText} (${res.status})`);
    }
    return { ...res, data };
  },
};
