import { Context } from "telegraf";

export default class TelegramAuthentication {
  static checkAuthorization = (ctx: Context, next: () => any) => {
    if (ctx.from?.id !== Number(process.env.MY_TELEGRAM_ID)) {
      return ctx.reply('Not Authorized');
    }
    return next();
  };
}
