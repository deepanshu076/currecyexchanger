const Base_URL='http://cdn,jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

const dropdowns=document.querySelectorAll('.dropdown select');
const btn=document.querySelector('form button');
const fromCurr=document.querySelector('.from select');
const toCurr=document.querySelector('.to select');

for(let select of dropdowns){
    for(currCode in countryList ){
        let newoption=document.createElement('option');
        newoption.innerText=currCode;
        newoption.value=currCode;
        if(select.name==='from' && currCode==='USD'){
            newoption.selected='selected';
        }else if(select.name==='to' && currCode==='INR'){
            newoption.selected='selected';
        }
        select.append(newoption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
    
}

const updateFlag = (element) =>{
    let currCode=element.value;
    let countrycode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countrycode}/shiny/64.png`;
    let img=element.parentElement.querySelector('img');
    img.src=newSrc;
};

btn.addEventListener('click',async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector('.amount input');
    let amtval=amount.value;
    if(amtval==='' || amtval<1){
        amtval=1;
        amount.value="1";
    }
    //console.log(fromCurr.value,toCurr.value);
    let URL=`${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response= await fetch (URL);
    console.log(response);
})