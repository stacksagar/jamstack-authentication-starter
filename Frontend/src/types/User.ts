export default interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  picture: string;
  role: Roles;

  refresh_token?: string;
  access_token?: string;
  disabled?: boolean;
  isEmailVerified?: boolean;

  createdAt: string | number;
  updatedAt: string | number;
}

export type Roles = "user" | "moderator" | "admin";
