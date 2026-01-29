import { alova } from "@/lib/alova";

export type AuthUser = {
  email: string;
  password: string;
};

export const signInUser = (input: AuthUser) => {
  const response = alova.Post<{ token: string }>("signin", input);
  return response;
};
