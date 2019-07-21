module.exports = () => {
    // Uncaught exceptions
    process.on('uncaughtException', (ex) => { console.log(ex.message, ex); process.exit(1); });
    // Uncaught exceptions
    process.on('unhandledRejection', (ex) => { console.log(ex.message, ex); process.exit(1); });

}