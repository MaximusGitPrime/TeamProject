class Card{
    id:number
    category:string
    face:string
    back:string
    
    constructor(
        public cardId:number,
        public cardCategory:string,
        public cardFace:string,
        public cardBack:string
    ){}
}


const cards:Card[]=[
    new Card(1,"common","./projectPhotos/1.PNG","./projectPhotos/cardBack.PNG"),
    new Card(2,"common","./projectPhotos/2.PNG","./projectPhotos/cardBack.PNG"),
    new Card(3,"common","./projectPhotos/3.PNG","./projectPhotos/cardBack.PNG"),
    new Card(4,"common","./projectPhotos/4.PNG","./projectPhotos/cardBack.PNG"),
    new Card(5,"common","./projectPhotos/5.PNG","./projectPhotos/cardBack.PNG"),
    new Card(6,"common","./projectPhotos/6.PNG","./projectPhotos/cardBack.PNG"),
    new Card(7,"common","./projectPhotos/7.PNG","./projectPhotos/cardBack.PNG"),
    new Card(8,"common","./projectPhotos/8.PNG","./projectPhotos/cardBack.PNG"),
    new Card(9,"common","./projectPhotos/9.PNG","./projectPhotos/cardBack.PNG"),
    new Card(10,"common","./projectPhotos/10.PNG","./projectPhotos/cardBack.PNG"),
    new Card(11,"common","./projectPhotos/11.PNG","./projectPhotos/cardBack.PNG"),
    new Card(12,"common","./projectPhotos/12.PNG","./projectPhotos/cardBack.PNG"),
    new Card(13,"common","./projectPhotos/13.PNG","./projectPhotos/cardBack.PNG"),
    new Card(14,"common","./projectPhotos/14.PNG","./projectPhotos/cardBack.PNG"),
    new Card(15,"common","./projectPhotos/15.PNG","./projectPhotos/cardBack.PNG"),
    new Card(16,"common","./projectPhotos/16.PNG","./projectPhotos/cardBack.PNG"),
    new Card(17,"common","./projectPhotos/17.PNG","./projectPhotos/cardBack.PNG"),
    new Card(18,"common","./projectPhotos/18.PNG","./projectPhotos/cardBack.PNG"),
    new Card(19,"common","./projectPhotos/19.PNG","./projectPhotos/cardBack.PNG"),
    new Card(20,"common","./projectPhotos/20.PNG","./projectPhotos/cardBack.PNG"),
    new Card(21,"common","./projectPhotos/21.PNG","./projectPhotos/cardBack.PNG"),
    new Card(22,"common","./projectPhotos/22.PNG","./projectPhotos/cardBack.PNG"),
    new Card(23,"common","./projectPhotos/23.PNG","./projectPhotos/cardBack.PNG"),
    new Card(24,"common","./projectPhotos/24.PNG","./projectPhotos/cardBack.PNG"),
    new Card(25,"common","./projectPhotos/25.PNG","./projectPhotos/cardBack.PNG"),
    new Card(26,"common","./projectPhotos/26.PNG","./projectPhotos/cardBack.PNG"),
    new Card(27,"common","./projectPhotos/27.PNG","./projectPhotos/cardBack.PNG"),
    new Card(28,"common","./projectPhotos/28.PNG","./projectPhotos/cardBack.PNG"),
    new Card(29,"common","./projectPhotos/29.PNG","./projectPhotos/cardBack.PNG"),
    new Card(30,"common","./projectPhotos/30.PNG","./projectPhotos/cardBack.PNG"),
]

<<<<<<< Updated upstream

cards.forEach((card)=>{
    const cardElement = document.createElement("div")
    cardElement.classList.add("card")
    cardElement.innerHTML = `
    <img class = "front" src="${cards[0].cardFace}">
    <img class = "back" src="${cards[0].cardBack}">

    `
})
=======
const rareCards:Card[]=[
    new Card(31,"./projectPhotos/specials/31.PNG"),
    new Card(32,"./projectPhotos/specials/32.PNG"),
    new Card(33,"./projectPhotos/specials/33.PNG"),
    new Card(34,"./projectPhotos/specials/34.PNG"),
    new Card(35,"./projectPhotos/specials/35.PNG"),
    new Card(36,"./projectPhotos/specials/36.PNG"),
    new Card(37,"./projectPhotos/specials/37.PNG"),
    new Card(38,"./projectPhotos/specials/38.PNG"),
    new Card(39,"./projectPhotos/specials/39.PNG"),
    new Card(40,"./projectPhotos/specials/40.PNG"),
    new Card(41,"./projectPhotos/specials/41.PNG"),
    new Card(42,"./projectPhotos/specials/42.PNG"),
    new Card(43,"./projectPhotos/specials/43.PNG"),
    new Card(44,"./projectPhotos/specials/44.PNG"),
    new Card(45,"./projectPhotos/specials/45.PNG"),
    new Card(46,"./projectPhotos/specials/46.PNG"),
    new Card(47,"./projectPhotos/specials/47.PNG"),
    new Card(48,"./projectPhotos/specials/48.PNG"),
    new Card(49,"./projectPhotos/specials/49.PNG"),
    new Card(50,"./projectPhotos/specials/50.PNG"),
    new Card(51,"./projectPhotos/specials/51.PNG"),
    new Card(52,"./projectPhotos/specials/52.PNG"),
    new Card(53,"./projectPhotos/specials/53.PNG"),
    new Card(54,"./projectPhotos/specials/54.PNG")
]
>>>>>>> Stashed changes
