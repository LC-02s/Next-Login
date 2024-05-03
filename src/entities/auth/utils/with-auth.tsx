"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import useAccessToken from "../model/use-access-token";
import reissueToken from "../api/reissue-token";
import authKeys from "../model/auth-keys";

export default function withAuth(Component: React.FunctionComponent) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function ProtectedComponent(props: any) {
    const { accessToken } = useAccessToken();
    const queryClient = useQueryClient();
    const router = useRouter();

    useEffect(() => {
      if (!accessToken) {
        reissueToken()
          .then(({ data }) => {
            queryClient.setQueryData(authKeys.accessToken(), data.token);
            router.refresh();
          })
          .catch(() => {
            router.push("/login");
          });
      }
    }, [accessToken, router, queryClient]);

    if (!accessToken) {
      return null;
    }
    return React.createElement(Component, props, null);
  };
}
