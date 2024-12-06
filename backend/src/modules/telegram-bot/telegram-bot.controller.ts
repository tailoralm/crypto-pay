import {Telegraf, Context} from 'telegraf';
import TelegramAuthentication from './authentication.controller'

export default class TelegramBotController {
  private bot;
  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_TOKEN);
    this.bot.use(TelegramAuthentication.checkAuthorization);
    this.bot.command('start', this.start);
    this.bot.launch();
  }
  start(ctx: Context) {
    const first_name = ctx.from?.first_name;
    ctx.reply(`Hello, ${first_name}! Welcome to theaa bot.`);
  }


}
