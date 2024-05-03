"use client";

import { useQueryClient } from "@tanstack/react-query";
import logout from "../api/logout";

export default function useLogout() {
  const queryClient = useQueryClient();
  logout().then(() => queryClient.clear());
}
