import { membersShowByUsername, topicsHot } from '../../api/V2EXApi';

test('topicsHot', async () => {
  await topicsHot().then(response => {
    console.log(response);
  });
});

test('membersShow', async () => {
  await membersShowByUsername('Livid').then(response => {
    console.log(response.data);
  });
});
