var pixabay = require('pixabay-api')
var key = "20235915-ae4a7fd433d4ee7b7823ec7b5"
const {MessageEmbed} = require ('discord.js');

module.exports = {
    name: 'cow',
    description: 'cow',
    async execute(message, args){
        var r = await pixabay.searchImages(key, 'cow')
        const embed = new MessageEmbed()
        .setTitle("just cow")
        .setImage(r.hits[Math.floor(Math.random()*r.hits.length)].largeImageURL)
        message.channel.send(embed);
    }
}