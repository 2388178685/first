new Vue({
    el: '#app',
    data: {
        num: 5,
        all: false,
        list: [
            {
                id:1,
                img: '../../assets/images/shop_4.jpg',
                goodName: '欧莱雅面霜',
                guige: 50,
                price: 123.00,
                del: '删除',
                number: 1,
                check: false
            },
            {id:2,
                img: 'images/shop_4.jpg',
                goodName: '欧莱雅面霜',
                guige: 50,
                price: 123.00,
                del: '删除',
                number: 1,
                check: false
            },
            {
                id:3,
                img: 'images/shop_4.jpg',
                goodName: '欧莱雅面霜',
                guige: 50,
                price: 123.00,
                del: '删除',
                number: 1,
                check: false
            }
        ]
    },
    methods: {
        hua(i) {
            this.num = i
        },
        del(i) {
            this.list.splice(i, 1)
            this.num=null
            console.log(this)
            this.all = this.list.every((item) => {
                return item.check
            })
            
        },
        jian(i) {
            if (this.list[i].number <= 0) {
                return
            }
            this.list[i].number--

        },
        add(i) {
            this.list[i].number++
        },
        check(i) {
            
            this.list[i].check = !this.list[i].check
            this.all = this.list.every((item) => {
                return item.check
            })

        },
        checkAll() {
            this.all = !this.all
            this.list.map((item, index) => {
                item.check = this.all
            })

        },
    },
    computed: {
        addAll() {
            sum = 0;
            
            this.list.map((item, index, err) => {
                if(item.check){
                    sum += item.number * item.price
                }
                
            })
            return sum
        }
    },
})