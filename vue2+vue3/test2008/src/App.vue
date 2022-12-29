<template>
  <div>
    hello app-{{myname}}
    <input type = "text" v-model="mytext">
    <button @click="handleAdd()">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
      {{data}}</li>
    </ul>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import Vue from 'vue'
Vue.component('navbar',navbar)
// ES6导出规范
export default{
  data(){
    return{
      myname:"LCC",
      mytext:"",
      datalist:[]
    }
  },methods:{
    handleAdd(){
      console.log(this.mytext)
      this.datalist.push(this.mytext)
    }
  },
  computed:{

  },
  watch:{

  }
}

</script>

<style lang="scss">
 $w:300px;
ul li{
  background:yellow;
  width: $w;
}
</style>