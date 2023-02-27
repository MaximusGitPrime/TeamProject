const openedPackContainer = document.querySelector(".openedPackContainer") as HTMLDivElement

class Card{
    id:number
    face:string
    
    constructor(
        public cardId:number,
        public cardFace:string,
        public rarity: 'common' | 'rare',
    ){}
}



const commonCards:Card[]=[
    new Card(1,"./projectPhotos/1.PNG", "common"),
    new Card(2,"./projectPhotos/2.PNG", "common"),
    new Card(3,"./projectPhotos/3.PNG", "common"),
    new Card(4,"./projectPhotos/4.PNG", "common"),
    new Card(5,"./projectPhotos/5.PNG", "common"),
    new Card(6,"./projectPhotos/6.PNG", "common"),
    new Card(7,"./projectPhotos/7.PNG", "common"),
    new Card(8,"./projectPhotos/8.PNG", "common"),
    new Card(9,"./projectPhotos/9.PNG", "common"),
    new Card(10,"./projectPhotos/10.PNG", "common"),
    new Card(11,"./projectPhotos/11.PNG", "common"),
    new Card(12,"./projectPhotos/12.PNG", "common"),
    new Card(13,"./projectPhotos/13.PNG", "common"),
    new Card(14,"./projectPhotos/14.PNG", "common"),
    new Card(15,"./projectPhotos/15.PNG", "common"),
    new Card(16,"./projectPhotos/16.PNG", "common"),
    new Card(17,"./projectPhotos/17.PNG", "common"),
    new Card(18,"./projectPhotos/18.PNG", "common"),
    new Card(19,"./projectPhotos/19.PNG", "common"),
    new Card(20,"./projectPhotos/20.PNG", "common"),
    new Card(21,"./projectPhotos/21.PNG", "common"),
    new Card(22,"./projectPhotos/22.PNG", "common"),
    new Card(23,"./projectPhotos/23.PNG", "common"),
    new Card(24,"./projectPhotos/24.PNG", "common"),
    new Card(25,"./projectPhotos/25.PNG", "common"),
    new Card(26,"./projectPhotos/26.PNG", "common"),
    new Card(27,"./projectPhotos/27.PNG", "common"),
    new Card(28,"./projectPhotos/28.PNG", "common"),
    new Card(29,"./projectPhotos/29.PNG", "common"),
    new Card(30,"./projectPhotos/30.PNG", "common"),
]

const rareCards:Card[]=[
    new Card(31,"./projectPhotos/specials/31.PNG", "rare"),
    new Card(32,"./projectPhotos/specials/32.PNG", "rare"),
    new Card(33,"./projectPhotos/specials/33.PNG", "rare"),
    new Card(34,"./projectPhotos/specials/34.PNG", "rare"),
    new Card(35,"./projectPhotos/specials/35.PNG", "rare"),
    new Card(36,"./projectPhotos/specials/36.PNG", "rare"),
    new Card(37,"./projectPhotos/specials/37.PNG", "rare"),
    new Card(38,"./projectPhotos/specials/38.PNG", "rare"),
    new Card(39,"./projectPhotos/specials/39.PNG", "rare"),
    new Card(40,"./projectPhotos/specials/40.PNG", "rare"),
    new Card(41,"./projectPhotos/specials/41.PNG", "rare"),
    new Card(42,"./projectPhotos/specials/42.PNG", "rare"),
    new Card(43,"./projectPhotos/specials/43.PNG", "rare"),
    new Card(44,"./projectPhotos/specials/44.PNG", "rare"),
    new Card(45,"./projectPhotos/specials/45.PNG", "rare"),
    new Card(46,"./projectPhotos/specials/46.PNG", "rare"),
    new Card(47,"./projectPhotos/specials/47.PNG", "rare"),
    new Card(48,"./projectPhotos/specials/48.PNG", "rare"),
    new Card(49,"./projectPhotos/specials/49.PNG", "rare"),
    new Card(50,"./projectPhotos/specials/50.PNG", "rare"),
    new Card(51,"./projectPhotos/specials/51.PNG", "rare"),
    new Card(52,"./projectPhotos/specials/52.PNG", "rare"),
    new Card(53,"./projectPhotos/specials/53.PNG", "rare"),
    new Card(54,"./projectPhotos/specials/54.PNG", "rare"),
    new Card(55,"./projectPhotos/specials/55.PNG", "rare"),
    new Card(56,"./projectPhotos/specials/56.PNG", "rare"),

]
