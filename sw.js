self.addEventListener('push', ()=>{
    self.registraion.sendNotification('test message', {});
});