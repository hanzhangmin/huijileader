<template>
  <div>
    <fankuisum v-if="$store.state.level===0"></fankuisum>
    <sugtown v-else></sugtown>
    <!-- <sugtown></sugtown> -->
  </div>
</template>
<script>
import fankuisum from "./fankuisum"
import sugtown from './sugtown'
export default {
  name: "suggestion",
  components: {
    fankuisum,
    sugtown
  }
}
</script>
