import {MySqlDataSource} from '../datasources';
const ds = new MySqlDataSource();

ds.automigrate('User', (err: any) => {
  if (err) throw err;

  console.log('Models migrated');
  ds.disconnect();
});
