<template>
  <section>
      <span>
          {{ bottom }}
      </span>
  </section>
</template>

<script>
export default {
  props: {
      bottom: {
          type: String,
          required: true
      }
  },
  name: 'jd-foorter',
  mounted() {
      console.log('footer mounted!');
  }
}
</script>
