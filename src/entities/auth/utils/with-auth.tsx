"use client";

import React from "react";
import useAccessToken from "../model/use-access-token";

export default function withAuth<P extends React.JSX.IntrinsicAttributes>(
  Component: React.FC<P>,
) {
  return function ProtectedComponent(props: P) {
    const { accessToken } = useAccessToken();
    console.log(accessToken);

    if (!accessToken) {
      return null;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };
}
