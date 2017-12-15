console.log('ToDo App');

const ext = require('./ext.js');
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

    var note = ext.add(args.title);
    note == undefined ? ext.log('Task already exist.') : ext.log('Task added.');

}

else if (command === 'remove') {

    var note = ext.remove(args.title);
    note == undefined ? ext.log('Task not found.') : ext.log('Task removed.');

}

else if (command === 'list') {

    var note = ext.list();
    note.forEach((note) => ext.log(note));

}

else if (command === 'fetch') {

    var note = ext.fetch(args.title);
    ext.log(note);

}
