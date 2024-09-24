import express, {Request, Response} from 'express';
import {resError} from "../utils";
import WalletController from "./wallet.controller";

const app = express();
// endpoint: /wallet

app.get('/list',  (req: Request, res: Response) => {
    try {
        const walletController = new WalletController(req.userId);
        walletController.getAll().then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/:id', (req: Request, res: Response) => {
    try {
        const walletController = new WalletController(req.userId);
        walletController.get(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.put('/:id', (req: Request, res: Response) => {
    try {
        const walletController = new WalletController(req.userId);
        walletController.update(req.body).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});
app.post('/', (req: Request, res: Response) => {
    try {
        const walletController = new WalletController(req.userId);
        walletController.insert(req.body).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.delete('/:id', (req: Request, res: Response) => {
    try {
        const walletController = new WalletController(req.userId);
        walletController.delete(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});


export default app;
