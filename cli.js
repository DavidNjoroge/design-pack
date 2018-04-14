#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const mkdirp = require('mkdirp')
const cmd = require('node-cmd')

// global variables
 let cmdValue
program
  .option('--no-sauce', 'Remove sauce')
  .arguments('<cmd> [env]')
  .action(function (cmd, env) {
     cmdValue = cmd;
     envValue = env;
  });

program.parse(process.argv)
console.log('Created design pack: ',cmdValue);
if(cmdValue!=undefined){
  main(cmdValue)
}

//this is where the code starts, where 'cmdValue' is the terminal parameter
function main(cmdValue){
  // mkdir(cmdValue,()=>{

  // })
  cmd.get(
    `cp -r design-template ${cmdValue} && cd ${cmdValue}`
  )

}

function mkdir(path, fn) {
  mkdirp(path, 0755, function(err){
    if (err) throw err;
    console.log('   \033[36mcreate\033[0m : ' + path);
    fn && fn();
  });
}