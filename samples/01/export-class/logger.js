class Logger {
    constructor(prefix) {
        this.log = console.log.bind(console, prefix + ">");
        this.warn = console.warn.bind(console, prefix + ">");
        this.error = console.error.bind(console, prefix + ">");
    }
}

module.exports = Logger;
