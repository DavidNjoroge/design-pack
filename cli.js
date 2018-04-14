#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const mkdirp = require('mkdirp')
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
if(cmdValue!=undefined){
  main(cmdValue)
}

function main(cmdValue){
  mkdir(cmdValue,()=>{

  })
}

function mkdir(path, fn) {
  mkdirp(path, 0755, function(err){
    if (err) throw err;
    console.log('   \033[36mcreate\033[0m : ' + path);
    fn && fn();
  });
}