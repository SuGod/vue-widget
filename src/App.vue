<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" router mode="horizontal" @select="handleSelect">
        <el-menu-item index="icon-picker">图标选择器</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data(){
      return {
        activeIndex: 'icon-picker',
      }
    },
    methods:{
      handleSelect(){

      }
    }
  }
</script>
