import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';


@Injectable()
export class AuthService {
    verifyIdToken(token: string) {
        try {
          const verifyToken = admin.auth().verifyIdToken(token);
          return verifyToken;
        } catch {
          return null;
        }
      }
}
