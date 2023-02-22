export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgURL: string;
  productURLkaspi: string;
  productRating: number;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 14',
    price: 492970,
    description: "технология NFC: Да, тип экрана: OLED, Super Retina XDR display, диагональ: 6.1 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A15 Bionic, емкость аккумулятора: 3279 мАч",
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3e/hf9/63072556548126/apple-iphone-14-128gb-belyj-106363152-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/apple-iphone-14-256gb-serebristyi-106363152/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 2,
    name: 'iPhone 14 Plus',
    price: 560050,
    description: 'технология NFC: Да, тип экрана: OLED, Super Retina XDR display, диагональ: 6.7 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A15 Bionic, емкость аккумулятора: 4325 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h32/h66/63073075494942/apple-iphone-14-plus-128gb-belyj-106363233-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/apple-iphone-14-plus-256gb-serebristyi-106363233/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 3,
    name: 'iPhone 14 Pro',
    price: 624970,
    description: 'технология NFC: Да, тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы, диагональ: 6.1 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A16 Bionic, емкость аккумулятора: 3125 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 4,
    name: 'iPhone 14 Pro Max',
    price: 693970,
    description: 'технология NFC: Да, тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы, диагональ: 6.7 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A16 Bionic, емкость аккумулятора: 3095 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 5,
    name: 'Samsung Galaxy S22',
    price: 344650,
    description: 'технология NFC: Да, тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+, диагональ: 6.1 дюйм, размер оперативной памяти: 8 ГБ, процессор: 8-ядерный Exynos 2200, емкость аккумулятора: 3700 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/he3/62349965230110/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 6,
    name: 'Samsung Galaxy S22+',
    price: 475420,
    description: 'технология NFC: Да, тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus, диагональ: 6.6 дюйм, размер оперативной памяти: 8 ГБ, процессор: 8-ядерный Exynos 2200, емкость аккумулятора: 4500 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h48/48695397842974/samsung-galaxy-s22-8-gb-256-gb-zelenyi-103668258-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-256-gb-zelenyi-103668258/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 7,
    name: 'Samsung Galaxy S22 Ultra',
    price: 516619,
    description: 'технология NFC: Да, тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+, диагональ: 6.8 дюйм, размер  оперативной памяти: 12 ГБ, процессор: 8-ядерный Exynos 2200, емкость аккумулятора: 5000 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h1e/48695060561950/samsung-galaxy-s22-ultra-12-256gb-cernyj-podarok-103668309-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 8,
    name: 'Samsung Galaxy Z Fold 3',
    price: 850000,
    description: 'технология NFC: Да, тип экрана: Dynamic AMOLED, HDR10+, Gorilla Glass Victus, диагональ: 7.6 дюйм, размер оперативной памяти: 12 ГБ, процессор: Qualcomm SM8350 Snapdragon 888 5G, емкость аккумулятора: 4400 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h81/44513952595998/samsung-galaxy-z-fold-3-12-512gb-cernyj-102045350-1-Container.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold-3-12-gb-512-gb-chernyi-102045350/?c=750000000#!/item',
    productRating: 5.0
  },
  {
    id: 9,
    name: 'Google Pixel 7',
    price: 339900,
    description: 'технология NFC: Да, тип экрана: FHD+ (1080 x 2400) OLED, диагональ: 6.3 дюйм, размер оперативной памяти: 8 ГБ, процессор: Google Tensor G2, емкость аккумулятора: 4355 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/he6/63411051954206/google-pixel-7-8-gb-128-gb-belyj-106971867-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000#!/item',
    productRating: 4.5
  },
  {
    id: 10,
    name: 'Google Pixel 7 Pro',
    price: 458795,
    description: 'технология NFC: Да, тип экрана: OLED, диагональ: 6.7 дюйм, размер оперативной памяти: 12 ГБ, процессор: Google Tensor G2, емкость аккумулятора: 5000 мАч',
    imgURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h64/63603038748702/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141-1.jpg',
    productURLkaspi: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000#!/item',
    productRating: 4.5
  }
];


// https://kaspi.kz/shop/p/apple-iphone-14-256gb-serebristyi-106363152/?c=750000000#!/item

// https://kaspi.kz/shop/p/apple-iphone-14-plus-256gb-serebristyi-106363233/?c=750000000#!/item

// https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item

// https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item

// https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item

// https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-256-gb-zelenyi-103668258/?c=750000000#!/item

// https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000#!/item

// https://kaspi.kz/shop/p/samsung-galaxy-z-fold-3-12-gb-512-gb-chernyi-102045350/?c=750000000#!/item

// https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000#!/item

// https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000#!/item
