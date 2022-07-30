let selected;
let val;
let percentage;
let pep;
const reset=document.getElementsByClassName("reset");
const bill=document.getElementsByClassName("doller");
const people=document.getElementsByClassName("profile");
const tip=document.getElementsByClassName("tip-amount");
const total=document.getElementsByClassName("total-tip");
const percent=document.querySelectorAll("li");
const custom=document.getElementsByClassName("normal");
const error=document.getElementsByClassName("error");


function getval(event){
    val= parseFloat(event.target.value);
};


function getpercentage(event){
    if(selected!=undefined){
        selected.style.backgroundColor='';
        selected.style.color='';
    }
    if(selected==event.target){
        selected=undefined
        return 0;
    }

    selected=event.target;
    selected.style.backgroundColor='hsl(172, 67%, 45%)';
    selected.style.color='hsl(183, 100%, 15%)';
    selected=event.target;
    percentage= parseFloat(event.target.value);
    
};


function clear(){
    bill[0].value='';
    val=undefined;
    if(selected!=undefined){
        selected.style.backgroundColor='';
        selected.style.color='';
    }
    custom[0].value='';
    percentage=undefined;
    people[0].value='';
}

function getpeople(event){
    pep=parseInt(event.target.value);

    if(pep==0){
        people[0].style.borderColor='red';
        error[0].style.display='block';
        return undefined;
    }
    else{
        people[0].style.borderColor='';
        error[0].style.display='none';
    }
}

function update(){
    if(val && pep && percentage){
        let TipPerPerson=(percentage/100)*val;
        let totalTip=TipPerPerson*pep;

        tip[0].textContent='$'+TipPerPerson.toFixed(2);
        total[0].textContent='$'+totalTip.toFixed(2);

    }
    else{
        tip[0].textContent='$0.00';
        total[0].textContent='$0.00';
    }
}

people[0].addEventListener('input',(event)=>{getpeople(event); update();});

reset[0].addEventListener('click',(event)=>{clear(); update();});

bill[0].addEventListener('input',(event)=>{getval(event); update();});

percent.forEach(element=>{element.addEventListener('click',(event)=>{getpercentage(event); update();});});

custom[0].addEventListener('input',(event)=>{percentage=parseFloat(event.target.value);});

