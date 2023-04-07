const fs = require('fs');

const LogLevel = {
    ERROR: 'error',
    WARN: 'warn',
    INFO: 'info',
    DEBUG: 'debug',
};

class Logger {
    constructor(filePath) {
        this.filePath = filePath;
    }

    log(level, message) {
        const logString = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}\n`;
        fs.appendFile(this.filePath, logString, (err) => {
            if (err) {
                console.error(`Failed to write to log file: ${err.message}`);
            }
        });
    }

    error(message) {
        this.log(LogLevel.ERROR, message);
    }

    warn(message) {
        this.log(LogLevel.WARN, message);
    }

    info(message) {
        this.log(LogLevel.INFO, message);
    }

    debug(message) {
        this.log(LogLevel.DEBUG, message);
    }
}

module.exports = Logger;