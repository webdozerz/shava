import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
  },
  getters: {
  },
  mutations: {
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    },
    clearCount(state){
      state.cartCount = 0;
      this.commit('saveCart');
    },
    addToUserCart(state, payload) {
      state.cart.push({
        id: payload.id,
        title: payload.title,
        shavaSize: payload.shavaSize,
        shavaSouses: payload.shavaSouses,
        shavaAddes: payload.shavaAddes,
        zakuski: payload.zakuski,
        drinks: payload.drinks,
        sousForPotatoe:  payload.sousForPotatoe,
        caramelOne: payload.caramelOne, 
        caramelTwo: payload.caramelTwo,
        caramelThree: payload.caramelThree, 
        caramelFour: payload.caramelFour,
        spicyLevel: payload.spicyLevel,
        change: payload.change,
        totalShavaPRice: payload.totalShavaPRice
      })
      state.cartCount++;
      this.commit('saveCart');
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      if (index > -1) {
        state.cartCount -= 1;
        state.cart.splice(index, 1);
      }
      this.commit('saveCart');
    },
  },
  actions: {

  },
  modules: {}
})