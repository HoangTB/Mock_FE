import { JwtPayload, jwtDecode } from 'jwt-decode';
import { JwtPayloads } from '../../types/jwt-payload';

const decodeToken = (token: string): JwtPayloads | null => {
  try {
    const decoded: JwtPayloads = jwtDecode(token) as JwtPayloads;
    return decoded;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};

export default decodeToken;
