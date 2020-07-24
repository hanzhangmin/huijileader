<template>
  <div>
    <fankuisum></fankuisum>
    <FeedbackTable></FeedbackTable>
  </div>
</template>
<script>
import fankuisum from "./fankuisum.vue"
import FeedbackTable from 'components/content1/FeedbackTable'
export default {
  name: "suggestion",
  components: {
    fankuisum,
    FeedbackTable
  }
}
</script>
