import * as Shared from "@/shared";
import type { DataAccessToken } from "../types";

export default async function refresh() {
  const res = await Shared.api.fetch<DataAccessToken>("/v1/auth/refresh", {
    method: "GET",
    credentials: "include",
  });

  return res;
}
