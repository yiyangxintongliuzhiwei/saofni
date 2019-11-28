<template>
     <div>
        <div class="box scrollParentEle" v-scroll="handleScroll">
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
            <li>123123213231313</li>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
  },

  methods: {
    handleScroll() {
      console.log('翻页')
    }
  }
}
</script>

<style lang="less">
.box {
    height:400px;
    overflow: auto;
}
</style>