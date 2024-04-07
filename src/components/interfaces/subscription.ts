import {
  REGISTER,
  SUBSCRIBE,
} from "@/components/config/constants";

export type Subscription = "RIGHT_1" | "RIGHT_2" | "";
export type UserPermissions = "RIGHT_1" | "RIGHT_1,RIGHT_2" | "";
export type ButtonType = typeof REGISTER | typeof SUBSCRIBE;
