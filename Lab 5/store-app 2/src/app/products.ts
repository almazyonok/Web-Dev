export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  href: string;
  description: string;
  categoryType: string;
  likes: number;
}

export const products = [
  {
    likes: 0,
    id: 1,
    categoryType: "Phones",
    name: 'iPhone 14',
    price: 492970,
    description: "технология NFC: Да, тип экрана: OLED, Super Retina XDR display, диагональ: 6.1 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A15 Bionic, емкость аккумулятора: 3279 мАч",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3e/hf9/63072556548126/apple-iphone-14-128gb-belyj-106363152-1.jpg',
    href: 'https://kaspi.kz/shop/p/apple-iphone-14-256gb-serebristyi-106363152/?c=750000000#!/item',
    rating: 5.0
  },
  {
    likes: 0,
    id: 2,
    categoryType: "Phones",
    name: 'iPhone 14 Plus',
    price: 560050,
    description: 'технология NFC: Да, тип экрана: OLED, Super Retina XDR display, диагональ: 6.7 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A15 Bionic, емкость аккумулятора: 4325 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h32/h66/63073075494942/apple-iphone-14-plus-128gb-belyj-106363233-1.jpg',
    href: 'https://kaspi.kz/shop/p/apple-iphone-14-plus-256gb-serebristyi-106363233/?c=750000000#!/item',
    rating: 5.0
  },
  {
    likes: 0,
    id: 3,
    categoryType: "Phones",
    name: 'iPhone 14 Pro',
    price: 624970,
    description: 'технология NFC: Да, тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы, диагональ: 6.1 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A16 Bionic, емкость аккумулятора: 3125 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    href: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item',
    rating: 5.0
  },
  {
    likes: 0,
    id: 4,
    categoryType: "Phones",
    name: 'iPhone 14 Pro Max',
    price: 693970,
    description: 'технология NFC: Да, тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы, диагональ: 6.7 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A16 Bionic, емкость аккумулятора: 3095 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    href: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    rating: 5.0
  },
  {
    likes: 0,
    id: 5,
    categoryType: "Phones",
    name: 'Samsung Galaxy S22',
    price: 344650,
    description: 'технология NFC: Да, тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+, диагональ: 6.1 дюйм, размер оперативной памяти: 8 ГБ, процессор: 8-ядерный Exynos 2200, емкость аккумулятора: 3700 мАч',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/he3/62349965230110/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-1.jpg',
    href: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item',
    rating: 5.0
  },
  {
    likes: 0,

    id: 6,
    name: 'Apple MacBook Air 13 MGN63',
    price: 478000,
    rating: 5,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    description: "процессор: Apple M1, видеокарта: Apple M1 7 core"
  },

  {
    likes: 0,

    id: 7,
    name: 'Apple MacBook Air 13 MGN63',
    price: 478000,
    rating: 5,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    description: "процессор: Apple M1, видеокарта: Apple M1 7 core"
  },

  {
    likes: 0,

    id: 8,
    name: 'Apple MacBook Air 13 MGN63',
    price: 478000,
    rating: 5,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    description: "процессор: Apple M1, видеокарта: Apple M1 7 core"
  },

  {
    likes: 0,

    id: 9,
    name: 'Apple MacBook Air 13 MGN63',
    price: 478000,
    rating: 5,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    description: "процессор: Apple M1, видеокарта: Apple M1 7 core"
  },

  {
    likes: 0,

    id: 10,
    name: 'Apple MacBook Air 13 MGN63',
    price: 478000,
    rating: 5,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    description: "процессор: Apple M1, видеокарта: Apple M1 7 core"
  },

  {
    likes: 0,
    id: 11,
    name: "Yasin LED-32E7000",
    price: 58000,
    rating: 4,
    categoryType: "TVs",
    href: "https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg",
    description: "диагональ: 32 дюйм"
  },

  {
    likes: 0,
    id: 12,
    name: "Yasin LED-32E7000",
    price: 58000,
    rating: 4,
    categoryType: "TVs",
    href: "https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg",
    description: "диагональ: 32 дюйм"
  },

  {
    likes: 0,
    id: 13,
    name: "Yasin LED-32E7000",
    price: 58000,
    rating: 4,
    categoryType: "TVs",
    href: "https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg",
    description: "диагональ: 32 дюйм"
  },

  {
    likes: 0,
    id: 14,
    name: "Yasin LED-32E7000",
    price: 58000,
    rating: 4,
    categoryType: "TVs",
    href: "https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg",
    description: "диагональ: 32 дюйм"
  },

  {
    likes: 0,
    id: 15,
    name: "Yasin LED-32E7000",
    price: 58000,
    rating: 4,
    categoryType: "TVs",
    href: "https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg",
    description: "диагональ: 32 дюйм"
  },

  {
    likes: 0,
    id: 16,
    name: "Стул В Дом и Сад Рим 1332378511",
    price: 10500,
    rating: 6,
    categoryType: "Chairs",
    href: "https://kaspi.kz/shop/p/stul-v-dom-i-sad-rim-1332378511-97x41x45-sm-korichnevyi-104324743/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hbf/66068342079518/stul-klassicheskii-v-dom-i-sad-rim-1332378511-derevo-97x41x45-sm-104324743-1.jpg",
    description: "тип: стул, материал: дерево, обивка: ткань, жесткость сиденья: средняя, высота, см: 97ширина, см: 41глубина, см: 45, цвет: коричневый, страна: Казахстан"
  },

  {
    likes: 0,
    id: 17,
    name: "Стул В Дом и Сад Рим 1332378511",
    price: 10500,
    rating: 6,
    categoryType: "Chairs",
    href: "https://kaspi.kz/shop/p/stul-v-dom-i-sad-rim-1332378511-97x41x45-sm-korichnevyi-104324743/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hbf/66068342079518/stul-klassicheskii-v-dom-i-sad-rim-1332378511-derevo-97x41x45-sm-104324743-1.jpg",
    description: "тип: стул, материал: дерево, обивка: ткань, жесткость сиденья: средняя, высота, см: 97ширина, см: 41глубина, см: 45, цвет: коричневый, страна: Казахстан"
  },

  {
    likes: 0,
    id: 18,
    name: "Стул В Дом и Сад Рим 1332378511",
    price: 10500,
    rating: 6,
    categoryType: "Chairs",
    href: "https://kaspi.kz/shop/p/stul-v-dom-i-sad-rim-1332378511-97x41x45-sm-korichnevyi-104324743/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hbf/66068342079518/stul-klassicheskii-v-dom-i-sad-rim-1332378511-derevo-97x41x45-sm-104324743-1.jpg",
    description: "тип: стул, материал: дерево, обивка: ткань, жесткость сиденья: средняя, высота, см: 97ширина, см: 41глубина, см: 45, цвет: коричневый, страна: Казахстан"
  },

  {
    likes: 0,
    id: 19,
    name: "Стул В Дом и Сад Рим 1332378511",
    price: 10500,
    rating: 6,
    categoryType: "Chairs",
    href: "https://kaspi.kz/shop/p/stul-v-dom-i-sad-rim-1332378511-97x41x45-sm-korichnevyi-104324743/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hbf/66068342079518/stul-klassicheskii-v-dom-i-sad-rim-1332378511-derevo-97x41x45-sm-104324743-1.jpg",
    description: "тип: стул, материал: дерево, обивка: ткань, жесткость сиденья: средняя, высота, см: 97ширина, см: 41глубина, см: 45, цвет: коричневый, страна: Казахстан"
  },

  {
    likes: 0,
    id: 20,
    name: "Стул В Дом и Сад Рим 1332378511",
    price: 10500,
    rating: 6,
    categoryType: "Chairs",
    href: "https://kaspi.kz/shop/p/stul-v-dom-i-sad-rim-1332378511-97x41x45-sm-korichnevyi-104324743/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/hbf/66068342079518/stul-klassicheskii-v-dom-i-sad-rim-1332378511-derevo-97x41x45-sm-104324743-1.jpg",
    description: "тип: стул, материал: дерево, обивка: ткань, жесткость сиденья: средняя, высота, см: 97ширина, см: 41глубина, см: 45, цвет: коричневый, страна: Казахстан"
  },
];
