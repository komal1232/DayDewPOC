import {Model, associations} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';
import {date, relation, text} from '@nozbe/watermelondb/decorators';
import {TableIds, TableNames} from '../schema';

export default class Note extends Model {
  static table = 'note';
  static associations: Associations = {
    [TableNames.DIARY_ENTRY]: {
      type: 'belongs_to',
      key: TableIds.DIARU_ENTRY_ID,
    },
  };

  @date('created_at') createdAt!: Date;
  @text('entry') entry!: string;

  @relation(TableNames.DIARY_ENTRY, TableIds.DIARU_ENTRY_ID) diary_entry: any;
}
