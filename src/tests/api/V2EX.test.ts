import { hot } from '../../api/V2EXApi';

test('hot', async () => {
  await hot().then(response => {
    console.log(response);
  });
});
