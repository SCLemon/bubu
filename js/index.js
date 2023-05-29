window.onload=function(){
    const vm =new Vue({
        el:"#box",
        data:{
            user:'',
            sendEnabled:true,
            list:{}
        },
        methods:{
            getData(){
                var config={
                    method:"GET",
                    redirect:"follow"
                }
                fetch("https://script.google.com/macros/s/AKfycbzfGb74JNKIHQdFA-KQBixgdUemxgV4RlEYtYX6y-WAb743EvYAgEASkgiqwD8HAZMNxg/exec",config)
                .then(res=>res.json())
                .then(function(res){
                    vm.list = res;
                    if(res.status=="已完成") vm.sendEnabled=false;
                });
            },
            sendStatus(){
                var btn =document.getElementById("btn");
                this.user =prompt("請輸入 PassKey：");
                if((this.user.trim()!="" || this.user!=undefined) && this.sendEnabled){
                    this.sendEnabled=false;
                    btn.innerText="傳送中";
                    var formData = new FormData();
                    formData.append("user",this.user);
                    var config={
                        method:"POST",
                        body:formData,
                        redirect:"follow"
                    }
                    fetch("https://script.google.com/macros/s/AKfycbzfGb74JNKIHQdFA-KQBixgdUemxgV4RlEYtYX6y-WAb743EvYAgEASkgiqwD8HAZMNxg/exec",config)
                    .then(res=>res.text())
                    .then(function(res){
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
    vm.getData();
}