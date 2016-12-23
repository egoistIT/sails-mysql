//   ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗██╗     ███████╗
//  ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║██║     ██╔════╝
//  ██║     ██║   ██║██╔████╔██║██████╔╝██║██║     █████╗
//  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║██║     ██╔══╝
//  ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║███████╗███████╗
//   ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝
//
//  ███████╗████████╗ █████╗ ████████╗███████╗███╗   ███╗███████╗███╗   ██╗████████╗
//  ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝
//  ███████╗   ██║   ███████║   ██║   █████╗  ██╔████╔██║█████╗  ██╔██╗ ██║   ██║
//  ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║
//  ███████║   ██║   ██║  ██║   ██║   ███████╗██║ ╚═╝ ██║███████╗██║ ╚████║   ██║
//  ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
//
// Transform a Waterline Query Statement into a SQL query.

var MySQL = require('machinepack-mysql');

module.exports = function compileStatement(statement) {
  var report = MySQL.compileStatement({
    statement: statement
  }).execSync();

  return report.nativeQuery;
};
