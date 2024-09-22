import { Request, Response, NextFunction } from 'express';
export default class AuthController {
    static async login(req: Request, res: Response) {
        return await res.json({
            userId: 1,
            username: 'admin',
            token: '0000' 
        });
    }

    static async logout(req: Request, res: Response) {
        return await res.json({ message: 'Logged out' });
    }

    static async authorize(req: Request, res: Response, next: NextFunction) {
        if (req.headers.authorization === 'Bearer 0000') {
            req.userId = 1;
            return next();
        }
        return res.status(401).json({ message: 'Unauthorized' });
    }
}