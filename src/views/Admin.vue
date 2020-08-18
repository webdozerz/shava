<template>
    <v-container  class="fill-heigth mt-4 mb-4">
        <v-row >
            <v-card-title class="font-weight-light">Администрирование</v-card-title>
            <v-container fluid v-if="passwordCheck == passwordTrue">
                <v-simple-table fixed-header width="100%" class="elevation-4" dense>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left"></th>
                                <th class="text-left"><v-icon>mdi-calendar</v-icon></th>
                                <th class="text-left"><v-icon>mdi-face</v-icon></th>
                                <th class="text-left"><v-icon>mdi-cellphone-android</v-icon></th>
                                <th class="text-left"><v-icon>mdi-clock-time-three</v-icon></th>
                                <th class="text-left">Шавуха</th>
                                <th class="text-left">Размер</th>
                                <th class="text-left">Соус</th>
                                <th class="text-left">Добавки</th>
                                <th class="text-left">Закуски</th>
                                <th class="text-left">Доп</th>
                                <th class="text-left"><v-icon>mdi-bottle-tonic</v-icon></th>
                                <th class="text-left"><v-icon>mdi-currency-usd-circle-outline</v-icon></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in orders" :key="item.id" style="cursor: pointer;" @click="persist">
                                <td>
                                    <v-checkbox v-model="selected" color="success" :value="item.id">
                                    </v-checkbox>
                                </td>
                                <td class="subheading">{{ item.date.toDate() | formatDate }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.phone }}</td>
                                <td>{{ item.time }}</td>
                                <td>
                                    <div v-for="(ttl, i) in item.order" :key="i">
                                        <v-row align="center" justify="center">
                                            <v-col> {{ ttl.title }} <span v-if="ttl.title == 'Острая'">
                                                ({{ ttl.spicyLevel | spicyLevelName }})
                                            </span>
                                        </v-col>
                                        </v-row>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(size, j) in item.order" :key="j">
                                        <v-row align="center" justify="center">
                                            <v-col> {{ size.shavaSize | sizeName }} </v-col>
                                        </v-row>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(sous, k) in item.order" :key="k">
                                        <v-row align="center" justify="center">
                                            <v-col> {{ sous.shavaSouses }} </v-col>
                                        </v-row>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(adds, d) in item.order" :key="d">
                                        <div v-if="adds.shavaAddes.length > 0">
                                            <v-chip-group class="mb-2">
                                                <v-chip v-for="(add, i) in adds.shavaAddes" :key="i" :value="add"
                                                    small text-color="white" dark>
                                                    {{ add }}
                                                </v-chip>
                                            </v-chip-group>
                                        </div>
                                        <div v-else>
                                            <v-chip small text-color="white" dark>
                                                Без добавок
                                            </v-chip>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(zaks, d) in item.order" :key="d">
                                        <div v-if="zaks.zakuski.length > 0">
                                            <v-chip-group class="mb-2">
                                                <v-chip v-for="(zak, i) in zaks.zakuski" :key="i" :value="zak"
                                                    small text-color="white" dark>
                                                    {{ zak }}
                                                </v-chip>
                                            </v-chip-group>
                                        </div>
                                        <div v-else>
                                            <v-chip small text-color="white" dark>
                                                Без закусок
                                            </v-chip>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(adv, i) in item.order" :key="i">
                                        <p v-if="adv.sousForPotatoe">
                                            {{ adv.sousForPotatoe | sousPotatoName }}
                                        </p>
                                        <p v-if="adv.caramelOne">
                                            Карамель для 4шт (Груша)
                                        </p>
                                        <p v-if="adv.caramelTwo">
                                            Карамель для 7шт (Груша)
                                        </p>
                                        <p v-if="adv.caramelThree">
                                            Карамель для 4шт (Курага, изюм)
                                        </p>
                                        <p v-if="adv.caramelFour">
                                            Карамель для 7шт (Курага, изюм)
                                        </p>
                                        <p v-if="adv.change">
                                            Заменить на фалафель
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(drink, n) in item.order" :key="n">
                                        <div v-if="drink.drinks.length > 0">
                                            <v-chip-group class="mb-2">
                                                <v-chip v-for="(itemDrink, i) in drink.drinks" :key="i" :value="itemDrink"
                                                    small text-color="white" dark>
                                                    {{ itemDrink.title }}
                                                </v-chip>
                                            </v-chip-group>
                                        </div>
                                        <div v-else>
                                            <v-chip small text-color="white" dark>
                                                Без напитков
                                            </v-chip>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(price, s) in item.order" :key="s">
                                        <v-row align="center" justify="center">
                                            <v-col> {{ price.totalShavaPRice }}₽ </v-col>
                                        </v-row>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-container>
            <v-container v-else>
                <v-container class="fill-height" fluid>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="8" md="4">
                            <v-card class="elevation-12">
                                <v-toolbar color="primary" dark flat>
                                    <v-toolbar-title>Введите пароль</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field id="passwordCheck" label="Пароль" name="mdi-password"
                                            prepend-icon="mdi-lock" type="password" v-model="passwordCheck"></v-text-field>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
        </v-row>
    </v-container>
</template>

<script>
    import {
        db
    } from '../db'

    import * as moment from 'moment';
    import 'moment/locale/ru';

    export default {
        filters: {
            formatDate: function (value) {
                if (value) {
                    return moment(value).local().format('HH:mm YYYY-MM-DD')
                }
            },
            sizeName: function (value) {
                if (!value) return ''
                if (value == 'mini') {
                    return value = 'Маленькая'
                } else {
                    return value = 'Большая'
                }
            },
            sousPotatoName: function (value) {
                if (!value) return ''
                if (value == 'nsous') {
                    return value = null
                }
                if (value == 'chesnock') {
                    return value = 'Чесночный'
                }
                if (value == 'cezar') {
                    return value = 'Цезарь'
                }
                if (value == 'spicy') {
                    return value = 'Острый'
                } 
            },
            spicyLevelName: function (value) {
                // if (!value) return ''
                if (value == 0) {
                    return value = 'Слабая'
                }
                if (value == 1) {
                    return value = 'Средняя'
                }
                if (value == 2) {
                    return value = 'Острая'
                }
            },
            caramelName: function (value){
                if (value == false) {
                    return value = 'Нет'
                }
                else {
                    return value = 'Добавить'
                }
            },
        },
        data: () => ({
            orders: [],
            selected: [],
            passwordCheck: '',
            passwordTrue: 'Zz159357!',
            soundurl: require('@/assets/notiff.mp3'),
        }),
        firestore() {
            return {
                orders: db.collection("orders").orderBy("date", "desc")
            }
        },
        mounted() {
            if (localStorage.getItem('selected')) {
                try {
                    this.selected = JSON.parse(localStorage.getItem('selected'));
                } catch (e) {
                    localStorage.removeItem('selected');
                }
            }
            if (localStorage.passwordCheck) {
                this.passwordCheck = localStorage.passwordCheck;
            }
        },
        watch: {
            passwordCheck(newName) {
                localStorage.passwordCheck = newName;
            },
            orders: {
                handler: function () {
                    this.playSound();
                },
                deep: true
            },
        },
        created() {},
        methods: {
            playSound () {
                var audio = new Audio(this.soundurl);
                audio.play();
            },
            persist() {
                this.saveCats();
            },
            saveCats() {
                const parsed = JSON.stringify(this.selected);
                localStorage.setItem('selected', parsed);
            }
        },
        computed: {
            // totalPrice() {
            //     let total = 0;
            //     for (let item of this.orders) {
            //         for (let price of item.order) {
            //             total += price.totalShavaPRice;
            //         }
            //     }
            //     return total.toFixed(2);
            // },
        }
    }
</script>

<style scoped>
    @media (min-width: 1904px) {
        .widthContainer {
            max-width: 1280px !important;
            width: 100%;
            margin-right: auto;
            margin-left: auto;
        }
    }

    @media (min-width: 768px) {
        .widthContainer {
            max-width: 1280px !important;
            width: 100%;
            margin-right: auto;
            margin-left: auto;
        }
    }

    @media (min-width: 320px) {
        .widthContainer {
            max-width: 1350px !important;
            width: 100%;
            margin-right: auto;
            margin-left: auto;
        }
    }

    @media only screen and (min-width: 1824px) {
        .widthContainer {
            max-width: 1800px !important;
            width: 100%;
            margin-right: auto;
            margin-left: auto;
        }
    }
</style>