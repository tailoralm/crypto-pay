import express, {Request, Response} from 'express';
import {resError} from "../utils";
import PaymentIntentionController from "./payment-intention.controller";

const app = express();
// endpoint: /payment-intention

app.get('/:id', (req: Request, res: Response) => {
    try {
        const paymentIntentionController = new PaymentIntentionController(req.userId);
        paymentIntentionController.get(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/list',  (req: Request, res: Response) => {
    try {
        const paymentIntentionController = new PaymentIntentionController(req.userId);
        paymentIntentionController.getAll().then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.put('/:id', (req: Request, res: Response) => {
    try {
        const paymentIntentionController = new PaymentIntentionController(req.userId);
        paymentIntentionController.update(req.body).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});
app.post('/', (req: Request, res: Response) => {
    try {
        const paymentIntentionController = new PaymentIntentionController(req.userId);
        paymentIntentionController.insert(req.body).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.delete('/:id', (req: Request, res: Response) => {
    try {
        const paymentIntentionController = new PaymentIntentionController(req.userId);
        paymentIntentionController.delete(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});


export default app;
