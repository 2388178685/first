new Vue({
    el:'#app',
    data:{
       user:{
           uname:'',
           tel:'',
           pwd:'',
           yanzhengma:'',
           xieyi:[]

       }
    },
    methods:{
        next(){
            if(this.user.uname==''||this.user.tel==''||this.user.pwd==''||this.user.yanzhengma==''){
                alert('请输入必填信息')
            }else{
                console.log(this.user)
                localStorage.setItem('use',JSON.stringify(this.user) )
            }
        }
    }
})