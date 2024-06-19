import {Telegraf, Context} from 'telegraf';
import TuyaController from "../../shared/io-connectors/tuya/tuya.controller";
import TelegramAuthentication from './authentication.controller'
import * as Utils from './utils';

export default class TelegramBotController {
  private bot;
  constructor(private tuya: TuyaController) {
    this.bot = new Telegraf(process.env.TELEGRAM_TOKEN);
    this.bot.use(TelegramAuthentication.checkAuthorization);
    this.bot.command('start', this.start);
    // this.bot.command('status', this.bedroomStatus.bind(this));
    this.bot.launch();
  }
  start(ctx: Context) {
    const first_name = ctx.from?.first_name;
    ctx.reply(`Hello, ${first_name}! Welcome to theaa bot.`);
  }

  // async bedroomStatus(ctx: Context){
  //   const sensorStatus = await this.tuya.getTempHum(process.env.TUYA_BEDROOM_SENSORID);
  //   ctx.reply(Utils.mainValuesToText(sensorStatus));
  // }


}
