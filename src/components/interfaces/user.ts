import { BASE_USER } from "@/mocks/user";

export type UserTypeBase = typeof BASE_USER;

export type UserType = UserTypeBase & {
  subscriptions?: string[];
};
