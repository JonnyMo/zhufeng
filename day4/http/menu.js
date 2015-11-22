window.onload = function(){
    var oBtn = document.querySelector("#btn");
    oBtn.addEventListener('click', function(){
        alert('点我干啥?');
    });

    var cTimer = null;
    clearInterval(cTimer);
    cTimer = setInterval(function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/clock');
        xhr.send();
        xhr.onload = function(){
            if(this.status == 200){
                document.querySelector("#time_box").innerHTML = this.responseText;
            }
        };
    }, 1000);
};