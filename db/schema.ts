import {AppSchema, appSchema, tableSchema} from '@nozbe/watermelondb';

export enum TableNames {
  DIARY_ENTRY = 'diary_entry',
  NOTE = 'note',
}
export enum TableIds {
  DIARU_ENTRY_ID = 'diary_entry_id',
  NOTE_ID = 'note_id',
}

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'diary_entry',
      columns: [
        {
          name: 'date',
          type: 'number',
        },
      ],
    }),
    tableSchema({
      name: 'todo',
      columns: [
        {
          name: 'entry',
          type: 'string',
        },
        {
          name: 'dairy_entry_id',
          type: 'string',
          isIndexed: true,
        },
        {
          name: 'created_at',
          type: 'number',
        },
      ],
    }),
  ],
});

export default schema;
