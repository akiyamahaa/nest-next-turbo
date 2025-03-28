import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../types/jwt.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secretKey', // Thay bằng biến môi trường sau này
    });
  }

  async validate(payload: JwtPayload) {
    // Payload chứa các thông tin được set trong AuthService (ví dụ: sub, email)
    return { id: payload.sub, email: payload.email };
  }
}
