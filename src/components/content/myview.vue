<template>
  <viewer :images="imgs"
          :option="options">
    <div class="imgbox"
         v-for="(src,index) in imgs"
         :key="index">
      <img :src="src"
           :key="src" />
    </div>
  </viewer>
</template>
<script>
export default {
  name: "myview",
  props: {
    imgs: Array
  },
  data () {
    return {
      Options: {
        "inline": true,
        "button": false,
        "navbar": false,
        "title": false,
        "toolbar": false,
        "tooltip": false,
        "movable": false,
        "zoomable": true,
        "rotatable": false,
        "scalable": true,
        "transition": true,
        "fullscreen": true,
        "keyboard": true,
        "url": "data-source"
      }
    }
  },
}
</script>