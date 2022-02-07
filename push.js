var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOZCK9rEgjyyxhYrN4w7SnX--LAKihTasUYkW9Vs16F_r0M-vP3JsPGeNxcEU_8RgE4QDqYQSSJOYZtU58kJVB4',
    privateKey: 'JoPWQMjMZgcFQXilmNtFgD7GHGMqtwtS7vG4liCjihw'
  }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, 'test msg')