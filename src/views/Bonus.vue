<template>
  <v-container class="fill-heigth mt-4 mb-4">
    <v-row>
    <v-col cols="12" sm="8" offset-sm="2">
      <v-card flat>
      	<v-card-title class="font-weight-light">Текущие акции</v-card-title>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(item, i) in bonusList"
              :key="i"
              class="d-flex child-flex"
              cols="12" sm="6"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="item.src"
                  :lazy-src="item.src"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default{
		computed:{
			bonusList(){
				return[
					{
					'src': require('@/assets/banner1.jpg')
					},
					{
					'src': require('@/assets/banner2.jpg')
					},
					{
					'src': require('@/assets/banner3.jpg')
					}
				]
			}
		}
}
</script>
