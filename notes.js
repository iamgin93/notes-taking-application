const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    const text = 'Your notes...';
    return text;
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title;
    // });

    if(duplicateNotes.length === 0){

        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.green.inverse.bold('New note added!'));
        
    }else{
        console.log(chalk.red.inverse.bold('Duplicate note...Title taken...'));
    }

    saveNotes(notes);
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
        
    }catch{
        return [];
    }
};

const removeNotes = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((item) => item.title !== title);
    console.log(updatedNotes);
   

    if(updatedNotes.length < notes.length){

        const msg = chalk.green.inverse.bold('Item: '+title+ ' removed');
        console.log(msg);
        
    }else{
        console.log(chalk.red.inverse.bold('Item: '+ title+' does not exist'));
    }
    saveNotes(updatedNotes);
};  
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
};
