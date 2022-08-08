'use strict'

require('dotenv').config()
require('./db/mongodb')
const cron = require('node-cron')
const settingsController = require('./controllers/settings.controller')
const bot = require('./telegram_bot/telegram_bot')
const chatId = process.env.CHAT_ID_GROUP

const cronJS = {
    run: () => {
        console.log('cron running . . .')
        cron.schedule('0 */2 * * * *', async () => {
            try {
                const settings = await settingsController.getSettings()
                if (settings.run) {
                    bot.sendMessage(chatId, 'cron task')
                }
            } catch (error) {
                console.log(error)
            }              
        })
    }
}

cronJS.run()