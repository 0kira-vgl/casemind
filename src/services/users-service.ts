import { alova } from "@/lib/alova";
import { UserProps } from "@/types/user-types";

export const createUser = (input: UserProps) => {
  const response = alova.Post("users", input);
  return response;
};
