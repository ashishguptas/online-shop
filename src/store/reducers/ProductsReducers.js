const initState = {
    products: [
        {
            id: 1,
            name: 'OPPO A31 (Mystery Black, 128 GB)  (6 GB RAM)',
            image: 'https://rukminim1.flixcart.com/image/416/416/k7531jk0/mobile/a/x/n/oppo-a31-cph2015-original-imafpg3h6jvsvh2r.jpeg',
            price: 11999,
            discount: 10,
            discountPrice: (11999 - 10 / 100 * 11999),
            quantity: 1,
            desc: 'This Oppo mobile phone is not just easy on the eyes but it’s also equipped with innovative features. With 6 GB RAM, you can play games and multitask with ease. Thanks to its large memory capacity, you can save all your vacation pictures and other memories without worrying about storage issues. Its 4230 mAh battery ensures that you get enough battery power to listen to music, stream videos, game, and more for a long time.'
        },
        {
            id: 2,
            name: 'POCO C3 (Arctic Blue, 32 GB)  (3 GB RAM)',
            image: 'https://rukminim1.flixcart.com/image/416/416/kfvfwy80/mobile/j/h/t/poco-c3-mzb07riin-original-imafw8qbg63kvngr.jpeg?q=70',
            price: 9999,
            discount: '25',
            discountPrice: (9999 - 25 / 100 * 9999),
            quantity: 1,
            desc: 'If your old phone is acting up, then it’s time to replace it with this smartphone from POCO. Loaded with a host of amazing features, ranging from a MediaTek Helio G35 Octa-core processor to a 5000-mAh battery, this smartphone is what long hours of performance are all about. And, if you have a thing for video games, then you can enjoy lag-free gaming on this phone courtesy of the HyperEngine Game Technology.'
        }, {
            id: 3,
            name: 'Samsung Galaxy F41 (Fusion Blue, 64 GB)  (6 GB RAM)',
            image: 'https://rukminim1.flixcart.com/image/416/416/kfzq8i80/mobile/y/j/f/samsung-galaxy-f41-sm-f415fzbdins-original-imafwbnpdafmeuj6.jpeg?q=70',
            price: 15499,
            discount: '22',
            discountPrice: (15499 - 22 / 100 * 15499),
            quantity: 1,
            desc: 'The Samsung Galaxy F41 is a phone you can count on for almost everything! When you have to click a picture of your family, you can fit everyone into the frame with the help of its 8 MP ultra-wide camera. Oh, and if you want to capture the beauty of your surroundings, the 64 MP camera will do the work for you! Not to forget, it is sleek and lightweight, so you can carry it around effortlessly.'
        }, {
            id: 4,
            name: 'Soft Skills - The Software Developer\'s Life Manual',
            image: 'https://rukminim1.flixcart.com/image/416/416/jpr86fk0/book/6/4/5/soft-skills-original-imafbxzxfhv3hnhr.jpeg?q=70',
            price: 533,
            discount: '2',
            discountPrice: (533 - 2 / 100 * 533),
            quantity: 1,
            desc: 'Soft Skills: The software developer\'s life manual is a guide to a well-rounded, satisfying life as a technology professional. In it, developer and life coach John Sonmez offers advice to developers on important "soft" subjects like career and productivity, personal finance and investing and even fitness and relationships. Arranged as a collection of 71 short chapters, this fun-to-read book invites you to dip in wherever you like.'
        }, {
            id: 5,
            name: 'LG 6 kg 5 Star Fully Automatic Front Load with In-built Heater White  (FHM1006ADW)',
            image: 'https://rukminim1.flixcart.com/image/416/416/kd4uj680/washing-machine-new/g/q/x/fhm1006adw-abwqeil-lg-original-imafu3tacyg25agu.jpeg?q=70',
            price: 23990,
            discount: '20',
            discountPrice: (23990 - 20 / 100 * 23990),
            quantity: 1,
            desc: 'If you love wearing clean clothes, then this LG washing machine will let you keep this feeling intact. It comes with the 6 Motion Direct Drive Technology which helps in washing laundry thoroughly and without damaging any fabric. It has a heater too, which facilitates the removal of tough stains from your clothes by washing them with hot water. What\'s more, it has a Child Lock feature through which you can keep the control panel\'s settings safe from getting tampered.'
        }, {
            id: 6,
            name: 'Aurion Heavy Punch Bag Set Boxing Kit',
            image: 'https://rukminim1.flixcart.com/image/416/416/k5wse4w0/kit/p/g/y/heavy-punch-bag-set-7kqcdxj7-aurion-original-imafzhwuc9auayvg.jpeg?q=70',
            price: 4999,
            discount: '25',
            discountPrice: (4999 - 25 / 100 * 4999),
            quantity: 1,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }, {
            id: 7,
            name: 'Whirlpool 1.5 Ton 5 Star Split Inverter AC - White  (1.5T Magicool Pro 5S COPR INV, Copper Condenser)',
            image: 'https://rukminim1.flixcart.com/image/416/416/kd4uj680/air-conditioner-new/e/w/p/1-5t-magicool-pro-5s-copr-inv-mps-1-5-split-whirlpool-inverter-original-imafu44ghmq8vdhg.jpeg?q=70',
            price: 32999,
            discount: '25',
            discountPrice: (32999 - 25 / 100 * 32999),
            quantity: 1,
            desc: 'The above-mentioned standard installation fee does not include accessory charges. Charges for any extra accessories need to be paid separately to the technician in addition to the standard installation feeFor products requiring installation, returns are valid only when they are installed by Flipkart-authorized personnel.'
        }, {
            id: 8,
            name: 'Mi 4X 108 cm (43) Ultra HD (4K) LED Smart Android TV',
            image: 'https://rukminim1.flixcart.com/image/416/416/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg',
            price: 25999,
            discount: '25',
            discountPrice: (25999 - 25 / 100 * 25999),
            quantity: 1,
            desc: 'There is no fun in watching your favourite movie or show on a TV where the display quality is poor. Now, don’t ruin the fun and watch them all in good and clear-quality on this 108 cm (43) Mi smart TV. Its 4K display can accentuate your viewing experience and make it even better. You can even access video streaming apps on it and never run out of quality-content to watch and enjoy. It comes with 2 speakers that deliver powerful audio which lets you experience the environment of a cinema hall right in your bedroom or living room.'
        },
    ],
    product: {}
}



const SORT_BY_PRICE = "SORT_BY_PRICE";

export const sortByPrice = payload => ({
    type: SORT_BY_PRICE,
    payload
});

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        case SORT_BY_PRICE:
            let sortByPriceState = Object.assign({}, state);
            let sortedPriceArr =
                action.payload.direction === "asc"
                    ? sortAsc(state.products, "price")
                    : sortDesc(state.products, "price");

            sortByPriceState.products = sortedPriceArr;

            return sortByPriceState
        default:
            return state;
    }
}


function sortAsc(sortedPriceArr, field) {
    console.log(sortedPriceArr)
    return sortedPriceArr.sort(function(a, b) {
      if (a[field] > b[field]) return 1;
  
      if (b[field] > a[field]) return -1;
  
      return 0;
    });
  }

function sortDesc(sortedPriceArr, field) {
    // console.log(sortedPriceArr)
    return sortedPriceArr.sort(function(a, b) {
      if (a[field] > b[field]) return -1;
  
      if (b[field] > a[field]) return 1;
  
    //   return 0;
    });
}


export default ProductsReducer