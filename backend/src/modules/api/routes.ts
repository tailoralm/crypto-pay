import express from 'express';
import AuthController from "./auth/auth.controller";
import PaymentIntention from "./payment-intention/payment-intention.routes";
import Settings from "./settings/settings.routes";

const app = express();

// app.all('*', applyCors);
app.get('/login', AuthController.login);

app.use(AuthController.authorize);
app.get('/logout', AuthController.logout);

// CRUD ROUTES
app.use('/payment-intention', PaymentIntention);
app.use('/settings', Settings);

export default app;
