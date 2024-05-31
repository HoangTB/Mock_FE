export interface JwtPayloads {
  sub: string;
  avatar: string | null;
  exp: number;
  iat: number;
  email: string;
  username: string;
}
