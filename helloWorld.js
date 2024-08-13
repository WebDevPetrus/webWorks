let alp = "abcdefghijklmonpqrstuvwxyz".split("");
for(let num =0; num <= 200; num++){
    setTimeout(()=>{
        if(num<=7){
            console.log(alp[num]);
        }
        else if((num >= 8) && (num <= 12)){
            console.log("h"+alp[(num-8)]);
        }
        else if((num >= 13) && (num <=24)){
            console.log("he"+alp[(num-13)]);
        }
        else if((num >= 25) && (num <= 36)){
            console.log("hel"+alp[(num-25)]);
        }
        else if((num >= 37) && (num <= 50)){
            console.log("hell"+alp[(num-37)]);
        }
        else if((num >= 51) && (num <= 73)){
            console.log("hello "+alp[(num-51)]);
        }
        else if((num >= 74) && (num <= 87)){
            console.log("hello w"+alp[(num-74)]);
        }
        else if((num >= 88) && (num <= 105)){
            console.log("hello wo"+alp[(num-88)]);
        }
        else if((num >= 106) && (num <= 117)){
            console.log("hello wor"+alp[(num-106)]);
        }
        else if((num >= 118) && (num <= 121)){
            console.log("hello worl"+alp[(num-118)]);
        }
    },num * 50); 
}