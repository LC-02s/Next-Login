import { useMutation, useQueryClient } from "@tanstack/react-query";
import authKeys from "./auth-keys";
import { LoginInfo } from "../types";
import login from "../api/login";

export default function useLoginMutation(info: LoginInfo) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: authKeys.login(info),
    mutationFn: () => login(info),
    onSuccess: ({ data }) => {
      queryClient.setQueryData<typeof data.token>(
        authKeys.accessToken(),
        data.token,
      );
    },
  });
}
