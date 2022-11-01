import { defineStore } from "pinia";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export const useProductsStore = defineStore("products", {
    state: () => ({
       /* products: [
            {
                id: "53057f24-c17d-4d94-ba83-0147277f1f01",
                name: "YOZAKURA • HOODIE",
                price: "69,95",
                description: '夜桜 // "Yozakura"\n\nDesign inspired by Yozakura (夜桜: Cherry blossoms at night)\n\nGazing through the window where the cherry blossoms and stars intertwine.\n\nYozakura means night cherry blossom, watching the cherry blossoms at night is called Yozakura.\n\n• Sakura Worlds design on the front and back\n• Traditional screen print\n• 65% Cotton\n• 35% Polyester',
                imgUrl: '/img/png/products/hanami/yozakura.png',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022'
            },
            {
                id: "61e8b9a6-c7a0-430a-a116-36947655fb08",
                name: "HANAMI • CAP BLACK",
                price: "24,95",
                description: 'はなみ// Hanami\n\nHanami is the Japanese traditional custom of enjoying the transient beauty of flowers. In this case almost always referring to those of the sakura variant.\n\n• Embroidered "はなみ with sakura branches" on the front\n• Beechfield 5 panel Cap\n• Adjustable low profile velcro-strap.\n• 100% Cotton',
                imgUrl: '/img/png/products/hanami/hanamiCap.png',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022'
            },
            {
                id: "0e9c3217-bad1-4335-9a85-9c3fce0841d8",
                name: "TSUNDERE • HOODIE",
                price: "69,95",
                description: "顔文字// IMOUTO\n\nUnable to express her emotions and the love she undoubtedly feels for you, the tsundere acts as if they do not like you. At all.\n What is sweeter than seeing the cute side of a person after enduring the insults and the glares?",
                imgUrl: '/img/png/products/imouto/tsundere.png',
                type: 'Clothes',
                year: 2022,
                collection: 'IMOUTO //SS2021'
            },
            {
                id: "2d25277b-63ad-42ff-82a8-2f85d86a5c58",
                name: "HANAMI PACK • STICKERS",
                price: "12,00",
                description: "はなみ// Hanami\n\nThe Hanami sticker pack. 5 stickers with your favourite designs from our Hanami collection!\nDecorate and personalise everything you can imagine with our durable Japanese inspired water resistant PVC stickers.\n\nImportant: When we run out of a sticker design, we'll replace it with another! So it's possible you get duplicates.\n\n• Outdoor PVC sticker\n• Water resistant\n• Shiny finish with UV dried ink\n• Dimensions 7.50 x 7.50 CM , 5.5 x 8.5 CM , 9.00 x 9.00 CM & 5.00 x 14.80 CM",
                imgUrl: '/img/png/products/hanami/hanamiStickers.png',
                type: 'Accesories',
                year: 2022,
                collection: 'HANAMI //AW2021'
            },
            {
                id: "ebd015dd-09b5-4c74-a5ab-a3e2af325b18",
                name: "YOZAKURA • T-SHIRT BLACK",
                price: "39,95",
                description: "Design inspired by Yozakura (夜桜: Cherry blossoms at night) Gazing through the window where the cherry blossoms and stars intertwine.\n\nHanami is the Japanese traditional custom of enjoying the transient beauty of flowers. In this case almost always referring to those of the sakura variant.\n\n• Elastane rib round collar\n• Kaomoji Regular Unisex T-shirt\n• Traditional screen print\n• 100% Cotton eco-friendly material",
                imgUrl: '/img/png/products/hanami/yozakuraTshirt.png',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022'
            },
            {
                id: "64778134-5fba-40c2-8cc0-4dd8370d99d2",
                name: "KANAGAWA • DRAWSTRING BAG",
                price: "29,95",
                description: "Perfect for school, shopping and everyday travel. Bring kaomoji with you.\n\n• 100% waterproof\n• Durable polyester\n• Large main compartment keeps your gear safe\n• Additional inner pocket for your phone & keys\n• Original Kanagawa design",
                imgUrl: '/img/png/products/hanami/kanagawa.png',
                type: 'Bags',
                year: 2022,
                collection: 'HANAMI //SS2022'
            },
            {
                id: "4441153e-1bfc-45e6-9bd6-3fa5939440ac",
                name: "BLOSSOM • T-SHIRT WHITE",
                price: "39,95",
                description: "Sakura is the Japanese word for cherry blossom, they are a symbolic flower of the spring, a time of renewal, and the fleeting nature of life. Their life is very short. After their beauty peaks around two weeks, the blossoms start to fall.\n\nYozakura means night cherry blossom, watching the cherry blossoms at night is called Yozakura.\n\n• Elastane rib round collar\n• Kaomoji Regular Unisex T-shirt\n• Traditional screen print\n• 100% Cotton eco-friendly material",
                imgUrl: '/img/png/products/hanami/blossomTshirt.png',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022'
            },
            {
                id: "da88dd51-8505-4e67-beab-622b0d0d75df",
                name: "IMOUTO PACK • STICKER",
                price: "11,00",
                description: "Decorate and personalise everything you can imagine with our durable Japanese inspired water resistant PVC stickers.\n\nImportant: When we run out of a sticker design, we'll replace it with another! So it's possible you get duplicates.\n\n• Outdoor PVC sticker\n• Water resistant\n• Shiny finish with UV dried ink\n• Dimensions 7.50 x 7.50 CM , 7.50 x 7.50 CM , 7.50 x 7.50 CM & 7.50 x 10.0 CM",
                imgUrl: '/img/png/products/imouto/imoutoStickers.png',
                type: 'Accesories',
                year: 2021,
                collection: 'IMOUTO //SS2021'
            },
            {
                id: "9bb91504-9a47-41a8-a76f-caf0b9fff81d",
                name: "KANASHII • T-SHIRT",
                price: "39,95",
                description: "ぬくぬくにぎりめし //  'nukunukunigirimeshi'\n\nExclusive collaboration between ぬくぬくにぎりめし and kaomoji®\n\n• Artwork by ぬくぬくにぎりめし on the front\n• Elastane rib round collar\n• Kaomoji Regular Unisex T-shirt\n• Traditional screen print\n• 100% Cotton",
                imgUrl: '/img/png/products/imouto/kanashi.png',
                type: 'Clothes',
                year: 2021,
                collection: 'IMOUTO //SS2021'
            },
            {
                id: "3556c78b-89f5-4109-a0a4-23847297376b",
                name: "USAGI • T-SHIRT",
                price: "39,95",
                description: "この商品を使った後で、// After you have used this product\nリサイクルしてください。// Please recycle it.\n\n• Artwork by MR2D @collateralds on the front\n• Elastane rib round collar\n• Kaomoji Regular Unisex T-shirt\n• Traditional screen print\n• 100% Cotton",
                imgUrl: '/img/png/products/imouto/usagi.png',
                type: 'Clothes',
                year: 2021,
                collection: 'IMOUTO //SS2021'
            },
            {
                id: "32f120ca-64d8-4dfe-b869-db3b4eb9251c",
                name: "SEIGAIHA WHITE • FACEMASK",
                price: "4,95",
                description: "Original design by: kaomoji®\n青海波 // SEIGAIHA\n顔文字 // KAOMOJI\n\nThis facemask is made for comfort and designed for style.\n\n• 100% Cotton eco-friendly material\n• Protects you from smog, smoke and dust\n• One size fits most\n• Hand-sewn in Portugal",
                imgUrl: '/img/png/products/imouto/seigaiha.png',
                type: 'Masks',
                year: 2021,
                collection: 'IMOUTO //SS2021'
            },
            {
                id: "e60ef643-1875-421f-8832-3f14dc74c397",
                name: "TSUNDERE • TOTE BAG",
                price: "23,95",
                description: "Perfect for school, shopping and everyday travel. Bring kaomoji with you.\n\n• 100% durable cotton twill fabric\n• Large main compartment keeps your gear safe\n• Additional inner pocket for your phone &amp, keys\n• Screen printed kaomoji logo and Tsundere design\n• Made in Portugal",
                imgUrl: '/img/png/products/imouto/tsundereTote.png',
                type: 'Bags',
                year: 2021,
                collection: 'IMOUTO //SS2021'
            },
            {
                id: "05c2343f-5ef1-462f-bbf9-2cbf956b5219",
                name: "ANNIVERSARY • RELAXED T-SHIRT",
                price: "39,95",
                description: "It's been 5 years... thank you for being part of this amazing journey.\n\n• Traditional screen print\n• Graphic on front and back\n• Thick crewneck collar\n• 100% cotton eco-friendly material",
                imgUrl: '/img/png/products/anniversary/anniversaryTshirt.png',
                type: 'Clothes',
                year: 2020,
                collection: 'ANNIVERSARY //AW2020'
            },
            {
                id: "99a82ff2-ae56-4d39-851a-f97c82645946",
                name: "STUDIO KAOMOJI • DENIM JACKET",
                price: "99,95",
                description: "Our first and very own denim jacket. It will match effortlessly with anything in your wardrobe.\n\n• Embroidered text\n• Screen printed design on back\n• Button closure\n• Two chest, side and inside pockets\n• Made in Portugal",
                imgUrl: '/img/png/products/anniversary/kaoDenim.png',
                type: 'Clothes',
                year: 2020,
                collection: 'ANNIVERSARY //AW2020'
            },
            {
                id: "fcabceea-0bd5-4c18-9f52-04d5cb231ad3",
                name: "KEIKO • T-SHIRT BLACK",
                price: "39,95",
                description: "When all this seems like it’s ok\nAnd all we feel is day to day, we’re on replay\nNow in black!\n\n• Traditional screen print\n• Graphic on front and back\n• 100% cotton eco-friendly material",
                imgUrl: '/img/png/products/anniversary/keiko.png',
                type: 'Clothes',
                year: 2020,
                collection: 'ANNIVERSARY //AW2020'
            },
            {
                id: "c24f6fdd-4fcb-4a33-a96d-6558be3994a4",
                name: "MISAKI • HOODIE",
                price: "59,95",
                description: "It’s 16:05, class is almost over. Sitting there one row in front of you is Misaki.The afternoon sun fills class with an orange haze, lighting her skin in a subtle glow.\n\n As you observe her, your eyes unexpectedly meet! Your heart flutters as you both look away in nervous embarrassment..\nDoes she feel the same? You wonder..\n\n• Traditionally screen printed\n• Misaki design on front and back\n• 100% cotton eco-friendly material",
                imgUrl: '/img/png/products/anniversary/misaki.png',
                type: 'Clothes',
                year: 2020,
                collection: 'ANNIVERSARY //AW2020'
            },
            {
                id: "425a75b3-7bfe-4359-9ae0-f2724eb693ad",
                name: "ANNIVERSARY COLLECTION • STICKER PACK",
                price: "15,00",
                description: "Anniversary Collection sticker pack\nThis is a pack containing all seven stickers from our Five-Year Anniversary collection.Thank you for your support through these five years!\n\nImportant: When we run out of a sticker design, we'll replace it with another! So it's possible you get duplicates.\n\n• Outdoor PVC stickers\n• Water resistant\n• Shiny finish with UV dried ink",
                imgUrl: '/img/png/products/anniversary/stickerAnniversary.png',
                type: 'Accesories',
                year: 2020,
                collection: 'ANNIVERSARY //AW2020'
            },
            {
                id: "39cf99f3-47df-43b9-b935-9fb61bd6a3f8",
                name: "KAOMOJI LOGO • HARD ENAMEL PIN",
                price: "4,95",
                description: "Enamel pin featuring our timeless logo. You can never go wrong with this one (◕‿◕)\n\nDecorate your T-shirt, hat, backpack or whatever you feel like wearing them on.\n\n• Hard enamel pin\n• Silver metal plated\n• Silver plated butterfly clutch\n• Dimensions 25×20 mm",
                imgUrl: '/img/png/products/anniversary/logoKaomoji.png',
                type: 'Accesories',
                year: 2020,
                collection: 'ANNIVERSARY //AW2020'
            },
            {
                id: "bb657828-0002-45eb-a1ad-0e4b28a2e7ac",
                name: "WINKY FACE • HARD ENAMEL PIN",
                price: "4,95",
                description: "Hey there ;)\nHow you doing ;)\n\nDecorate your T-shirt, hat, backpack or whatever you feel like wearing them on.\n\n• Hard enamel pin\n• Silver metal plated\n• Silver plated butterfly clutch\n• Dimensions 25×20 mm",
                imgUrl: '/img/png/products/anniversary/winkyFace.png',
                type: 'Accesories',
                year: 2020,
                collection: 'ANNIVERSARY //AW2020'
            },
            {
                id: "bb657828-0002-45eb-a1ad-0e4b28a2e7ac",
                name: "TOMODACHI • TOTE BAG",
                price: "29,95",
                description: "Perfect for school, shopping and everyday travel. Bring kaomoji with you.\n\n• 100% durable cotton twill fabric\n• Large main compartment keeps your gear safe\n• Additional inner pocket for your phone &amp, keys\n• Screen printed kaomoji logo and Tsundere design\n• Made in Portugal",
                imgUrl: '/img/png/products/hanami/tomodachiBag.png',
                type: 'Bags',
                year: 2022,
                collection: 'HANAMI //SS2022'
            }
        ],
        localStorageProducts: [
            {
                name: "YOZAKURA • HOODIE",
                price: "€69,95",
                description: '夜桜 // "Yozakura"\n\nDesign inspired by Yozakura (夜桜: Cherry blossoms at night)\n\nGazing through the window where the cherry blossoms and stars intertwine.\n\nYozakura means night cherry blossom, watching the cherry blossoms at night is called Yozakura.\n\n• Sakura Worlds design on the front and back\n• Traditional screen print\n• 65% Cotton\n• 35% Polyester',
                imgUrl: '../assets/png/products/yozakura/',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022'
            },
            {
                name: "HANAMI • CAP BLACK",
                price: "€24,95",
                description: 'はなみ// Hanami\n\nHanami is the Japanese traditional custom of enjoying the transient beauty of flowers. In this case almost always referring to those of the sakura variant.\n\n• Embroidered "はなみ with sakura branches" on the front\n• Beechfield 5 panel Cap\n• Adjustable low profile velcro-strap.\n• 100% Cotton',
                imgUrl: '../assets/png/products/hanamiCap/',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022'
            },
            {
                name: "HANAMI PACK • STICKERS",
                price: "€12,00",
                description: "はなみ// Hanami\n\nThe Hanami sticker pack. 5 stickers with your favourite designs from our Hanami collection!\nDecorate and personalise everything you can imagine with our durable Japanese inspired water resistant PVC stickers.\n\nImportant: When we run out of a sticker design, we'll replace it with another! So it's possible you get duplicates.\n\n• Outdoor PVC sticker\n• Water resistant\n• Shiny finish with UV dried ink\n• Dimensions 7.50 x 7.50 CM , 5.5 x 8.5 CM , 9.00 x 9.00 CM & 5.00 x 14.80 CM",
                imgUrl: '../assets/png/products/hanamiCap/',
                type: 'accesories',
                year: 2022,
                collection: 'HANAMI //SS2022'
            }
        ],*/
        
        products: [],
        firebaseProducts: [],
        cart: null,
        shoppingCart: [],
        filterProducts: []
    }),
    getters: {
        getProducts: (state) => [...state.products]
    },
    actions: {
        async defineDocs() {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {

                const product = {
                    "id": doc.id,
                    "name": doc.data().name,
                    "description": doc.data().description,
                    "price": doc.data().price,
                    "type": doc.data().type,
                    "year": doc.data().year,
                    "imgUrl": doc.data().imgUrl
                }

                this.products.push(product);
            });
        }
        ,
        async uploadProducts() {
            this.products.forEach(async (data) => {
                try {
                    await setDoc(doc(db, "products", data.id), data);
                } catch (error) {
                    console.log(error)
                }
            }

            )
        },
        newProduct(product) {
            this.products.push(product);
            this.localStorageProducts.push(product);
            localStorage.setItem('products', JSON.stringify(this.products));
        },
        loadProducts() {
            this.products = [];
            this.defineDocs();
            console.log(this.products)

            /*this.localStorageProducts = JSON.parse(localStorage.getItem('products'));
            this.products = this.products.concat([this.localStorageProducts.values()]);*/
        },
        getProductById(id) {
            const filteredProducts = this.products.filter((element) => id.toLowerCase() === element.id.toLowerCase());
            return filteredProducts ? { ...filteredProducts[0] } : null
        },
        sortProducts(order) {
            switch (order) {
                case "0":
                    this.products = _.sortBy(this.products, "name");
                    break;
                case "1":
                    this.products = _.sortBy(this.products, "name").reverse();
                    break;
                case "2":
                    this.products = _.sortBy(this.products, "price");
                    break;
                case "3":
                    this.products = _.sortBy(this.products, "price").reverse();
                    break;
                case "4":
                    this.products = _.sortBy(this.products, "type");
                    break;

            }
        },
        filterWine(key, filterDo) {

            if (filterDo == "A") {
                switch (key) {
                    case "noFilter":
                        this.loadWines();
                        break;
                    case "0":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "Clothes");
                        break;
                    case "1":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "Bags");
                        break;
                    case "2":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "Mask");
                        break;
                    case "3":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "sparkling");
                        break;
                    case "4":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.type === "miscellaneous");
                        break;
                }
            }

            if (filterDo == "B") {
                switch (key) {
                    case "noFilter":
                        this.loadWines();
                        break;
                    case "0":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.price < 50);
                        break;
                    case "1":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.price < 90);
                        break;
                    case "2":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.price < 100);
                        break;
                }
            }

            if (filterDo == "C") {
                switch (key) {
                    case "noFilter":
                        this.loadWines();
                        break;
                    case "0":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Spain");
                        break;
                    case "1":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "France");
                        break;
                    case "2":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Chile");
                        break;
                    case "3":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Australia");
                        break;

                    case "4":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Germany");
                        break;

                    case "5":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "EE.UU");
                        break;

                    case "6":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Argentina");
                        break;

                    case "7":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "South Africa");
                        break;

                    case "8":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Portugal");
                        break;

                    case "9":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "New Zealand");
                        break;

                    case "10":
                        this.loadWines();
                        this.wines = this.wines.filter((item) => item.country === "Italy");
                        break;

                }
            }
        }
    }
})