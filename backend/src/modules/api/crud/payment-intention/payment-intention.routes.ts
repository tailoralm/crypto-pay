import express, {NextFunction, Request, Response} from 'express';
import {resError} from "../../utils";
import PaymentIntentionController from "./payment-intention.controller";

const paymentIntentionMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.paymentIntentionController = new PaymentIntentionController(req.userId);
    next();
};

const app = express();
app.use(paymentIntentionMiddleware);
// endpoint: /payment-intention

app.get('/:id', (req, res) => {
    try {
        req.paymentIntentionController.get(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/list', (req, res) => {
    try {
        req.paymentIntentionController.getAll(Number(req.query.farmId)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.put('/:id', (req, res) => {
    try {
        req.paymentIntentionController.update(Number(req.params.id), req.body).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.delete('/:id', (req, res) => {
    try {
        req.paymentIntentionController.delete(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});


export default app;