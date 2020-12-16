const {NodeVM} = require('vm2');

// create the NodeVM outside the handler
const vm = new NodeVM({
    require: {
        builtin: ['fs', 'path']
    }
});

const handler = async event => {
    console.log('Starting NodeVM');

    // run the NodeVM code
    let sandbox = vm.run("module.exports = function(msg) { console.log('return from nodevm: '+ msg); }");
    sandbox('success');

    console.log('Finished NodeVM');}

module.exports = { handler };
