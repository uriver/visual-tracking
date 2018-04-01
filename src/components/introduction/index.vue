<template>
  <div>
      <Headerx></Headerx>
      <HomePage v-if="category === 0"></HomePage>
      <Document v-if="category === 1"></Document>

      <Footerx v-if="category === 0"></Footerx>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Headerx from './Header'
import Footerx from './Footer'
import HomePage from './HomePage'
import Document from './Document'
export default {
  components: {
      Headerx,
      Footerx,
      HomePage,
      Document
  },
  computed: {
    ...mapState([
      'category'
    ])
  }
}
</script>

<style>

</style>
