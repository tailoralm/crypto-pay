import express from 'express';
import AuthController from "./auth/auth.controller";
import PaymentIntention from "./payment-intention/payment-intention.routes";
import Settings from "./settings/settings.routes";
import Wallet from "./wallet/wallet.routes";
import cors from 'cors';

const app = express();
app.use(cors());

// app.all('*', applyCors);
app.get('/login', AuthController.login);

app.use(AuthController.authorize);
app.get('/logout', AuthController.logout);

// CRUD ROUTES
app.use('/payment-intention', PaymentIntention);
app.use('/settings', Settings);
app.use('/wallet', Wallet);

if(process.env.IS_DEV === 'true') app.use('/moralis-tester', require('./moralis-tester/moralis-tester.routes').default);

export default app;
