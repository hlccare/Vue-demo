// import Vue from 'vue'
const Vue = window.Vue
window.Vue.config.productionTip = false
import Demo from './demo.vue'

Vue.component('Demo2',{
  template:`
    <div>demo2</div>
  `
})

new Vue({
  components:{
    Frank: Demo
  },
  data:{
    n:0,
    array: [1,2,3,4,5,6,7,8]
  },
  template:`
    <div class="red">
      {{n}}
      <button @click="add">+1</button>
      <Frank/>
      <Demo2/>
      <hr>
      {{filter()}}
    </div>
  `,
  methods:{
    add(){
      this.n += 1
    },
    filter(){
      console.log('filter')
      return this.array.filter(i => i%2 ===0)
    }
  }
}).$mount('#app')
