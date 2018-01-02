const fs = require('fs');

var read = () => {

    try {
        var temp = fs.readFileSync('notes.json');
        return JSON.parse(temp);
    } catch(e) {
        return [];
    }

};

var write = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
};

function add (title) {
    var notes = read();
    var note = {
        title
    };

    var duplicate = notes.filter((note) => note.title === title);

    if (duplicate == 0) {

        notes.push(note);
        write(notes);
        return note;

    }

};

function remove (title) {

    var notes = read();
    var filter = notes.filter((note) => note.title !== title);
    write(filter);
    if (filter < notes) return 1;

};

function list () {

    return read();

}

function fetch (title) {

    var notes = read();
    var filter = notes.filter((note) => note.title === title);
    return filter;

}

function log (title) {

    console.log('----');
    console.log(title);

}

module.exports = {
    add,
    remove,
    list,
    fetch,
    log
};
