const notes = require('./notes.js');
const yargs = require('yargs');
const command = process.argv[2];

const option = {

    describe : 'Title of task',
    demand : true,
    alias : 't'

};

const args = yargs.command('add', 'Add a task', {

    title : option,

}).command('remove', 'Remove a task', {

    title : option,

}).command('list', 'List all tasks').command('fetch', 'Fetch a task', {

    title : option,

}).help().argv;


if (command === 'add') {

    var note = notes.add(args.title);
    note == undefined ? notes.log('Task already exist.') : notes.log('Task added.');

}

else if (command === 'remove') {

    var note = notes.remove(args.title);
    note == undefined ? notes.log('Task not found.') : notes.log('Task removed.');

}

else if (command === 'list') {

    var note = notes.list();
    note.forEach((note) => notes.log(note));

}

else if (command === 'fetch') {

    var note = notes.fetch(args.title);
    notes.log(note);

}
