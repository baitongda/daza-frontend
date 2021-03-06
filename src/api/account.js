import Vue from 'vue';

export default {
  // 用户注册
  register(params) {
    const req = Vue.http.post('account/register', params);
    return req.then(response => Promise.resolve(response.data));
  },
  // 用户登录
  login(params) {
    const req = Vue.http.post('account/login', params);
    return req.then((response) => Promise.resolve(response.data));
  },
  // 用户注销
  logout() {
    const req = Vue.http.post('account/logout');
    return req.then(() => Promise.resolve());
  },
  // 当前用户资料
  profile() {
    const req = Vue.http.get('account/profile');
    return req.then((response) => Promise.resolve(response.data));
  },
  // 更新当前登录用户资料
  updateProfile(params) {
    const req = Vue.http.put('account/profile', params);
    return req.then((response) => Promise.resolve(response.data));
  },
  updateConfigs(params) {
    const req = Vue.http.put('account/configs', params);
    return req.then((response) => Promise.resolve(response.data));
  },
  passwordModify(params) {
    const req = Vue.http.post('account/password_modify', params);
    return req.then((response) => Promise.resolve(response.data));
  },
};
