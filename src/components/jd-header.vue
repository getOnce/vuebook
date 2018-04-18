<template>
  <section>
      <span>{{title}}</span>
  </section>
</template>
<script>
export default {
    name: 'jd-header',
    mounted: function(){
        console.log('header mounted !!!')
    },
    props: {
      title: {
          type: String
      }
  }
}
</script>

