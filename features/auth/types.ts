import { TRole } from "@/interface/IUser";

export type TLoginForm = {
  email: string;
  password: string;
  role?: TRole;
};

export type TSingUpForm = {
  phone: string;
  email: string;
  password: string;
  name: string;
};

export type TForgotPassword = {
  email: string;
};
