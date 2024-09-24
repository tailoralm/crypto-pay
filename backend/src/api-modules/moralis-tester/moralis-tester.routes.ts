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
        const endTime = new Date();
        const startTime = new Date(endTime.getTime() - 20 * 60000)
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getTransactionList('0xd0ce9350410954e3cd6b2b1a39eff26dddbb9638', startTime, endTime).then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/transactionTokenList', (req: Request, res: Response) => {
    try {
        const endTime = new Date();
        const startTime = new Date(endTime.getTime() - 20 * 60000)
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getTransactionTokenList('0xc50DA6efE63eBE4b5556aEcaac76e44bfEC63B2c', '0xdac17f958d2ee523a2206206994597c13d831ec7', startTime, endTime).then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

app.get('/transactionByHash', (req: Request, res: Response) => {
    try {
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getTransactionByHash('0xdabe0986171894c6c21fd87c2d203495e0c226443bb8545137840b0be1333a13').then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});


app.get('/blockNumberByTimestamp', (req: Request, res: Response) => {
    try {
        const ethPrice = BlockchainScanFactory.createMoralisETHService();
        ethPrice.getNumberBlockByTimestamp(new Date('Sep-24-2024 02:10:35 PM UTC').getTime()).then((data) => res.json(data));
    } catch (e) {
        resError(res, e);
    }
});

export default app;
