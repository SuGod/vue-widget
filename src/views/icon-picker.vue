<template>
  <el-popover :width="this.pickerWidth" @show="popoverToggle" @hide="popoverToggle">
    <div class="icon-box">
      <el-button
        class="icon-item"
        v-for="icon in icons"
        :key="icon"
        size="mini"
        circle
        :icon="icon"
        @click="handleSelect(icon)"
      />
    </div>
    <div class="picker-group" slot="reference">
      <div class="picker"><i :class="selectedIcon"></i>&nbsp;&nbsp;{{selectedIcon}}</div>
      <span class="picker-suffix"><i :class="['el-icon-dc-up',{'is-reverse':isReverse}]"></i></span>
    </div>
  </el-popover>
</template>

<script>
  import iconsData from './icons'

  export default {
    data () {
      return {
        selectedIcon: 'el-icon-dc-earth',
        icons: iconsData,
        pickerWidth: 0,
        isReverse: false
      }
    },
    methods: {
      computePickerWidth () {
        let width = Math.floor(document.querySelector('.picker').clientWidth * 0.8)
        this.pickerWidth = width < 200 ? 200 : width
      },
      handleSelect (icon) {
        this.selectedIcon = icon
      },
      popoverToggle () {
        this.isReverse = !this.isReverse
      }
    },
    mounted () {
      this.computePickerWidth()
    }
  }
</script>
<style scoped lang="stylus">
  @import "~@/assets/iconfont/iconfont.css"
  .picker-group
    position relative
    .picker
      cursor pointer
      width 100%
      border-radius 4px
      border 1px solid #dcdfe6
      box-sizing border-box
      color #606266
      display inline-block
      font-size inherit
      height 40px
      line-height 40px
      outline 0;
      padding 0 15px
      transition border-color .2s cubic-bezier(.645, .045, .355, 1)
      padding-right 30px
    .picker-suffix
      position absolute
      height 100%
      right 5px
      top 0
      text-align center
      color #c0c4cc
      transition all .3s
      pointer-events none
      i
        width 25px
        line-height 40px
        color #c0c4cc
        font-size 14px
        transition transform .3s
        transform rotate(180deg)
        cursor pointer
        &.is-reverse
          transform rotate(0)

  .icon-box
    display flex
    flex-wrap wrap
    max-height 400px
    overflow-y auto
    .icon-item
      margin 5px

</style>
