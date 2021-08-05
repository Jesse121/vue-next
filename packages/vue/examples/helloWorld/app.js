import { onBeforeMount, onMounted, ref } from '../../dist/vue.esm-browser.js'

const HelloWorld = {
  name: 'HelloWorld',
  template: '<div tId="helloWorld">hello world:count {{count}}</div>',
  setup() {
    const count = ref(0)
    window.count = count
    onMounted(() => {
      console.log('component onMounted')
    })
    return { count }
  }
}

export default {
  name: 'App',
  props: {
    type: Object,
    default: () => ({
      name: 'jesse'
    })
  },
  components: {
    HelloWorld
  },
  template: '<div tId=1><p>主页</p><HelloWorld/></div>',
  setup() {
    onBeforeMount(() => {
      console.log('beforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
  }
}
