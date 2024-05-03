export type Provider = "kakao" | "naver" | "google";

export type LoginInfo = {
  provider: Provider;
  code: string;
};

export type ExtraDetails = LoginInfo & {
  nickName: string;
  birthDate: number;
};

export type DataAccessToken = {
  token: string | null;
};

export type DataUser = DataAccessToken & {
  memberId: string | null;
  hasExtraDetails: boolean;
};
