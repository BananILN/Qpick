export interface Headphone {
    img:string;
    title: string;
    price:number;
    rate: number;
    sale: number | null;
}


export const headphones: Headphone[] = [
    {
        img: "/src/assets/cardImg/appleByz.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        sale: 3527
    },
    {
        img: "/src/assets/cardImg/AppleEarpods.png",
        title: "Apple EarPods",
        price: 2327 ,
        rate: 4.5,
        sale: null
    },
    {
        img: "/src/assets/cardImg/AppleErpod2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        sale: null
    },
] 

export const WirelessHeadPhones: Headphone[] =[
    {
        img: "/src/assets/cardImg/appleAitPod.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        sale: null
    },
    {
        img: "/src/assets/cardImg/Gergax.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        sale: null
    },
    {
        img: "/src/assets/cardImg/Borophone.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        sale: null
    },
    
]