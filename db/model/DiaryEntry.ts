import {Model, Query} from '@nozbe/watermelondb';
import {TableIds, TableNames} from '../schema';
import {children, date} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Note from './Note';

export default class DiaryEntry extends Model {
  static table = 'diary_entry';
  static associations: Associations = {
    [TableNames.NOTE]: {type: 'has_many', foreignKey: TableIds.NOTE_ID},
  };

  @date('date') date!: Date;
  @children('note') notes!: Query<Note>;
}
