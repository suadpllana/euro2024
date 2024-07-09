const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");
const submit3 = document.getElementById("submit3");



submit1.addEventListener("click", () =>{
    submit1.style.display = "none";
    submit2.style.display = "block"
    const qfMatch1Winner = document.getElementById("qf-match1-winner").value
    const sfTeam1 = document.getElementById("sf-team1");
    sfTeam1.value = qfMatch1Winner;

    const qfMatch2Winner = document.getElementById("qf-match2-winner").value
    const sfTeam2 = document.getElementById("sf-team2");
    sfTeam2.value = qfMatch2Winner;

    const qfMatch3Winner = document.getElementById("qf-match3-winner").value
    const sfTeam3 = document.getElementById("sf-team3");
    sfTeam3.value = qfMatch3Winner;

    const qfMatch4Winner = document.getElementById("qf-match4-winner").value
    const sfTeam4 = document.getElementById("sf-team4");
    sfTeam4.value = qfMatch4Winner;
})


submit2.addEventListener("click", () => {
    submit2.style.display = "none";
    submit3.style.display = "block"
    const sfMatch1Winner = document.getElementById("sf-match1-winner").value;
    const finalTeam1 = document.getElementById("final-team1");
    finalTeam1.value = sfMatch1Winner;

    const sfMatch2Winner = document.getElementById("sf-match2-winner").value;
    const finalTeam2 = document.getElementById("final-team2");
    finalTeam2.value = sfMatch2Winner;
    
})

submit3.addEventListener("click", () => { 
    submit3.style.display = "none";
    const finalWinner = document.getElementById("final-winner");
    const winner = document.getElementById("winner");
    winner.textContent =  `Your winner is: ${finalWinner.value}` 
})