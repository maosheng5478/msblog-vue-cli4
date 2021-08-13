export const mutations = {
  setUserId(state, id) {
    state.user_id = id;
    sessionStorage.setItem('userId', id);
  },
  setUsername(state, username) {
    state.username = username;
    sessionStorage.setItem('username', username);
  },
  setCodeKey(state, code) {
    state.code_key = code;
  },
  setUserToken(state, token) {
    state.user_token = token;
    sessionStorage.setItem('token', token);
  },
  setUserPhone(state, phone) {
    state.user_phone = phone;
    sessionStorage.setItem('phone', phone);
  },
  setUserEmail(state, email) {
    state.user_email = email;
    sessionStorage.setItem('email', email);
  },
  setUserSex(state, sex) {
    state.user_sex = sex;
    sessionStorage.setItem('sex', sex);
  },
  setUserIntroduction(state, introduction) {
    state.user_introduction = introduction;
    sessionStorage.setItem('introduction', introduction);
  },
  setCreateTime(state, createTime) {
    state.user_createTime = createTime;
    sessionStorage.setItem('createTime', createTime);
  },
  setPermissionMenu(state, menu) {
    state.permission_menu = menu;
  }
};
