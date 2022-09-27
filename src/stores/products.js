import {defineStore} from "pinia";

export const useProductsStore = defineStore("products",{
    state: () => ({
        products: [
            {
                id: "YOZAKURA",
                name: "YOZAKURA • HOODIE",
                price: "69,95",
                description: '夜桜 // "Yozakura"\n\nDesign inspired by Yozakura (夜桜: Cherry blossoms at night)\n\nGazing through the window where the cherry blossoms and stars intertwine.\n\nYozakura means night cherry blossom, watching the cherry blossoms at night is called Yozakura.\n\n• Sakura Worlds design on the front and back\n• Traditional screen print\n• 65% Cotton\n• 35% Polyester',
                imgUrl: 'src/assets/img/png/products/yozakura/1.png',
                imgUrl2: '../assets/img/png/products/yozakura/1.png',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022' 
            },
            {
                id: "HANAMICAP",
                name: "HANAMI • CAP BLACK",
                price: "24,95",
                description: 'はなみ// Hanami\n\nHanami is the Japanese traditional custom of enjoying the transient beauty of flowers. In this case almost always referring to those of the sakura variant.\n\n• Embroidered "はなみ with sakura branches" on the front\n• Beechfield 5 panel Cap\n• Adjustable low profile velcro-strap.\n• 100% Cotton',
                imgUrl: 'src/assets/img/png/products/hanamiCap/1.png',
                imgUrl2: '../assets/img/png/products/hanamiCap/1.png',
                type: 'Clothes',
                year: 2022,
                collection: 'HANAMI //SS2022' 
            },
            {
                id: "HANAMI",
                name: "HANAMI PACK • STICKERS",
                price: "12,00",
                description: "はなみ// Hanami\n\nThe Hanami sticker pack. 5 stickers with your favourite designs from our Hanami collection!\nDecorate and personalise everything you can imagine with our durable Japanese inspired water resistant PVC stickers.\n\nImportant: When we run out of a sticker design, we'll replace it with another! So it's possible you get duplicates.\n\n• Outdoor PVC sticker\n• Water resistant\n• Shiny finish with UV dried ink\n• Dimensions 7.50 x 7.50 CM , 5.5 x 8.5 CM , 9.00 x 9.00 CM & 5.00 x 14.80 CM",
                imgUrl: 'src/assets/img/png/products/hanamiStickers/1.png',
                imgUrl2: '../assets/img/png/products/hanamiStickers/1.png',
                type: 'Accesories',
                year: 2022,
                collection: 'HANAMI //SS2022' 
            },
            
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
        ],
        filterProducts: []
    }),
    getters: {
        getProducts: (state)=> [...state.products]
    },
    actions: {
        newProduct(product) {
            this.products.push(product);
            this.localStorageProducts.push(product);
            localStorage.setItem('products', JSON.stringify(this.products));
        },
        loadProducts(){
            this.products=[];
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'));
            this.products = this.products.concat([...this.localStorageProducts]);
        },
        getProductById(id) {
            const filteredProducts = this.products.filter((element) => id.toLowerCase() === element.id.toLowerCase());
            return filteredProducts ? { ...filteredProducts[0] } : null
        }
    }
})