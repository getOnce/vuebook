<template>
    <section>
        <JdHeader :title="title"></JdHeader>
        <JdContent :content="content"></JdContent>
        <JdFooter :bottom="bottom"></JdFooter>
    </section>
</template>
<script>
import JdHeader from './components/jd-header.vue';
import JdFooter from './components/jd-footer.vue';
import JdContent from './components/jd-content.vue';

export default {
  name: 'app',
 components: {
     JdHeader,
     JdFooter,
     JdContent
 },
 data: function(){
     return {
         title: 'hello world!!!',
         bottom: 'This is bottom!!!',
         content: [
             {
                 title: 'This is list ',
                 index: 1
             },
             {
                 title: 'This is list ',
                 index: 2
             },
             {
                 title: 'This is list ',
                 index: 3
             },
             {
                 title: 'This is list ',
                 index: 4
             }
         ]
     }
 },
  mounted() {

  }
}
</script>