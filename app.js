const validator = require('validator').default;
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require("yargs");
// var http = require('http');
// import validator from 'validator';
// console.log(getNotes());
// console.log(validator.isEmail("test@gmail.com"));

// const greenMsg = chalk.red.inverse.bold("error");
// console.log(greenMsg);
// console.log(process.argv);
// const command = process.argv[2];
// if(command === "add"){
//     console.log("Adding note");
// }else{
//     console.log("Removing note");
// }
yargs.version("1.1.0");

//Create a add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note list",
            demandOption: true,
            type: "string"
        }   
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body);
        console.log("Title: ",argv.title);
        console.log("Body: ",argv.body);
    }
});

//Create a remove command
yargs.command({
    command: 'remove',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
        console.log("Removing a note");
    }
    
});

//Create a list command
yargs.command({
    command: "list",
    describe: "List a note",
    handler(){
        console.log("List a note");
    }
});
//Create a read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler(){
        console.log("Read a note");
    }
});
// console.log(yargs.argv);
yargs.parse();