import { createStore } from 'vuex'

export default createStore({
  state: {
    profile: {
      name: {
        kor: '최범수',
        eng: 'Choi Bumsu',
      },
      email: 'bumsu0211@gmail.com',
      phone: '010-7408-0064',
    },
    urls: {
      github: 'https://github.com/choibumsu',
      instagram: 'https://www.instagram.com/bbamsu211/?hl=ko',
      facebook: 'https://www.facebook.com/bum0211',
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
