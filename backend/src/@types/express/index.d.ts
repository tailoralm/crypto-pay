import PaymentIntentionController from "../../modules/api/payment-intention/payment-intention.controller";


declare global {
    namespace Express {
        interface Request{
            userId: number;
        }
    }
}
