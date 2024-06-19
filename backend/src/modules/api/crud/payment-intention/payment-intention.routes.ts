import express, {NextFunction, Request, Response} from 'express';
import {resError} from "../../utils";
import PaymentIntentionController from "./payment-intention.controller";

const sensorControllerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.paymentIntentionController = new PaymentIntentionController(req.userId);
    next();
};

const app = express();
app.use(sensorControllerMiddleware);
// endpoint: /payment-intention

app.get('/:id', (req, res) => {
    try {
        req.sensorController.get(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/list', (req, res) => {
    try {
        req.sensorController.getAll(Number(req.query.farmId)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.post('/', (req, res) => {
    try {
        req.sensorController.insert(req.body).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.put('/:id', (req, res) => {
    try {
        req.sensorController.update(Number(req.params.id), req.body).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});

app.delete('/:id', (req, res) => {
    try {
        req.sensorController.delete(Number(req.params.id)).then((data) => res.send(data));
    } catch (e) {
        resError(res, e);
    }
});


export default app;