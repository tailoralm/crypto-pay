import PaymentIntentionController from "../../api-modules/payment-intention/payment-intention.controller";


declare global {
    namespace Express {
        interface Request{
            userId: number;
        }
    }
}
