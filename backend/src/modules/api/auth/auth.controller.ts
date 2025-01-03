import { Request, Response, NextFunction } from 'express';
export default class AuthController {
    static login(req: Request, res: Response) {
        res.json({
            userId: 1,
            username: 'admin',
            token: '0000' 
        });
    }

    static logout(req: Request, res: Response) {
        res.json({ message: 'Logged out' });
    }

    static authorize(req: Request, res: Response, next: NextFunction) {
        if (req.headers.authorization === 'Bearer 0000') {
            req.userId = 1;
            return next();
        }
        res.status(401).json({ message: 'Unauthorized' });
    }
}