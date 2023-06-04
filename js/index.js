window.onload=function(){
    const vm =new Vue({
        el:"#box",
        data:{
            user:'',
            sendEnabled:true,
            list:{},
            gotten:false,
            day:0,
        },
        computed:{
            cal(){
                this.day =parseInt((new Date().getTime()-new Date(2023,2,31).getTime())/1000/3600/24);
                var x = this.day<4*30?2:this.day<8*30?1.8:1.7;
                return parseInt(70*Math.pow(this.list.weight,0.75)*x/this.list.hasFood);
            },
            num(){
                return parseInt(this.cal / this.list.unit);
            }
        },
        methods:{
            init(){
                this.getData();
            },
            getData(){
                var config={
                    method:"GET",
                    redirect:"follow"
                }
                fetch("https://script.google.com/macros/s/AKfycbzfGb74JNKIHQdFA-KQBixgdUemxgV4RlEYtYX6y-WAb743EvYAgEASkgiqwD8HAZMNxg/exec",config)
                .then(res=>res.json())
                .then(function(res){
                    vm.list = res;
                    vm.gotten=true;
                    if(res.status!="") vm.sendEnabled=false;
                });
            },
            sendStatus(){
                var btn =document.getElementById("btn");
                this.user =prompt("請輸入 PassWord：");
                console.log(this.user)
                if((this.user.trim()!="" && this.user!=undefined) && this.sendEnabled){
                    var load =0;
                    this.sendEnabled=false;
                    btn.innerText="傳送中";
                    var formData = new FormData();
                    formData.append("user",this.user);
                    var config={
                        method:"POST",
                        body:formData,
                        redirect:"follow"
                    }
                    const timer = setInterval(function(){
                        var plus = Math.random()*12.5;
                        load+=plus;
                        btn.style="background-size:"+load+"%; color:gray; ; border:1px solid rgb(196,196,196);";
                        if(load>80) clearInterval(timer);
                    },145);
                    fetch("https://script.google.com/macros/s/AKfycbzfGb74JNKIHQdFA-KQBixgdUemxgV4RlEYtYX6y-WAb743EvYAgEASkgiqwD8HAZMNxg/exec",config)
                    .then(res=>res.text())
                    .then(function(res){
                        clearInterval(timer);
                        btn.style="background-size:100%;";
                        if(res=="success"){
                            btn.innerText="已完成";
                            vm.sendEnabled=false;
                        }
                        else{
                            btn.innerText="發送失敗";
                            vm.sendEnabled=true;
                        }
                    });
                }
                else{
                    alert("資料不可為空");
                }
            }
        }
    })
    vm.init();
}