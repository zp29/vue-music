<template>
  <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(value, key) in qqRes" :key="value.id">
        <a :href="value.linkUrl"><img :src="value.picUrl" class='swiper-img'></a>
      </swiper-slide>
    </swiper>
</template>

<script>
import {sliderUrl} from '@/api/config'
// QQ音乐AP
import { swiper,swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// Swiper轮播图

export default {

  name: 'slider',

  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        loop:true,
      },
      qqRes: []
    }
  },
  mounted() {
    this.$http.jsonp(sliderUrl, {jsonp:'jsonpCallback'})
        .then((res) => {
          // console.log( res.body.data.slider )
          this.qqRes = res.body.data.slider;
          console.log( this.qqRes )
        })
    this.swiper.slideTo(3, 1000, false)
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper, swiperSlide
  }

}
</script>

<style lang="less" scoped>
  .swiper-img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
  }
</style>
