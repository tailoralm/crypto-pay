import express, {Request, Response} from 'express';
import {resError} from "../utils";
import SettingsController from "./settings.controller";

const app = express();
// endpoint: /settings

app.get('/:id', (req: Request, res: Response) => {
    try {
        const settingsController = new SettingsController(req.userId);
        settingsController.get().then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.put('/:id', (req: Request, res: Response) => {
    try {
        const settingsController = new SettingsController(req.userId);
        settingsController.update(req.body).then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.delete('/:id', (req: Request, res: Response) => {
    try {
        const settingsController = new SettingsController(req.userId);
        settingsController.delete().then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.post('/wallet', (req: Request, res: Response) => {
    try {
        const settingsController = new SettingsController(req.userId);
        settingsController.insertWallet(req.body).then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.put('/wallet', (req: Request, res: Response) => {
    try {
        const settingsController = new SettingsController(req.userId);
        settingsController.updateWallet(req.body).then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});


export default app;
