<template>
    <v-container fluid>
        <v-container>
            <v-row>
                    <v-app-bar app class="mx-auto elevation-2 bg" height="90" fixed dark>
                        <v-container style="max-width: 1150px;" class="mx-auto">
                            <v-row>
                                <v-col xs="8" sm="8" md="8" lg="8" xl="8">
                                    <router-link to="/" tag="span" style="cursor: pointer;">
                                        <v-avatar class="" size="180" tile>
                                            <v-img :src="logoSrc" contain>
                                            </v-img>
                                        </v-avatar>
                                    </router-link>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <a href="tel:83822239288" v-on="on"
                                                class="text-center font-weight-light hidden-sm-and-down phone">
                                                8 3822 23‒92‒88
                                                <v-icon dense color="#b8860b">mdi-phone</v-icon>
                                            </a>
                                        </template>
                                        <span>
                                            Сделать предзаказ
                                        </span>
                                    </v-tooltip>
                                    <span class="text-center hidden-sm-and-down phone"
                                        style="margin: 0px 0px 0px 30px; cursor: pointer">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <span v-on="on">4.7<v-icon dense color="yellow">mdi-star</v-icon></span>
                                            </template>
                                            <span>
                                                Средний рейтинг пользователей (2GIS): 4.7
                                                <br>
                                                Отзывов: 16
                                            </span>
                                        </v-tooltip>
                                    </span>
                                </v-col>
                                <v-col align-self="center" xs="4" sm="4" md="4" lg="4" xl="4" class="text-right">
                                    <v-btn text v-for="(btn, i) in btnList" :key="i" :to="btn.route"
                                        class="hidden-sm-and-down fontHeader" color="white" small dark right>
                                        <div class="btnTitle">{{btn.title}}</div>
                                    </v-btn>
                                    <v-btn icon color="white" @click="showCart" dark>
                                        <v-badge :content="countItems" :value="countItems" color="green" overlap>
                                            <v-icon>mdi-cart-outline</v-icon>
                                        </v-badge>
                                    </v-btn>
                                    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up">
                                    </v-app-bar-nav-icon>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-app-bar>
            </v-row>
        </v-container>
        <v-navigation-drawer v-model="drawer" fixed temporary dark clipped>
            <v-list-item href="tel:83822239288">
                <v-list-item-avatar>
                    <v-icon icon left color="#b8860b">mdi-phone</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Сделать предзаказ</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-avatar>
                    <v-icon icon left color="#b8860b">mdi-star</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <span v-on="on">4.7</span>
                            </template>
                            <span>
                                Средний рейтинг пользователей (2GIS): 4.7
                                <br>
                                Отзывов: 16
                            </span>
                        </v-tooltip>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>

                <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-dialog v-model="dialog" :max-width="returnWidth()" dark>
            <v-card v-if="$store.state.cart.length > 0">
                <v-card-title class="title ml-6">Предзаказ
                    <v-badge :content="countItems" :value="countItems" color="green" overlap>
                        <v-icon>mdi-cart-outline</v-icon>
                    </v-badge>
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-1" text small @click="dialog = false" class="mr-2">
                        <v-icon icon color="grey darken-1">mdi-close-circle-outline</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-simple-table fixed-header class="ma-6 elevation-3">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Шавуха</th>
                                    <th class="text-left">Размер</th>
                                    <th class="text-left">Соус</th>
                                    <th class="text-left">Добавки</th>
                                    <th class="text-left">Закуски</th>
                                    <th class="text-left">Напитки</th>
                                    <th class="text-left">Цена</th>
                                    <th class="text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in $store.state.cart" :key="i" style="cursor: pointer;">
                                    <td class="subheading">{{ item.title }}</td>
                                    <td>{{ item.shavaSize | sizeName }}</td>
                                    <td>{{ item.shavaSouses }}</td>
                                    <td>
                                        <div v-if="item.shavaAddes.length > 0">
                                            <v-chip-group column>
                                                <v-chip v-for="(add, i) in item.shavaAddes" :key="i" :value="add" small
                                                    text-color="white" dark>
                                                    {{ add }}
                                                </v-chip>
                                            </v-chip-group>
                                        </div>
                                        <div v-else>
                                            <v-chip small text-color="white" dark>
                                                Без добавок
                                            </v-chip>
                                        </div>
                                    </td>
                                    <td>
                                        <div v-if="item.zakuski.length > 0">
                                            <v-chip-group column>
                                                <v-chip v-for="(zak, i) in item.zakuski" :key="i" :value="zak" small
                                                    text-color="white" dark>
                                                    {{ zak }}
                                                </v-chip>
                                            </v-chip-group>
                                        </div>
                                        <div v-else>
                                            <v-chip small text-color="white" dark>
                                                Без закусок
                                            </v-chip>
                                        </div>
                                    </td>
                                    <td>
                                        <div v-if="item.drinks.length > 0">
                                            <v-chip-group column>
                                                <v-chip v-for="(drink, i) in item.drinks" :key="i" :value="drink" small
                                                    text-color="white" dark>
                                                    {{ drink.title }}
                                                </v-chip>
                                            </v-chip-group>
                                        </div>
                                        <div v-else>
                                            <v-chip small text-color="white" dark>
                                                Без напитков
                                            </v-chip>
                                        </div>
                                    </td>
                                    <td>{{ item.totalShavaPRice }}₽</td>
                                    <td>
                                        <v-btn icon color="black" @click.prevent="removeFromCart(item)">
                                            <v-icon color="white">mdi-delete-outline</v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                    <v-card-text>
                        <v-form v-model="valid" ref="form">
                            <v-container>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field v-model="name" label="Как Вас зовут?" required clearable
                                            hide-details="auto" :rules="[rules.required]"
                                            prepend-inner-icon="mdi-account-circle-outline" solo dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-text-field v-model="phone" :rules="[rules.required]" type="number"
                                            label="Ваш телефон" hide-details="auto"
                                            prepend-inner-icon="mdi-phone-outline" clearable maxlength="12" solo dense
                                            required>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="4">
                                        <v-dialog ref="dialog" v-model="modal2" :return-value.sync="time" persistent
                                            width="290px">
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-model="time" :rules="[rules.required]"
                                                    label="Во сколько заберете?"
                                                    prepend-inner-icon="mdi-clock-time-three-outline" readonly v-on="on"
                                                    solo dense clearable required></v-text-field>
                                            </template>
                                            <v-time-picker v-if="modal2" v-model="time" full-width format="24hr"
                                                :allowed-hours="hours">
                                                <v-spacer></v-spacer>
                                                <v-btn text color="grey" @click="modal2 = false">Закрыть</v-btn>
                                                <v-btn text color="white" @click="$refs.dialog.save(time)">Выбрать
                                                </v-btn>
                                            </v-time-picker>
                                        </v-dialog>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-card-text>
                </v-card-text>
                <v-card-actions class="mr-10 pb-4">
                    <v-spacer></v-spacer>
                    <v-btn color="white" outlined @click="addOrder(name, phone)" :disabled="!valid">
                        Оформить за {{ totalPrice }}₽
                    </v-btn>
                </v-card-actions>
            </v-card>

            <v-card v-else>
                <v-card-title class="title">Корзина предзаказа
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-1" text small @click="dialog = false">
                        <v-icon icon color="grey darken-1">mdi-close-circle-outline</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row justify="center" align="center">
                            <v-col justify="center" align="center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                                <v-avatar class="" size="150" tile>
                                    <v-img src="../assets/shawarma.svg"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col justify="center" align="center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                                <span class="subtitle-1">Ой, тут пока пусто</span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>

        </v-dialog>
    </v-container>
</template>

<script>
    import {
        db
    } from '../db'

    import Vue from 'vue'
    Vue.prototype.$eventBus = new Vue();

    export default {
        data: () => ({
            drawer: null,
            items: [
                // {
                //     title: 'Акции',
                //     icon: 'mdi-sale',
                //     route: '/bonus'
                // },
                {
                    title: 'Контакты',
                    icon: 'mdi-contacts-outline',
                    route: '/contacts'
                },
            ],
            logoSrc: require('@/assets/logo.png'),
            count: null,
            time: null,
            modal2: false,
            valid: false,
            name: '',
            phone: '',
            rules: {
                required: value => !!value || 'Обязательное поле',
                // phone: value => value.length <= 11 || 'Максимум 11 чисел',
            },
            dialog: false,
            orders: [],
        }),
        firestore: {
            orders: db.collection('orders')
        },
        filters: {
            sizeName: function (value) {
                if (!value) return ''
                if (value == 'mini') {
                    return value = 'Маленькая'
                } else {
                    return value = 'Большая'
                }
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                for (let item of this.$store.state.cart) {
                    total += item.totalShavaPRice;
                }
                return total.toFixed(2);
            },
            countItems: {
                get: function () {
                    return this.$store.state.cartCount
                },
            },
            btnList() {
                return [
                    // {
                    //     'title': 'Акции',
                    //     'route': '/bonus'
                    // },
                    {
                        'title': 'Контакты',
                        'route': '/contacts'
                    },
                    // {
                    //     'title': 'О нас',
                    //     'route': '/contacts'
                    // },
                ]
            },
        },
        methods: {
            returnWidth() {
                if (this.$store.state.cart.length > 0) {
                    return 1300;
                } else {
                    return 400;
                }
            },
            hours: v => v >= 9 && v <= 21,
            validate() {
                this.$refs.form.validate()
                this.$refs.dialog.validate()
            },
            addOrder(name, phone) {
                this.validate
                const createdAt = new Date()
                db.collection('orders').add({
                    date: createdAt,
                    time: this.time,
                    name: name,
                    phone: phone,
                    order: this.$store.state.cart
                })
                this.name = '';
                this.phone = '';
                this.time = null;
                this.$store.state.cart = [];
                this.$store.cartCount = 0;
                this.dialog = false;
                this.$store.commit('clearCount');
                this.$eventBus.$emit('alert');
            },
            showCart() {
                this.dialog = true;
            },
            removeFromCart(item) {
                this.$store.commit('removeFromCart', item);
            }
        }
    }
</script>

<style scoped>
    .bg {
        background-color: #121618 !important;
        background-repeat: repeat;
        background-position: center;
        background-size: cover;
        /* background-image:  linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("../assets/fon.png"); */
    }

    .btnMobile {
        height: 28px;
        min-width: 24px !important;
        padding: 0px 6px !important;
        font-size: 12px !important;
    }

    .btnMobileXs {
        height: 16px !important;
        min-width: 16px !important;
        padding: 0px 5px !important;
        font-size: 11px !important;
    }

    .headerBig {
        height: 84px !important;
    }

    .headerSmall {
        height: 90px;
    }

    .phone {
        color: rgb(255, 255, 255);
        text-decoration: none;
        margin: 0px 0px 0px 45px;
        font-family: myriad-pro-condensed, sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
    }

    .font {
        font-family: myriad-pro-condensed, sans-serif !important;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
    }

    .fontHeader {
        font-family: myriad-pro-condensed, sans-serif !important;
        font-weight: 700;
        font-style: normal;
    }

    .rateBig {
        font-size: inherit;
    }

    .rateSmall {
        font-size: 14px;
        margin: 5px 0px 0px 20px !important;
    }

    .btnGroup {
        margin: 5px 0px 0px 30px;
    }

    .btnTitle {
        color: white;
    }

    .v-toolbar__title {
        line-height: 2.5 !important;
    }

    .v-toolbar__content,
    .v-toolbar__extension {
        padding: 4px 4px !important;
    }

    @media (max-width: 320px) {
        .logoSmall {
            font-size: 18px;
        }
    }
</style>