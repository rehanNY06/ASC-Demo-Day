// Next Button code

const database=firebase.database().ref();


let nextButton = document.getElementById("nextButton");
let previousButton = document.getElementById("previousButton");
let arrowtrans = document.getElementById("og");
let notesInput = document.getElementById("input");
let noteContainer = document.getElementById("noteContainer")
let arrowtransit = document.getElementById("ogB");
let pageN = document.getElementById("PageN");
let pageArray = []
let currentP = 1;
let maxP=1;
pageN.innerHTML = "Page " + currentP + " of " + maxP;


function loadpage(){
    notesInput.value="";
    notesInput.value = pageArray[currentP].note;
}

arrowtrans.onclick = function() {
    if (currentP == maxP) {
        maxP++;
    }
    currentP++;
    pageN.innerHTML = "Page " + currentP + " of " + maxP;

    loadpage()
}


arrowtransit.onclick = function() {
    
    if (currentP <= 1) {
        return;
    }
    currentP--;
    pageN.innerHTML = "Page " + currentP + " of " + maxP;

    loadpage()

}

arrowtransit.onmouseover = function() {
    arrowtransit.src='images/flippedred.png';
}
    
arrowtransit.onmouseout = function() {
    arrowtransit.src='images/flippedog.png';
}



arrowtrans.onmouseover = function() {
    arrowtrans.src='images/red_arrow.png';
}
    
arrowtrans.onmouseout = function() {
    arrowtrans.src='images/arrow-back.png';
}

notesInput.addEventListener("keyup", (event) =>{
    event.preventDefault()
        if (event.key=="Enter"){
            console.log("Key Pressed!")
            updateDB()
            
        }
});

function updateDB(event){
    //prevents page from refreshing

    const entry = {
        note: notesInput.value,
        page:currentP,
    }
    database.child(entry.page).set(entry);
}

database.on("value",addNoteToBoard);


function addNoteToBoard(rowData){
    const messageObject = rowData.val();
    console.log(messageObject);
    let currentPage = messageObject.page;

    pageArray=messageObject;
    //pageArray[currentPage]=messageObject.note;

    //noteContainer.innerHTML+=notesInput.value;

    maxP = pageArray.length-1
    pageN.innerHTML = "Page " + currentP + " of " + maxP;
    loadpage()


}


