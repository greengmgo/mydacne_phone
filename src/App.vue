<template>

    <router-view />

</template>


<script>
import {provide, ref} from "vue";
import * as echarts from 'echarts'


export default {
  name: 'App',
  setup(){

    },

  components: {

  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
#app{
  background: #f6f1eb;
}
#nav{
  position: sticky;
  top: 0;
  height: 44px;
  width: 100%;
  background: #FF770F;
  color:white;
  font-size: 40px;
  font-family:  黑体, "PingFang SC", 萍方, "Noto Sans", sans-serif;
  text-align: center;
  z-index: 100;
}

.van-nav-bar__title{
  color:white !important;
  font-size: 30px !important;
  font-family:  黑体, "PingFang SC", 萍方, "Noto Sans", sans-serif !important;
}
</style>
