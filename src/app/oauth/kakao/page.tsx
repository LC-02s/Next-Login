"use client";

import { useSearchParams } from "next/navigation";

export default function KakaoRedirect() {
  const params = useSearchParams();

  return (
    <div>
      <p>{params.get("code")}</p>
    </div>
  );
}
