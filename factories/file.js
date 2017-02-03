var Factory = require('rosie').Factory;
var Chance = require('chance')
var chance = new Chance();

module.exports = new Factory()
    .sequence('id')
    .attrs({
        prefix: () => chance.word() + '/' + chance.word(), //Trailing slashes will be stripped
        preview_url: () => chance.url({extensions: ['gif', 'jpg', 'png', 'mov', 'doc', 'pdf']}),
        name: () => /[^/]*$/.exec(chance.url({extensions: ['gif', 'jpg', 'png', 'mov', 'doc', 'pdf']}))[0],
        size: () => chance.integer({min: 1, max: 99999999}),
        mime: () => chance.pickone(['audio/aac', 'application/x-abiword', 'application/octet-stream', 'text/csv', 'image/gif'])
    })
    .attr('location', ['prefix', 'name'], (prefix, name) => {
        return prefix + '/' + name;
    });