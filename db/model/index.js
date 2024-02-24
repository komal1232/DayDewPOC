const {Database} = require('@nozbe/watermelondb');
const {default: DiaryEntry} = require('./DiaryEntry');
const {default: Note} = require('./Note');

const databse = new Database({
  modelClasses: [Note, DiaryEntry],
});
