"use client";

import React from "react";
import useAccessToken from "../model/use-access-token";

export default function withAuth(Component: React.FunctionComponent) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function ProtectedComponent(props: any) {
    const { accessToken } = useAccessToken();
    console.log(accessToken);

    if (!accessToken) {
      return null;
    }

    return React.createElement(Component, props, null);
  };
}
