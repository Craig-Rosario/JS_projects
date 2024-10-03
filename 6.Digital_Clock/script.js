

function updateClock(){
    const now=new Date();
    const hours=now.getHours();
    const mins=now.getMinutes();
    const sec=now.getSeconds();

    const timeStr=`${hours}:${mins}:${sec}`;
    document.getElementById("clock").textContent=timeStr;
}

updateClock();