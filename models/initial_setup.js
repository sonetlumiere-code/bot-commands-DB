'use strict'

const Setting = require('./settings.model')

const initialSetup = {
    createSettings: async () => {
        try {
            const count = await Setting.estimatedDocumentCount()
            if (count > 0) return
            const values = await Promise.all([
                new Setting({ run: true, gain: 0.99 }).save(),
            ])
            console.log('initial setup: ', values)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = initialSetup