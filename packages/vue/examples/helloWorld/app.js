import {
  onBeforeMount,
  onMounted,
  ref,
  computed
} from '../../dist/vue.esm-browser.js'

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
  // props: {
  //   type: Object,
  //   default: () => ({
  //     name: 'jesse'
  //   })
  // },
  // components: {
  //   HelloWorld
  // },
  template:
    '<div tId=1><p>{{plusOne}}</p><button @click="plus">plus</button></div>',

  setup() {
    const count = ref(0)
    const plusOne = computed(() => {
      debugger
      return count.value + 1
    })

    function plus() {
      count.value++
    }
    return {
      plusOne,
      plus
    }
  }
}
