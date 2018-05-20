#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const mkdirp = require('mkdirp')
const TEMPLATE_DIR = path.join(__dirname, 'design-template')
const MODE_0666 = parseInt('0666', 8)

// global variables
 let cmdValue
program
  .arguments('<cmd> [env]')
  .action(function (cmd, env) {
     cmdValue = cmd;
     envValue = env;
  });

program.parse(process.argv)


if(cmdValue!=undefined){
  main(cmdValue)
}else{
  console.log("please write the app name ");
  
}

//this is where the code starts, where 'cmdValue' is the terminal parameter
function main(cmdValue){
  var destinationPath = program.args.shift() || '.'

  mkdir(cmdValue,()=>{

  })

  // const files = ['bootstrap.css','index.html','jquery-3.3.1.min.js','script.js','style.css']

  for(let file of fs.readdirSync(path.join(TEMPLATE_DIR))){
    copyTemplate(path.join(file),path.join(`${cmdValue}/${file}`))
    
  }
}

function copyTemplate (from, to) {
  write(to, fs.readFileSync(path.join(TEMPLATE_DIR, from), 'utf-8'))
}

function write (file, str, mode) {
  fs.writeFileSync(file, str, { mode: mode || MODE_0666 })
  console.log('   \x1b[36mcreate\x1b[0m : ' + file)
}

function mkdir(path, fn) {
  mkdirp(path, 0755, function(err){
    if (err) throw err;
    console.log('   \033[36mcreate\033[0m : ' + path);
    fn && fn();
  });
}