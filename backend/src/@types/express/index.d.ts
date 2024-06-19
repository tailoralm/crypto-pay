import PaymentIntentionController from "../../modules/api/crud/payment-intention/payment-intention.controller";


declare global {
    namespace Express {
        interface Request{
            paymentIntentionController: PaymentIntentionController;
        }
    }
}