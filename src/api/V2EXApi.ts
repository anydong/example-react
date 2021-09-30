import client from './RequestClient';

export function hot() {
  return client.get('/api/topics/hot.json');
}
