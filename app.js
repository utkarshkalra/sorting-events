

// function sort(var hacks) {
// //   console.log("Printing the array-");
//   var sortedArray = hacks.slice().sort((a, b) => a.dateoh - b.dateoh);
//    console.log(sortedArray);
// return sortedArray;
// }

// function output(){
//     var result="";
//     hackathons= sort(hackathons);
// for(i=0;i<hackathons.length;i++)  
// {
//     var element=hackathons[i]
//     //result=result + element.title + "  " + element.dateoh.getFullYear() +"-"+ 0+(element.dateoh.getMonth()+1) + "-"+ element.dateoh.getDate() +"\n";
//     result=result + element.title + "  " + element.dateoh.toDateString() +"\n";
// }
// // console.log(result);

// document.getElementById("result").innerHTML=result;
    
// }
// output();
function sort(hacks)
{
    console.log("Printing the array-");
    const sortedArray = hacks.slice().sort((a, b) => a.dateoh - b.dateoh);
    console.log(sortedArray);
    console.log();
    var result="";
    for(i=0;i<sortedArray.length;i++)  
{
    var element=sortedArray[i]
    result=result + element.title + "  " + element.dateoh.getFullYear() +"-"+ 0+(element.dateoh.getMonth()+1) + "-"+ element.dateoh.getDate() +"\n";
    //result=result + element.title + "  " + element.dateoh.toDateString() +"\n";
}


document.getElementById("result").innerHTML=result;
}
function output(){
    var hackathons = [
        { title: "Cruzhacks",  dateoh: new Date("2021-01-15") },
        { title: "Ellehack",   dateoh: new Date("2021-01-16") },
        { title: "Delhihacks", dateoh: new Date("2021-09-05") },
        { title: "Boilermake", dateoh: new Date("2021-01-22") },
        { title: "Garudahacks",dateoh: new Date("2021-08-14") },
        { title: "Stormhacks", dateoh: new Date("2021-02-20") },
        { title: "Hacklytics", dateoh: new Date("2021-02-05") },
        { title: "Hoyahacks",  dateoh: new Date("2021-01-29") },
        { title: "Pearlhacks", dateoh: new Date("2021-02-19") },
      ];
sort(hackathons);
}
