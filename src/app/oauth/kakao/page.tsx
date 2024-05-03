"use client";

import { useSearchParams } from "next/navigation";
// import * as Entities from "@/entities";

export default function KakaoRedirect() {
  const params = useSearchParams();
  const code = params.get("code");
  console.log(code);

  return (
    <div>
      <p className="flex items-center justify-center p-12">
        로그인 중 입니다...
      </p>
    </div>
  );
}
