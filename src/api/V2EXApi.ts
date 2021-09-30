import client from './RequestClient';

/**
 * 最热主题
 * 相当于首页右侧的 10 大每天的内容
 */
export function topicsHot() {
  return client.get('/api/topics/hot.json');
}

/**
 * 最新主题
 * 相当于首页的"全部"这个 tab 下的最新内容
 */
export function topicsLatest() {
  return client.get('/api/topics/latest.json');
}

/**
 * 节点信息
 * 获得指定节点的名字、简介，URL 及头像图片的地址
 * @param name 节点名（V2EX 的节点名全是半角英文或者数字）
 */
export function nodesShow(name: string) {
  return client.get('/api/nodes/show.json', { params: { name: name } });
}

/**
 * 用户主页
 * 获得指定用户的自我介绍，及起登记的社交网站信息
 * @param username 用户名
 */
export function membersShowByUsername(username: string) {
  return client.get('/api/members/show.json', {
    params: { username: username },
  });
}

/**
 * 用户主页
 * 获得指定用户的自我介绍，及起登记的社交网站信息
 * @param id 用户在 V2EX 的数字 ID
 */
export function membersShowById(id: number) {
  return client.get('/api/members/show.json', { params: { id: id } });
}
