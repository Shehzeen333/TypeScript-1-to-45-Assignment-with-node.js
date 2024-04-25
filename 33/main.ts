let storeNumber = [1,2,3,4,5,6,7,8,9];
for(let oneNum of storeNumber){
    let ordinalNumber: string;
    if(oneNum === 1){
        ordinalNumber ="st"
    }
     else if(oneNum === 2){
        ordinalNumber = "nd"   
    }
    else if(oneNum === 3){
        ordinalNumber = "rd"
    }
    else if(oneNum === 4){
        ordinalNumber = "th"
    }
    else{
        ordinalNumber = "th"
    }
    console.log(`${oneNum}${ordinalNumber}`);
}