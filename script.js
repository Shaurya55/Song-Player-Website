for(var i=0;i<document.querySelectorAll('.song').length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var abc=this.innerHTML;
        songs(abc);
    });
}

function songs(key){
    switch(key){
        case "Romantic":
            var r=new Audio("media/Romantic"+rng()+".mp3");
            r.play();
            break;
        case "Hip-Hop":
            var h=new Audio("media/Hip-Hop"+rng()+".mp3");
            h.play();
            break;
        case "Punjabi":
            var p=new Audio("media/Punjabi"+rng()+".mp3");
            p.play();
            break;
        case "Pause":
            location.reload();
            break;
    }
}

function rng()
{
    var rnd = Math.floor(Math.random()*3)+1;
    return rnd;
}