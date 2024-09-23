import express, {Request, Response} from 'express';
import {resError} from "../utils";
import BlockchainScanFactory from "../../shared/services/blockchain/blockchain-scan.factory";

const app = express();

app.get('/price', (req: Request, res: Response) => {
    try {
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getPrice('0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0').then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/balance', (req: Request, res: Response) => {
    try {
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getBalance('0xDC24316b9AE028F1497c275EB9192a3Ea0f67022').then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/tokenBalance', (req: Request, res: Response) => {
    try {
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getTokenBalance('0xDC24316b9AE028F1497c275EB9192a3Ea0f67022', '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE').then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

export default app;