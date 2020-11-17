new Vue({
    el: '#app',
    data: {
        user: {
            tel: '',
            pwd: ''

        }
    },
    methods: {
        login() {
            if (this.user.tel == '' || this.user.pwd == '') {
                alert('请输入必填信息')
            } else {
                console.log(this.user, '登录')
                let a =JSON.parse(localStorage.getItem('use', JSON.stringify(this.user)))
                console.log(a.uname)
                console.log(this.user.tel)
                if(this.user.tel!==a.uname){
                    alert('用户没有注册')
                }else if(this.user.tel==a.uname&&this.user.pwd!==a.pwd){
                    alert('密码错误')
                }else{
                    alert('登陆成功')
                }
            }

        }
    }
})