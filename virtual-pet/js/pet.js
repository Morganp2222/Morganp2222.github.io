let happiness = 10;
let tiredness = 0;

function PlayWithPet() {
    console.log("Playing with pet...");
    if (happiness < 10) {
        happiness = happiness + 1;
    }
    console.log("happiness: " + happiness);

    refreshUI();
}

function refreshUI() {
    //happy
    let happyMeter = document.getElementById("happy-meter");
    happyMeter.value = happiness;

    let happyParagraph = document.getElementById("happy-paragraph");
    happyParagraph.innerHTML = happiness;
    //tired
    let tiredMeter = document.getElementById("tired-meter");
    tiredMeter.value = tiredness;

    let tiredParagraph = document.getElementById("tired-paragraph");
    tiredParagraph.innerHTML = tiredness;
    //picture thing
    let petImg = document.getElementById("pet-img");
    let petParagraph = document.getElementById("pet-condition");
    if (happiness <= 2 && tiredness >= 8) {
        petImg.src = "images/dead.jpg"
        petParagraph.innerHTML = "Your pet died"
    } else if (happiness > 0 && tiredness >= 5) {
        petImg.src = "images/tired.jpg"
        petParagraph.innerHTML = "Your pet is tired"
    } else if (happiness <= 5 && tiredness >= 0) {
        petImg.src = "images/sad.jpg"
        petParagraph.innerHTML = "Your pet is depressed"
    } else { //default image and state
        petImg.src = "images/dog.jpg"
        petParagraph.innerHTML = "Your pet is happy";
    }

}


function downPet() {
    if (happiness > 0) {
        happiness -= 1;
    }

    refreshUI()
}

function uppet() {
    if (tiredness < 10) {
        tiredness += 1
    }
    refreshUI()
}

function Sleep() {
    console.log("Pet is sleeping...");
    if (tiredness > 0) {
        tiredness = tiredness - 1;
    }
    console.log("tiredness: " + tiredness);

    refreshUI();
}



let petTimer = setInterval(downPet, 1000);
let petLower = setInterval(uppet, 1000);