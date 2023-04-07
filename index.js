const readline = require('readline');
const logger = require('./logger');

const logs = new logger('./Logs/LogFile.log');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your first name: ', (firstName) => {
    logs.info(`First Name entered: ${firstName}`);
    rl.question('Enter your last name: ', (lastName) => {
        logs.info(`Last Name entered: ${lastName}`);
        const fullName = `${firstName} ${lastName}`;
        logs.info(`Your full name is: ${fullName}`);
        logs.warn(`Your full name is: ${fullName}`);
        logs.debug(`Your full name is: ${fullName}`);
        logs.error(`Your full name is: ${fullName}`);
        rl.close();
    });
});
