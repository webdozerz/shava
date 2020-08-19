<template>
  <v-container fluid>
    <h2 class="font text-center pt-12" style="color: #d7b56d">Хрустящая шавуха</h2>
    <h4 class=" text-center pb-12 font-weight-light" style="color: grey">Попробуйте нашу шавуху в Томске</h4>
    <v-row>
        <FoodCard v-for="(item, i) in shavaList" :key="i" :id="item.id" :title="item.title" :description="item.description"
          :price1="item.price1" :price2="item.price2" :ves1="item.ves1" :ves2="item.ves2" :src="item.src" :src2="item.src2" :size1="item.size1" :size2="item.size2"></FoodCard>
    </v-row>
  </v-container>
</template>

<script>
  import FoodCard from '@/components/FoodCard.vue';

  export default {
    components: {
      FoodCard
    },
    data: () => ({
      shavaList: [{
          'id': 0,
          'title': 'Классическая',
          'description': 'Пекинка, томат черри, огурец, мясо курицы, соус чесночный на йогурте',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava.png'),
          'src2': require('@/assets/shava2.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 1,
          'title': 'Цезарь',
          'description': 'Пекинка, томат черри, соус цезарь, мясо курицы',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava2.png'),
          'src2': require('@/assets/shava3.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 7,
          'title': 'С яйцом',
          'description': 'Пекинка, томат черри, огурец, яйцо обжаренное, соус чесночной на йогурте, мясо курицы',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava2.png'),
          'src2': require('@/assets/shava.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 2,
          'title': 'Четыре сыра',
          'description': 'Пекинка, томат черри, сыр сливочный, сыр чеддер, сыр сулугуни, сыр гауда, мясо курицы',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava3.png'),
          'src2': require('@/assets/shava2.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 3,
          'title': 'Том-ям',
          'description': 'Пекинка, шампиньон обжаренный, соус на основе галангала и лемонграса с чили пастой и кокосовым молоком, томат черри, мясо курицы',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava2.png'),
          'src2': require('@/assets/shava.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 4,
          'title': 'Азиатская',
          'description': 'Пекинка, томат черри, морковь обжаренная, 13 специй, имбирь, мясо курицы',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava2.png'),
          'src2': require('@/assets/shava.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 5,
          'title': 'Острая',
          'description': 'Пекинка, томат черри, огурец, соус на основе томатов в собственном соку, чили, мясо курицы',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava.png'),
          'src2': require('@/assets/shava2.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 6,
          'title': 'Фалафель',
          'description': 'Пекинка, томат черри, огурец, соус чесночный на йогурте, фалафель',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava3.png'),
          'src2': require('@/assets/shava2.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 8,
          'title': 'Грибная',
          'description': 'Пекинка, томат черри, огурец, шампиньоны обжаренные, соус сливочно-грибной, чеснок, мясо курицы',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava.png'),
          'src2': require('@/assets/shava2.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        },
        {
          'id': 9,
          'title': 'Детская',
          'description': 'Пекинка, огурец, томат черри, сыр, соус на основе йогурта',
          'price1': 150,
          'price2': 180,
          'ves1': '320 гр.',
          'ves2': '420 гр.',
          'src': require('@/assets/shava2.png'),
          'src2': require('@/assets/shava3.png'),
          'size1': 'Маленький',
          'size2': 'Большой',
        }
      ],
    }),
  }
</script>

<style scoped>
  .font{
        font-family: myriad-pro-condensed, sans-serif !important;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
  }
</style>
