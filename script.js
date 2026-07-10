
const target=new Date(2026,10,26,0,0,0);
function addMonths(d,n){let x=new Date(d);let day=x.getDate();x.setDate(1);x.setMonth(x.getMonth()+n);let last=new Date(x.getFullYear(),x.getMonth()+1,0).getDate();x.setDate(Math.min(day,last));return x;}
function update(){
 let now=new Date();
 if(now>=target){['months','days','hours','minutes','seconds'].forEach(id=>document.getElementById(id).textContent=0);return;}
 let months=0,start=new Date(now);
 while(addMonths(start,1)<=target){start=addMonths(start,1);months++;}
 let rem=target-start;
 let days=Math.floor(rem/86400000);rem-=days*86400000;
 let hrs=Math.floor(rem/3600000);rem-=hrs*3600000;
 let mins=Math.floor(rem/60000);rem-=mins*60000;
 let secs=Math.floor(rem/1000);
 monthsEl.textContent=months;
 daysEl.textContent=days;
 hoursEl.textContent=hrs;
 minutesEl.textContent=mins;
 secondsEl.textContent=secs;
}
const monthsEl=months,daysEl=days,hoursEl=hours,minutesEl=minutes,secondsEl=seconds;
update();setInterval(update,1000);
