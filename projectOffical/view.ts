const currentUserString = localStorage.getItem('current_user');
const userCardsFromLocalStorage:any = localStorage.getItem(`${currentUserString}.cards`)
const userCards = JSON.parse(userCardsFromLocalStorage);
const imgArray:any  = []


const containerCard = document.querySelectorAll(".container__card")
function showCardsInAlbum(){
    for(let i = 1; i< containerCard.length+1; i++){
        const img = document.getElementById(`${i}`)!
        imgArray.push(img)
    }
    
    for(let i = 0; i< imgArray.length+1; i++ ){
        for(let j =0; j< userCards.length; j++){
            if(imgArray[i].id == userCards[j].cardId){
                imgArray[i].src = userCards[j].cardFace;
            }
            }
        }
    

}

showCardsInAlbum()
