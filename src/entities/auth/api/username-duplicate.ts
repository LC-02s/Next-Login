import * as Shared from "@/shared";

type DataIsDuplicate = {
  isDuplicate: boolean;
};

export default async function userNameDuplicate(name: string) {
  const res = await Shared.api.fetch<DataIsDuplicate>(
    `/v1/auth/join/username-duplicate?name=${name}`,
    { method: "GET" },
  );

  return res;
}
