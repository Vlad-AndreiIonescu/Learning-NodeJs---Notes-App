const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return "your notes..";
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notestokeep = notes.filter((note) => note.title !== title); //in cazul in care titlul specificat
  //difera de titlul unei notite, aceasta va fi pastrata
  if (notes.length > notestokeep.length) {
    console.log("note removed");
    saveNotes(notestokeep); //apelam functia de salvare
  } else {
    console.log("no note found");
  }
};

const addNote = (title, body) => {
  const notes = loadNotes(); //stocam in var notes ce exista deja in loadNotes
  const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      //adaugam in array noua notita
      title: title,
      body: body,
    });

    saveNotes(notes); //apelam functia de salvare
    console.log("New note added");
  } else {
    console.log("Note title is already taken, try again");
  }
};

const saveNotes = (notes) => {
  //functia de salvare primeste ca parametru array ul de notite
  // la care deja s-a adugat prin push(OBIECT)
  const dataJson = JSON.stringify(notes); //il transformam in Json
  fs.writeFileSync("notes.json", dataJson); //cream fisierul in care sa scrie json-ul
};

const loadNotes = () => {
  //luam datele din fisier
  try {
    const dataBuffer = fs.readFileSync("notes.json"); //le citim si le avem in varianta Buffer(biti)
    const dataJson = dataBuffer.toString(); //transformam din biti in json
    return JSON.parse(dataJson); //transformam din json in obiect
  } catch (e) {
    //in cazul in care fisierul nu exista(ca noi citim dintr un fisier) ne returneaza un array gol
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (duplicateNote) {
    console.log(duplicateNote);
  } else {
    console.log(chalk.red("No note found"))
  };
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
