<template>
  <v-container class="fill-heigth mt-4 mb-4">
    <v-row>
    <v-col cols="12" sm="8" offset-sm="2">
      <v-card flat>
        <v-card-title>Наш адрес: <span class="font-weight-light" style="padding-left: 10px;"> Ленина проспект, 22а</span></v-card-title>
        <v-card-title>Телефон для заказов: <span class="font-weight-light" style="padding-left: 10px;"> +7 (3822) 239288</span></v-card-title>
        <v-container fluid>
          <v-row>
            <v-col
              class="d-flex child-flex"
              cols="12" sm="12"
            >
              <v-card flat tile class="d-flex">
                   <div style="position:relative;overflow:hidden;width: 100%;height: 100%;">
                    <a href="https://yandex.ru/maps/org/shavukhu_khochu/23627744650/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Шавуху Хочу</a>
                    <a href="https://yandex.ru/maps/67/tomsk/category/fast_food/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Быстрое питание в Томске</a>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CCQFuShc2A" width="100%" height="600" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>
                  </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>
