<template>
  <div>
    hello app-{{ myname }}
    <!-- 路由容器 -->
    <router-view></router-view>
    <!-- <img src = "/giphy.gif"> -->
    <input type="text" v-model="mytext" />
    <button @click="handleAdd()">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{ data }}
      </li>
    </ul>
    <navbar myname="home" :myright="isShow" @event="handleEvent">
      <div>11111111</div>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
    <div v-hello>1111111111111111111</div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import sidebar from "./components/SideBar";
import Vue from "vue";
import axios from "axios";
Vue.component("navbar", navbar);
Vue.component("sidebar", sidebar);
Vue.directive("hello", {
  inserted(el, binding) {
    console.log(el);
    el.style.border = "1px solid black";
  },
});
// ES6导出规范
export default {
  data() {
    return {
      myname: "LCC",
      mytext: "",
      datalist: [],
      isShow: true,
    };
  },
  methods: {
    handleAdd() {
      console.log(this.mytext);
      this.datalist.push(this.mytext);
    },
    handleEvent() {
      this.isShow = !this.isShow;
    },
  },
  computed: {},
  watch: {},
  mounted() {
    axios
      .get(
        "api/mmdb/movie/v3/list/hot.json?ct=%E9%83%91%E5%B7%9E&ci=73&channelId=4"
      )
      .then((res) => {
        console.log(res.data);
      }),
      axios
      .get(
        "/lcc/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=75E48D00880511ED81F2BD01FF980A4C0EB274D4416C42F9B20DA4D4D391E33B&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res.data);
      });;
  },
};
</script>

<style lang="scss" scoped>
// scoped 局部作用域
$w: 300px;
ul li {
  background: rgb(43, 211, 226);
  width: $w;
}
</style>