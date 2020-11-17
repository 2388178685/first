new Vue({
    el: '#app',
    data: {
        idx:0,
        tuijian:['热门推荐','热门推荐','热门推荐','热门推荐'],
        goodList: [
            {
                img: 'images/shop_4.jpg',
                goodName: '雅诗兰黛染发膏60ml',
                price: 123.00,
                zong: '已售600件',
                qianggou: '立即抢购'
            },
            {
                img: 'images/shop_4.jpg',
                goodName: '雅诗兰黛染发膏60ml',
                price: 123.00,
                zong: '已售600件',
                qianggou: '立即抢购'
            },
            {
                img: 'images/shop_4.jpg',
                goodName: '雅诗兰黛染发膏60ml',
                price: 123.00,
                zong: '已售600件',
                qianggou: '立即抢购'
            },
        ]
    },
    methods:{
        click(num){
            console.log(num)
            this.idx=num
        }
    }
})