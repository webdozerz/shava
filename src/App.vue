<template>
  <v-app dark class="bg">
    <Header />
    <v-content style="padding: 5px 0px 0px;">
      <v-container fluid>
        <v-row>
            <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>
    <v-footer dark padless>
      <v-card class="flex" justify="center" flat tile absolute>
        <v-card-title class="black">
          <v-row>
            <v-col cols="12" sm="4" class="text-center">
              <span class="white--text subtitle-1">Made with <v-icon style="text-decoration: none;" tag="a" color="red" target="blank" href="https://vk.com/webdozer">mdi-heart-multiple</v-icon></span>
            </v-col>
            <v-col cols="12" sm="4" class="text-center subtitle-1">
              <v-btn v-for="(item,i) in socialLinks" :key="i" class="mx-4 white--text" dark icon :href="item.href"
                target="blank">
                <v-icon size="24px">{{ item.icon }}</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" sm="4" class="text-center subtitle-1">
              <span class="subheading white--text">Хрустящая шаурма в Томске!</span>
            </v-col>
          </v-row>
        </v-card-title>

      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'App',
    components: {
      Header
    },

    data: () => ({
      items: [{
          src: require('./assets/pizza1.jpg')
        },
        {
          src: require('./assets/pizza2.jpg')
        },
        {
          src: require('./assets/pizza3.jpg')
        },
      ],
    }),
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
      }
    },
    created: function () {
      this.$vuetify.theme.dark = true
    }
  };
</script>

<style scoped>
 .bg{
    background-color: #0c0c0d!important;
    background-image:  linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("https://colorlib.com/preview/theme/pizza/images/bg_4.jpg")!important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    background-size: cover !important;
  }
</style>