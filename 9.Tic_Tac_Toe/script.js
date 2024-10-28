let arr=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

const buttons=document.querySelectorAll('#buttons button');
const chance=document.querySelector('#chance p');
let test=true;
buttons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        let row=Math.floor(index/3);
        let col=index%3;
        
        if(!arr[row][col] && test==true){
            chance.textContent="Player 1";
            arr[row][col]='X';
            button.innerHTML='<img src="cross.png" style="width:80px; height:80px;">';
            test=false;
        }
        else if(!arr[row][col] &&test==false){
            chance.textContent="Player 2";
            arr[row][col]='0';
            button.innerHTML='<img src="circle.png" style="width:80px; height:80px;">';
            test=true;
        }
    })
})