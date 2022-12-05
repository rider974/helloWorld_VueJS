const app = createApp ({
    data (){
        return {
            helloWorld: "Hello World !"
        }
    },
    template: "<div>{{ helloWorld }}</div>",
})
app.mount('#app')

import MyComponent from './app.vue'

export default {
  components: {
    MyComponent
  }
}

