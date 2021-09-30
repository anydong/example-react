import V2EXApi, { membersShowById } from '../../api/V2EXApi';

test('topicsHot', async () => {
  await V2EXApi.topicsHot().then(response => {
    console.log(response);
  });
});

test('membersShowByUsername', async () => {
  await V2EXApi.membersShowByUsername('Livid').then(response => {
    console.log(response.data);
  });
});

test('membersShowById', async () => {
  await membersShowById(1).then(response => {
    console.log(response.data);
  });
});
