import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}

async use(req: any, res: any, next: (error?: any) => void) {
    console.log('Request...');
    const idToken = req.headers['authorization'];
    console.log(idToken);

    if (idToken == undefined) {
        res.status(401).send('Unauthorized');
        return;
    }

    const verifyIdToken = await this.authService.verifyIdToken(idToken);
    if (verifyIdToken == null) {
        res.status(401).send('Unauthorized');
        return;
    }
    
    req.user = verifyIdToken;
    next();
    }

}
  