function xemngay(){
    let thang= document.getElementById('thang').value;
    if(thang == 1 ||thang== 3||thang ==5||thang ==7||thang==8||thang==10||thang==12)
    {
        document.getElementById('songay').innerHTML = 31;
    }
    else if (thang == 2)
    {
        document.getElementById('songay').innerHTML = 28;
    }
    else
    {
        document.getElementById('songay').innerHTML = 30;
    }
}