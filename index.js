/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Platform} from 'react-native';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import DiaryEntry from './db/model/DiaryEntry';
import schema from './db/schema';
import migrations from './db/migrations';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: error => {
    console.log('komal error on db setUp');
  },
});

const database = new Database({
  adapter,
  modelClasses: [DiaryEntry],
});

AppRegistry.registerComponent(appName, () => App);
