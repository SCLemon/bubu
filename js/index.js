window.onload=function(){
    const vm =new Vue({
        el:"#box",
        data:{
            user:'',
            sendEnabled:true,
            list:{},
            gotten:false,
            day:0,
            unlock:false,
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
                if(this.hasCookie() && this.user!='' && this.user!=undefined) this.createCookie();
            },
            getData(param){
                var btn =document.getElementById("btn");
                if(param=='unlock') btn.innerText="重新汲取資料中...";
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
                    btn.innerText=(vm.list.status!=undefined && vm.list.status!='' || vm.list.food=='無')?'已完成':vm.gotten?'完成按鈕':'讀取中...'
                });
            },
            createCookie(){
                var date =new Date((new Date().getTime()+86400*1000*365)).toUTCString();
                document.cookie="password="+this.user+";expires="+date+";"
            },
            hasCookie(){
                var flag=false;
                var cookies = document.cookie.split(";");
                for(var i=0;i<cookies.length;i++){
                    var key = cookies[i].split("=")[0].trim();
                    var value = cookies[i].split("=")[1];
                    if(key=="password"){
                        this.user=value;
                        flag=true;
                        break;
                    }
                }
                return flag;
            },
            doUnlock(){
                var locker =document.getElementById("locker");
                var flag =true;
                if(!this.hasCookie()) this.user =prompt("請輸入 PassWord：");
                else flag=confirm("快速解除鎖定？");
                if(this.user.trim()!="" && this.user!=undefined && flag){
                    btn.innerText="解除鎖定中...";
                    locker.classList.add("fa-spin");
                    this.unlock=true;
                    var formData=new FormData();
                    formData.append("user",this.user);
                    formData.append("unlock",this.unlock);
                    var config={
                        method:"POST",
                        body:formData,
                        redirect:"follow"
                    }
                    fetch("https://script.google.com/macros/s/AKfycbzfGb74JNKIHQdFA-KQBixgdUemxgV4RlEYtYX6y-WAb743EvYAgEASkgiqwD8HAZMNxg/exec",config)
                    .then(res=>res.text())
                    .then(function(res){
                        locker.classList.remove("fa-spin");
                        vm.unlock=false;
                        if(res=="success") {
                            alert("解除成功！");
                            vm.sendEnabled=true;
                            vm.getData("unlock");
                        }
                        else{
                            alert("解除失敗！");
                            vm.getData("unlock");
                        }
                    });
                }
            },
            banned(){
                alert("資料無需刷新！");
            },
            sendStatus(){
                var btn =document.getElementById("btn");
                var flag =true;
                if(!this.hasCookie()) this.user =prompt("請輸入 PassWord：");
                else flag=confirm("快速傳送？");
                if((this.user.trim()!="" && this.user!=undefined) && this.sendEnabled && flag){
                    var load =0;
                    this.sendEnabled=false;
                    btn.innerText="傳送中";
                    var formData = new FormData();
                    formData.append("user",this.user);
                    formData.append("unlock",this.unlock);
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
                            if(!vm.hasCookie()) vm.createCookie();
                            btn.innerText="已完成";
                            vm.sendEnabled=false;
                        }
                        else{
                            btn.innerText="發送失敗";
                            vm.sendEnabled=true;
                        }
                    });
                }
                else alert("資料不可為空");
            }
        }
    })
    vm.init();
}