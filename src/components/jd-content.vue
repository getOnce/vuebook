<template>
  <ul>
      <li v-for="item in content">
          {{item.title}}
      </li>
  </ul>
</template>
<script>
export default {
  props: {
      content: {
          type: Array,
          required: true
      }
  },
  name: 'jd-content',
  mounted: function(){
      console.log('content mounted!')
  }

}
</script>

