<template>
  <v-container fluid>
    <v-row>
      <v-container fluid>
        <v-row>
          <v-carousel hide-delimiters cycle interval="3000" show-arrows-on-hover :height="sliderHeight()" dark>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" :lazy-src="`https://dummyimage.com/1920x800/000/000.jpg`"></v-carousel-item>
          </v-carousel>
        </v-row>
      </v-container>
      <v-container fluid style="margin-top: -25px;">
        <v-row>
        <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9" class="leftSide">
          <v-row>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" align-self="center">
              <v-row>
                <v-col class="text-right" xs="2" sm="2" md="4" lg="4" xl="4" cols="2">
                  <v-icon icon right color="#d7b56d">mdi-phone</v-icon>
                </v-col>
                <v-col xs="10" sm="10" md="10" lg="8" xl="8">
                  <p class="font">8 3822 23‒92‒88</p>
                  <p class="body-2 font-weight-light">Сделайте предзаказ сейчас</p>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" align-self="center">
              <v-row>
                <v-col class="text-right" xs="2" sm="2" md="4" lg="4" xl="4" cols="2">
                  <v-icon icon right color="#d7b56d">mdi-map-marker-radius-outline</v-icon>
                </v-col>
                <v-col xs="10" sm="10" md="8" lg="8" xl="8">
                  <p class="font">Ленина проспект, 22а</p>
                  <p class="body-2 font-weight-light">Приходи, накормим</p>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" align-self="center">
              <v-row>
                <v-col class="text-right" xs="2" sm="2" md="4" lg="4" xl="4" cols="2">
                  <v-icon icon right color="#d7b56d">mdi-clock-time-nine-outline</v-icon>
                </v-col>
                <v-col xs="10" sm="10" md="8" lg="8" xl="8">
                  <p class="font">Открыты с 09:00 до 22:00</p>
                  <p class="body-2 font-weight-light">Воскресенье выходной</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col xs="12" sm="12" md="3" lg="3" xl="3" class="rightSide" >
          <v-row >

            <v-col cols="12" sm="12" class="text-left">
              <v-btn v-for="(item,i) in socialLinks" :key="i" class="ma-7 white--text" dark icon :href="item.href"
                target="blank">
                <v-icon size="24px" color="black">{{ item.icon }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
      </v-container>

      <Shava />

      <v-snackbar v-model="alert" color="info">
        Спасибо за Ваш заказ!
        <v-btn color="white" text @click="alert = false">
          <v-icon icon right>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>

    </v-row>
  </v-container>


</template>

<script>
  import Shava from '@/views/Shava.vue';

  import Vue from 'vue'
  Vue.prototype.$eventBus = new Vue();

  export default {
    data: () => ({
      alert: false,
      items: [{
          src: require('@/assets/banner1.jpg')
        },
        {
          src: require('@/assets/banner2.jpg')
        },
        {
          src: require('@/assets/banner3.jpg')
        },
        {
          src: require('@/assets/banner4.jpg')
        },
      ],
    }),
    name: 'Home',
    components: {
      Shava,
    },
    methods: {
      alertOn(){
        this.alert = true;
      },
      sliderHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '250px';
          case 'sm': return '400px';
          case 'md': return '500px';
          case 'lg': return '720px';
          case 'xl': return '720px';
        }
      },
    },
    computed: {
      socialLinks() {
        return [{
            'icon': 'mdi-vk',
            'href': 'https://vk.com/street_food70'
          },
          {
            'icon': 'mdi-instagram',
            'href': 'https://www.instagram.com/street_food70/'
          },
        ]
      },
    },
    mounted(){
      this.$eventBus.$on('alert', this.alertOn)
    }
  }
</script>

<style scoped>
  .font{
        font-family: myriad-pro-condensed, sans-serif !important;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
  }
  .leftSide{
    background-color: #000;
  }
  .rightSide{
    background-color: #d7b56d;
  }
</style>
