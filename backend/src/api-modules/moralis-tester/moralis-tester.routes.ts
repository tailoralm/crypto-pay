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

app.get('/transactionList', (req: Request, res: Response) => {
    try {
        const endTime = new Date().getTime();
        const startTime = endTime - 1000 * 60 * 20;
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getTransactionList('0xDC24316b9AE028F1497c275EB9192a3Ea0f67022', startTime, endTime).then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});


export default app;
