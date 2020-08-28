

<template>
  <div>
    <div class="flexbox">
      <div class="flexsize1">
        <membertype />

      </div>
      <div class="flexsize1">
        <membervillage />
      </div>
    </div>
    <div class="flexbox">
      <div class="flexsize1">
        <membertownpie />
      </div>
      <div class="flexsize1">
        <membertownbar />
      </div>
    </div>
    <!-- <memberArea /> -->
  </div>
</template>
<script>
import membervillage from './membervillage'
import membertownbar from './membertownbar'
import membertownpie from './membertownpie'
import membertype from './membertowntype'
import memberArea from './memberarea'
export default {
  name: "PartyMembers",
  components: {
    membervillage,
    membertownbar,
    membertownpie,
    memberArea,
    membertype
  },
}
</script>

<style>
</style>