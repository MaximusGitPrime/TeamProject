const packContainer = document.querySelector(".openedPackContainer") as HTMLDivElement

class Card{
    id:number
    face:string
    
    constructor(
        public cardId:number,
        public cardFace:string,
    ){}
}



const commonCards:Card[]=[
    new Card(1,"./projectPhotos/1.PNG"),
    new Card(2,"./projectPhotos/2.PNG"),
    new Card(3,"./projectPhotos/3.PNG"),
    new Card(4,"./projectPhotos/4.PNG"),
    new Card(5,"./projectPhotos/5.PNG"),
    new Card(6,"./projectPhotos/6.PNG"),
    new Card(7,"./projectPhotos/7.PNG"),
    new Card(8,"./projectPhotos/8.PNG"),
    new Card(9,"./projectPhotos/9.PNG"),
    new Card(10,"./projectPhotos/10.PNG"),
    new Card(11,"./projectPhotos/11.PNG"),
    new Card(12,"./projectPhotos/12.PNG"),
    new Card(13,"./projectPhotos/13.PNG"),
    new Card(14,"./projectPhotos/14.PNG"),
    new Card(15,"./projectPhotos/15.PNG"),
    new Card(16,"./projectPhotos/16.PNG"),
    new Card(17,"./projectPhotos/17.PNG"),
    new Card(18,"./projectPhotos/18.PNG"),
    new Card(19,"./projectPhotos/19.PNG"),
    new Card(20,"./projectPhotos/20.PNG"),
    new Card(21,"./projectPhotos/21.PNG"),
    new Card(22,"./projectPhotos/22.PNG"),
    new Card(23,"./projectPhotos/23.PNG"),
    new Card(24,"./projectPhotos/24.PNG"),
    new Card(25,"./projectPhotos/25.PNG"),
    new Card(26,"./projectPhotos/26.PNG"),
    new Card(27,"./projectPhotos/27.PNG"),
    new Card(28,"./projectPhotos/28.PNG"),
    new Card(29,"./projectPhotos/29.PNG"),
    new Card(30,"./projectPhotos/30.PNG"),
]

const rareCards:Card[]=[
    new Card(31,"./projectPhotos/31.PNG"),
    new Card(32,"./projectPhotos/32.PNG"),
    new Card(33,"./projectPhotos/33.PNG"),
    new Card(34,"./projectPhotos/34.PNG"),
    new Card(35,"./projectPhotos/35.PNG"),
    new Card(36,"./projectPhotos/36.PNG"),
    new Card(37,"./projectPhotos/37.PNG"),
    new Card(38,"./projectPhotos/38.PNG"),
    new Card(39,"./projectPhotos/39.PNG"),
    new Card(40,"./projectPhotos/40.PNG"),
    new Card(41,"./projectPhotos/41.PNG"),
    new Card(42,"./projectPhotos/42.PNG"),
    new Card(43,"./projectPhotos/43.PNG"),
    new Card(44,"./projectPhotos/44.PNG"),
    new Card(45,"./projectPhotos/45.PNG"),
    new Card(46,"./projectPhotos/46.PNG"),
    new Card(47,"./projectPhotos/47.PNG"),
    new Card(48,"./projectPhotos/48.PNG"),
    new Card(49,"./projectPhotos/49.PNG"),
    new Card(50,"./projectPhotos/50.PNG"),
    new Card(51,"./projectPhotos/51.PNG"),
    new Card(52,"./projectPhotos/52.PNG"),
    new Card(53,"./projectPhotos/53.PNG"),
    new Card(54,"./projectPhotos/54.PNG")
]


for( let i = 0 ; i < 5 ; i++){
    const cardElement = document.createElement("div")
    cardElement.classList.add("card")
    cardElement.innerHTML = `
    <img class = "front" src="${commonCards[i].cardFace}">
    <img class = "back" src="./projectPhotos/cardBack.PNG">`
    cardElement.addEventListener("click" , ()=>{
        cardElement.classList.add("flipped")
    })
    packContainer.appendChild(cardElement)
}


