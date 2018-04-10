#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');

//  fs.readFile(path.resolve(__dirname,'texts.txt'),(err,data)=>{
//      let readData = data.toString()
//      console.log(readData);
//  })

 let cmdValue
program
  .option('--no-sauce', 'Remove sauce')
  .arguments('<cmd> [env]')
  .action(function (cmd, env) {
     cmdValue = cmd;
     envValue = env;
  });
program.parse(process.argv)
console.log('my command',cmdValue);
// if(cmdValue==undefined)