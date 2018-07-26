const package = require('../package.json');
const chalk = require('chalk');
module.exports = client => {
    console.log(chalk.bgGreen(`SCPFBOT ${package.version} loaded`));
}
