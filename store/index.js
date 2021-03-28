export const state = () => ({
  img: 'img/11.jpg',
  form: {
    color: 1,
    tassel: 1,
  },
  current: 1,

})

export const mutations = {
  setImg(state, name) {
    console.log(name);
    state.img = 'img/' + name + '.jpg';
  },
  setForm(state, val) {
    state.form.color = val.color;
    state.form.tassel = val.tassel;
  },
  setCurrent(state, val) {
    state.current = val;
  },
}

export const getters = {
    getImg (state) {
      return state.img
    },
    getForm (state) {
      return state.form
  },
  getCurrent(state) {
    return state.current;
  }

}
