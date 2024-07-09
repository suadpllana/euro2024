const teamSubmit = document.getElementById("teamSubmit");
const playerName1 = document.getElementById("playerName1");
const resultName1 = document.getElementById("resultName1");
const playerName2 = document.getElementById("playerName2");
const resultName2 = document.getElementById("resultName2");
const playerName3 = document.getElementById("playerName3");
const resultName3 = document.getElementById("resultName3");
const playerName4 = document.getElementById("playerName4");
const resultName4 = document.getElementById("resultName4");
const playerName5 = document.getElementById("playerName5");
const resultName5 = document.getElementById("resultName5");
const playerName6 = document.getElementById("playerName6");
const resultName6 = document.getElementById("resultName6");
const playerName7 = document.getElementById("playerName7");
const resultName7 = document.getElementById("resultName7");
const playerName8 = document.getElementById("playerName8");
const resultName8 = document.getElementById("resultName8");
const playerName9 = document.getElementById("playerName9");
const resultName9 = document.getElementById("resultName9");
const playerName10 = document.getElementById("playerName10");
const resultName10 = document.getElementById("resultName10");
const playerName11 = document.getElementById("playerName11");
const resultName11 = document.getElementById("resultName11");



teamSubmit.addEventListener("click", () =>{
    if(playerName1.value && playerName2.value && playerName3.value && playerName4.value &&
        playerName5.value && playerName6.value && playerName7.value && playerName8.value && playerName9.value
        && playerName10.value && playerName11.value){
      
    resultName1.textContent = playerName1.value;
    playerName1.classList.add("enable");

    resultName2.textContent = playerName2.value;
    playerName2.classList.add("enable");

    resultName3.textContent = playerName3.value;
    playerName3.classList.add("enable");

    resultName4.textContent = playerName4.value;
    playerName4.classList.add("enable");

    resultName5.textContent = playerName5.value;
    playerName5.classList.add("enable");

    resultName6.textContent = playerName6.value;
    playerName6.classList.add("enable");

    resultName7.textContent = playerName7.value;
    playerName7.classList.add("enable");

    resultName8.textContent = playerName8.value;
    playerName8.classList.add("enable");

    resultName9.textContent = playerName9.value;
    playerName9.classList.add("enable");

    resultName10.textContent = playerName10.value;
    playerName10.classList.add("enable");

    resultName11.textContent = playerName11.value;
    playerName11.classList.add("enable");
    
    alert("You have successfully submitted the team ! Good luck with the points");
         }
else {
    alert("Please fill the rest of the positions");
    return;
}

})



