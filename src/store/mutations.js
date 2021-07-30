export const mutations = {
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
};
