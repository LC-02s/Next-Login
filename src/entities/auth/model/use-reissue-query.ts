"use client";

import { useQuery } from "@tanstack/react-query";
import authKeys from "./auth-keys";
import reissueToken from "../api/reissue-token";

export default function useReissueQuery() {
  return useQuery({
    queryKey: authKeys.reissue(),
    queryFn: reissueToken,
    staleTime: Infinity,
  });
}
