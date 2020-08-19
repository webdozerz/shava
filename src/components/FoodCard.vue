<template>
    <v-col cols="12" xs="12" sm="6" md="6" lg="4" xl="4">
        <v-card class="mx-auto my-12" max-width="450" min-height="300px"  @click="showContext"
            style="cursor: pointer; background-color: #00000000 !important" :ripple="false">
            <v-img height="180" :src="src" contain class="slideTop"></v-img>
            <p class="text-center subtitle-1 font-weight-medium font-weight-bold font pt-6" style="color: #d7b56d">{{title}} <v-icon color="green" small
                    v-if="title == 'Фалафель'" class="ml-1">mdi-leaf</v-icon>
            </p>
            <p v-if="title=='Детская'" class="text-center font-italic caption">(Покупая шаурму "Детская", вы помогаете благотворительному проекту <a href="https://www.instagram.com/roman.sharypov/" target="_blank" style="color: white; text-decoration: none; border-bottom: 1px dashed gray;">"ВЕРА"</a>)</p>
            <v-card-text>
                <p class="text-center body-2">{{description}}</p>
            </v-card-text>
            <v-card-actions>
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-center textInfo" justify="center" align="center"><v-img :src="srcIconSmall" height="35" contain ></v-img></v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-center textInfo pt-1" justify="center" align="center"><span class="body-2 font-weight-light" style="color: #d7b56d">{{ves1}}</span></v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-center textInfo" justify="center" align="center"><span class="font" style="color: #d7b56d">{{price1}}₽</span></v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-center textInfo" justify="center" align="center"><v-img :src="srcIconLarge" height="45" contain ></v-img></v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-center textInfo pt-1" justify="center" align="center"><span class="body-2 font-weight-light" style="color: #d7b56d">{{ves2}}</span></v-col>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="text-center textInfo" justify="center" align="center"><span class="font" style="color: #d7b56d">{{price2}}₽</span></v-col>
                    </v-row>
                </v-container>
                <!-- <v-img :src="srcIconLarge" contain  width="20"></v-img><span class="title font" style="color: #d7b56d">{{price2}}₽</span> -->
                <v-spacer></v-spacer>
                <v-btn color="white" outlined @click="showContext">
                    Завернуть
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-dialog v-model="showAddes" max-width="1500" overlay-opacity="0.8">
            <v-card class="flex" justify="center">
                <v-container fluid class="golden">
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" xs="12" sm="12" md="4" lg="4" xl="4">
                            <v-avatar class="" size="300" tile>
                                <v-img :src="src2" contain v-if="shavaSize=='max'"></v-img>
                                <v-img :src="src" contain v-else></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col xs="12" sm="12" md="8" lg="8" xl="8">
                            <v-card-title class="title">{{title}} <v-icon color="green" small v-if="title == 'Фалафель'"
                                    class="ml-2">mdi-leaf</v-icon>
                                <v-spacer></v-spacer>
                                <span class="title mr-2">{{totalShavaPRice()}}₽</span>
                                <v-btn color="grey darken-1" text small @click="showAddes = false" class="">
                                    <v-icon icon color="grey darken-1">mdi-close-circle-outline</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text>
                                {{description}}
                            </v-card-text>
                            <v-card-text v-if="title == 'Острая'" class="mt-7" style="max-width: 400px">
                            <!-- <span class="subheading">Выберите остроту</span> -->
                            <v-slider
                                label="Выберите остроту"
                                color="red darken-1"
                                v-model="spicyLevel"
                                thumb-label="always"
                                :max="2"
                                step="1"
                                ticks="always"
                                tick-size="3"
                                dense
                            >
                            <template v-slot:thumb-label="{ value }">
                                <v-icon color="white">
                                    {{ ticksLabels[value] }}
                                </v-icon>
                            </template>
                            </v-slider>
                            </v-card-text>

                            <v-card-text v-if="title != 'Детская'">
                                <span class="subheading">Выберите размер</span>
                                <v-radio-group v-model="shavaSize" row dense>
                                    <v-radio label="Мини (320 ± 20г)" value="mini" color="#b8860b"></v-radio>
                                    <v-radio label="Макс (420 ± 20г)" value="max" color="#b8860b"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                            <v-card-text>
                                    <v-switch v-model="change" color="#b8860b" inset style="margin-top: -12px;"
                                        label="Заменить мясо курицы на фалафель" dense></v-switch>
                                </v-card-text>
                            <v-card-text>
                                <span class="subheading">Выберите соус</span>
                                <v-chip-group v-model="shavaSouses" active-class="orange--text text--accent-1" mandatory
                                    column>
                                    <v-chip v-for="(sous, i) in sousesArray" :key="i" :value="sous.name" filter >
                                        {{ sous.name }}
                                        <span class="ml-1" v-if="sous.ves"> | {{ sous.ves }}г </span>
                                        <span v-else> </span>
                                        <span class="ml-1" v-if="sous.price"> | {{ sous.price }}₽ </span>
                                        <span v-else> </span>
                                    </v-chip>
                                </v-chip-group>
                            </v-card-text>
                            <v-card-text>
                                <span class="subheading">Добавить в шавуху</span>
                                <v-chip-group v-model="shavaAddes" active-class="orange--text text--accent-1" column
                                    multiple>
                                    <v-chip v-for="(add, i) in addes" :key="i" :value="add.name" filter
                                        @click="toggleActive(add)">
                                        {{ add.name }} | {{ add.ves }}г | {{ add.price }}₽ <v-icon color="green" right
                                            small v-if="add.name == 'Фалафель'" class="ml-1">mdi-leaf
                                        </v-icon>
                                        <v-icon color="red" right small v-if="add.name == 'Перец чили'" class="ml-1">
                                            mdi-chili-mild
                                        </v-icon>
                                    </v-chip>
                                </v-chip-group>
                            </v-card-text>
                          <v-card-text>
                            <span class="subheading">Добавить овощей</span>
                            <v-chip-group v-model="shavaVegsArray" active-class="orange--text text--accent-1" column
                                          multiple>
                              <v-chip v-for="(veg, i) in shavaVegs" :key="i" :value="veg.name" filter
                                      @click="toggleActive(veg)">
                                {{ veg.name }} | {{ veg.ves }}г | {{ veg.price }}₽
                              </v-chip>
                            </v-chip-group>
                          </v-card-text>
                            <v-card-text>
                                <span class="subheading">Дополнительные закуски</span>
                                <v-chip-group v-model="dopZak" active-class="orange--text text--accent-1" column multiple>
                                    <v-chip v-for="(dop, i) in dopsArray" :key="i" :value="dop.name" filter
                                        @click="toggleActive(dop)">
                                        {{ dop.name }} | {{ dop.ves }}<span v-if="dop.id == 0"
                                            class="mr-1">г</span><span v-else class="mr-1">шт </span> | {{ dop.price }}₽
                                    </v-chip>
                                </v-chip-group>
                            </v-card-text>
                            <div v-for="(dp, i) in dopsArray" :key="i">
                                <v-card-text v-if="dp.active == true && dp.id == 0">
                                    <span class="subheading">Добавить соус к картошке фри?</span>
                                    <v-radio-group v-model="sousForPotatoe" row dense>
                                        <v-radio label="Без соуса" value="nsous" color="#b8860b"></v-radio>
                                        <v-radio label="Чесночный" value="chesnock" color="#b8860b"></v-radio>
                                        <v-radio label="Цезарь" value="cezar" color="#b8860b"></v-radio>
                                        <v-radio label="Острый" value="spicy" color="#b8860b"></v-radio>
                                    </v-radio-group>
                                </v-card-text>
                                <v-card-text v-if="dp.active == true && dp.id == 1">
                                    <v-switch v-model="caramelOne" color="#b8860b" inset
                                        label="Добавить карамельный соус к роллу" dense></v-switch>
                                </v-card-text>
                                <v-card-text v-if="dp.active == true && dp.id == 2">
                                    <v-switch v-model="caramelTwo" color="#b8860b" inset
                                        label="Добавить карамельный соус к роллу" dense></v-switch>
                                </v-card-text>
                                <v-card-text v-if="dp.active == true && dp.id == 3">
                                    <v-switch v-model="caramelThree" color="#b8860b" inset
                                        label="Добавить карамельный соус к роллу" dense></v-switch>
                                </v-card-text>
                                <v-card-text v-if="dp.active == true && dp.id == 4">
                                    <v-switch v-model="caramelFour" color="#b8860b" inset
                                        label="Добавить карамельный соус к роллу" dense></v-switch>
                                </v-card-text>
                            </div>
                            <v-card-text>
                                <span class="subheading">С этой шавухой круто заходят</span>
                                <v-container class="py-0">
                                    <v-row align="center" justify="start">
                                        <v-col v-for="(selection, i) in selections" :key="i"
                                            class="shrink" >
                                            <v-chip close @click:close="selected.splice(i, 1)" small style="border: 1px solid #b8860b">
                                                {{ selection.title }}
                                            </v-chip>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <v-list shaped  flat class="elevation-0">
                                    <v-list-group
                                        v-for="item in drinksArray"
                                        :key="item.title"
                                        v-model="item.active"
                                        :prepend-icon="item.action"
                                        no-action
                                        color="#b8860b"
                                    >
                                        <template v-slot:activator>
                                            <v-list-item-content>
                                                <v-list-item-title v-text="item.title"></v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        <v-list-item
                                        v-for="subItem in item.items"
                                        :key="subItem.title"
                                        @click="selected.push(subItem)"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title v-text="`${subItem.title} | ${subItem.ves}л | ${subItem.ves}₽`"></v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-group>
                                </v-list>

                            </v-card-text>
                            <v-card-text class="subtitle-1" style="display: none;"> <span
                                    class=" font-weight-bold">Итого:
                                </span>{{ normalizedPrice }}₽ +
                                соус {{ priciningSouses() }}₽ + добавки {{ priciningAddes() }}₽ + овощи {{ priciningVegs() }}₽ + напитки
                                {{ priciningDrinks() }}₽ + допы {{ priciningDops() }}₽ + соус для картошки
                                {{ sousForPotatoePricePricining() }}₽ + карамельный соус для 4шт
                                {{ priciningCaramelSousOne() }}₽ + карамельный соус для 7шт
                                {{ priciningCaramelSousTwo() }}₽ =
                                {{ totalShavaPRice() }}₽
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <!-- <v-divider></v-divider> -->
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="white" outlined @click="addToCart(id, title)">
                            Завернуть за {{ totalShavaPRice() }}₽
                        </v-btn>
                    </v-card-actions>
                </v-container>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<script>
    export default {
        props: ['id', 'title', 'description', 'price1', 'price2', 'ves1', 'ves2', 'src', 'src2', 'size1', 'size2'],
        data: () => ({
            settings: {
                maxScrollbarLength: 60,
            },
            showAddes: false, // Показатьл модальное окно
            // Массив соусов
            sousesArray: [{
                    id: 0,
                    name: 'Стандартный',
                },
                {
                    id: 1,
                    name: 'Чесночный',
                    price: 30,
                    ves: 25
                },
                {
                    id: 2,
                    name: 'Цезарь',
                    price: 45,
                    ves: 25
                },
                {
                    id: 3,
                    name: 'Острый',
                    price: 30,
                    ves: 25
                },
                {
                    id: 4,
                    name: 'Без соуса',
                },
            ],
            shavaVegs: [
              {
                name: 'Пекинка',
                price: 30,
                ves: 30,
                active: false,
              },
              {
                name: 'Огурец',
                price: 30,
                ves: 30,
                active: false,
              },
              {
                name: 'Томаты Черри',
                price: 30,
                ves: 30,
                active: false,
              }
            ],
            // Массив добавок в шавуху
            addes: [{
                    name: 'Мясо курицы',
                    price: 60,
                    ves: 100,
                    active: false,
                },
                // {
                //     name: 'Овощи на выбор',
                //     price: 30,
                //     ves: 30,
                //     active: false,
                // },
                {
                    name: 'Перец чили',
                    price: 20,
                    ves: 10,
                    active: false,
                },
                {
                    name: '4 сыра',
                    price: 20,
                    ves: 20,
                    active: false,
                },
                {
                    name: 'Грибы обжаренные',
                    price: 30,
                    ves: 20,
                    active: false,
                },
                {
                    name: 'Ростки маша',
                    price: 20,
                    ves: 10,
                    active: false,
                },
                {
                    name: 'Фалафель',
                    price: 60,
                    ves: 120,
                    active: false,
                }
            ],
            // Массив доп. закусок
            dopsArray: [{
                    id: 0,
                    name: 'Картофель фри',
                    ves: 100,
                    price: 40,
                    active: false,
                },
                {
                    id: 1,
                    name: 'Спринг ролл с риккотой и грушей',
                    ves: 4,
                    price: 150,
                    active: false,
                },
                {
                    id: 2,
                    name: 'Спринг ролл с риккотой и грушей ',
                    ves: 7,
                    price: 180,
                    active: false,
                },
                {
                    id: 3,
                    name: 'Спринг ролл с риккотой, изюмом и курагой',
                    ves: 4,
                    price: 150,
                    active: false,
                },
                {
                    id: 4,
                    name: 'Спринг ролл с риккотой, изюмом и курагой ',
                    ves: 7,
                    price: 180,
                    active: false,
                }

            ],
            // Массив напитков
            drinksArray: [
                {
                    action: 'mdi-glass-wine',
                    title: 'Фирменные напитки',
                    items: [
                        {
                            title: 'Шавуху хочу (лимон, имбирь)',
                            price: 70,
                            ves: 0.5
                        },
                        {
                            title: 'Компот от бабули',
                            price: 50,
                            ves: 0.5
                        },
                        {
                            title: 'Морс вишневый',
                            price: 60,
                            ves: 0.5
                        },
                        {
                            title: 'Морс клюквенный',
                            price: 60,
                            ves: 0.5
                        },

                    ],
                },
                {
                    action: 'mdi-bottle-soda-classic-outline',
                    title: 'Прохладительные напитки',
                    items: [
                        {
                            title: 'Pepsi в жестяной банке',
                            price: 60,
                            ves: 0.33
                        },
                        {
                            title: 'Pepsi в стеклянной бутылке',
                            price: 130,
                            ves: 0.25
                        },
                        {
                            title: 'Квас',
                            price: 60,
                            ves: 0.5
                        },
                        {
                            title: 'Акваминирале в ассортименте',
                            price: 50,
                            ves: 0.5
                        },
                        {
                            title: 'Энергетический напиток "Драйв"',
                            price: 90,
                            ves: 0.5
                        },
                    ],
                },
                {
                    action: 'mdi-tea-outline',
                    title: 'Горячие напитки',
                    items: [
                        {
                            title: 'Чай пакетированный в ассортименте',
                            price:  20,
                            ves: 0.25
                        },
                        {
                            title: 'Кофе растворимый',
                            price:  30,
                            ves: 0.25
                        },
                        {
                            title: 'Кофе в турке',
                            price:  50,
                            ves: 0.25
                        },
                        // {
                        //     title: 'Глинтвейн безалкогольный',
                        //     price:  40,
                        //     ves: 0.25
                        // },
                        // {
                        //     title: 'Чай имбирный',
                        //     price:  40,
                        //     ves: 0.25
                        // },
                    ],
                },
            ],
            ticksLabels: [
            'mdi-chili-mild',
            'mdi-chili-medium',
            'mdi-chili-hot',
            ],
            srcIconSmall: require('@/assets/smallShava.svg'),
            srcIconLarge: require('@/assets/largeShava.svg'),
            spicyLevel: 0, // Степень остроты
            selected: [], // Выбранные напитки
            shavaSouses: {}, // Выбранный соус
            shavaAddes: [], // Выбранные добавки
            shavaVegsArray: [], //Выбранные овощи
            dopZak: [], // Выбранные закуски
            shavaSize: 'mini', // Размер шавухи
            sousForPotatoe: 'nsous', // Выбор соуса для картошки фри
            caramelOne: false, // Карамельный соус для спринг ролла 4 штуки
            caramelTwo: false, // Карамельный соус для спринг ролла 7 штук
            caramelThree: false, // Карамельный соус для спринг ролла 4 штук
            caramelFour: false, // Карамельный соус для спринг ролла 7 штук
            sousPrice: 0, // Цена соуса
            addesPrice: 0, // Цена добавок
            vegsPrice: 0,
            dopsPrice: 0, // Цена дополнительных закусок
            drinksPrice: 0, // Цена за напитки
            sousForPotatoePrice: 0, // Цена за соус для картошки фри
            caramelPriceOne: 0, // Цена за карамельный соус 4шт
            caramelPriceTwo: 0, // Цена за карамельный соус 7шт
            change: false,
            totalShavaPriceCart: 0, //Цена за все
        }),
        computed: {
            selections() {
                const selections = []
                for (const selection of this.selected) {
                    selections.push(selection)
                }
                return selections
            },
            normalizedPrice: function () {
                if (this.shavaSize == 'mini') {
                    return this.price1
                }
                if (this.shavaSize == 'max') {
                    return this.price2
                } else {
                    return null
                }
            },
            countItems() {
                return this.$store.state.cartCount
            },
        },
        methods: {
            sousForPotatoePricePricining: function () {
                if (this.sousForPotatoe == 'chesnock') {
                    return this.sousForPotatoePrice = 30;
                }
                if (this.sousForPotatoe == 'cezar') {
                    return this.sousForPotatoePrice = 30;
                }
                if (this.sousForPotatoe == 'spicy') {
                    return this.sousForPotatoePrice = 30;
                }
                if (this.sousForPotatoe == 'nsous') {
                    return this.sousForPotatoePrice = 0;
                }
            },
            priciningCaramelSousOne: function () {
                if (this.caramelOne == true) {
                    return this.caramelPriceOne = 40;
                } else {
                    return this.caramelPriceOne = 0;
                }
            },
            priciningCaramelSousTwo: function () {
                if (this.caramelTwo == true) {
                    return this.caramelPriceTwo = 40;
                } else {
                    return this.caramelPriceTwo = 0;
                }
            },
            priciningSouses: function () {
                if (this.shavaSouses == 'Стандартный') {
                    return this.sousPrice = 0;
                }
                if (this.shavaSouses == 'Чесночный') {
                    return this.sousPrice = 30;
                }
                if (this.shavaSouses == 'Цезарь') {
                    return this.sousPrice = 45;
                }
                if (this.shavaSouses == 'Острый') {
                    return this.sousPrice = 30;
                }
                if (this.shavaSouses == 'Без соуса') {
                    return this.sousPrice = 0;
                }
            },
            toggleActive: function (s) {
                s.active = !s.active;
            },
            priciningAddes: function () {
                var total = 0;
                this.addes.forEach(function (s) {
                    if (s.active) {
                        total += s.price;
                    }
                });
                return this.addesPrice = total;
            },
            priciningVegs: function () {
              var total = 0;
              this.shavaVegs.forEach(function (s) {
                if (s.active) {
                  total += s.price;
                }
              });
              return this.vegsPrice = total;
            },
            priciningDops: function () {
                var total = 0;
                this.dopsArray.forEach(function (s) {
                    if (s.active) {
                        total += s.price;
                    }
                });
                return this.dopsPrice = total;
            },
            priciningDrinks: function () {
                var total = 0;
                this.selected.forEach(function (s) {
                    total += s.price;
                });
                return this.drinksPrice = total;
            },
            totalShavaPRice: function () {
                var total = 0;
                var result = 0;
                var falafel = 0;
                var ifChange = this.change;
                if(ifChange){
                    falafel = 60;
                }
                else{
                    falafel = 0;
                }
                var initialShavaPrice = this.normalizedPrice;
                total = initialShavaPrice + this.sousPrice + this.addesPrice + this.vegsPrice + this.drinksPrice + this.dopsPrice +
                    this.sousForPotatoePrice + this.caramelPriceOne + this.caramelPriceTwo + falafel;
                result = total;

                this.totalShavaPriceCart = result;

                return result;
            },
            showContext() {
                this.showAddes = true
            },
            // Отправка в корзину
            addToCart(id, title) {
                let total = this.totalShavaPriceCart;
                this.$store.commit('addToUserCart', {
                    id: id, // Id
                    title: title, // Название
                    shavaSize: this.shavaSize, // Выбранный размер
                    shavaSouses: this.shavaSouses, // Выбранный соус
                    shavaAddes: this.shavaAddes, // Выбранные добавки
                    shavaVegs: this.shavaVegsArray, // Выбранные овощи
                    zakuski: this.dopZak, // Дополнительные закуски
                    sousForPotatoe: this.sousForPotatoe, // Соус для картошки
                    caramelOne: this.caramelOne, // Соус для спринг ролла 4шт
                    caramelTwo: this.caramelTwo, // Соус для спринг ролла 7шт
                    caramelThree: this.caramelThree, // Соус для спринг ролла 4шт
                    caramelFour: this.caramelFour, // Соус для спринг ролла 7шт
                    drinks: this.selected, // Выбранные напитки
                    spicyLevel: this.spicyLevel, // Степень остроты
                    change: this.change,
                    totalShavaPRice: total, // Итоговая цена
                })
                this.showAddes = false;
            }
        },
        watch: {},
        updated() {
            // Следим за закрытием выбора доп. закусок
            for (let item of this.dopsArray) {
                if (item.id == 0 && item.active == false) {
                    this.sousForPotatoe = 'nsous';
                }
                if (item.id == 1 && item.active == false) {
                    this.caramelOne = false;
                }
                if (item.id == 2 && item.active == false) {
                    this.caramelTwo = false;
                }
            }
            if (this.title == 'Детская'){
               for (let item of this.addes){
                   if(item.name == 'Мясо курицы'){
                       item.price = 40
                   }
               }
            }

        },
    }
</script>

<style scoped>
    .textInfo{
        padding: 1px !important;
    }
    .golden{
        border: 1px solid #d7b56d;
        border-radius: 10px;
    }
    div {
        -o-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    .slideTop:hover {
        -o-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        -moz-transform: translateY(-20px);
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
    }

    .v-card__subtitle,
    .v-card__text,
    .v-card__title {
        padding: 8px !important;
    }

    .font{
        font-family: myriad-pro-condensed, sans-serif !important;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
    }
</style>

<style>
    .v-messages__message {
        line-height: 21px;
        font-size: 12px;
        text-align: center;
        font-weight: bold;
    }
</style>
