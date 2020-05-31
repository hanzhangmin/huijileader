<template>
  <!-- <keep-alive exclude="fankuilist,fankuilistz,fkdetail"> -->
  <keep-alive exclude="fkdetail,tablepage">
    <router-view></router-view>
  </keep-alive>
</template>
<script>
export default {
  name: "fkindex",
}
</script>
