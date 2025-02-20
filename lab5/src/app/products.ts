export interface Product {
  id: number;
  link: string;
  name: string;
  img: string[];
  price: number;
  description: string;
  rating: number;
  currentImageIndex: number;
  categoryId: number;
  likes:number;
}

export const products = [
  {
    id: 1,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h74/hf7/85118753931294.png?format=gallery-large","https://resources.cdn-kaspi.kz/img/m/p/ha9/hab/85116146384926.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb8/h6a/85116146417694.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h5e/h13/85118753964062.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h6b/h70/85118753996830.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h75/h67/85118754029598.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h8c/ha8/85120231079966.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h74/hee/85120231112734.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h5e/h1c/85120231145502.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hca/hb9/85120231211038.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h6a/h66/85120231276574.jpg?format=gallery-medium"],
    name: 'Apple Vision Pro 512GB',
    price: 2697154,
    description: 'Internal memory capacity: 512.0 GB.Video recording: Yes.Battery capacity: 3166.0 match.Viewing angle: 110.0 degrees.Controls: touch panel,voice control.Approximate operating time: 5.0 hours',
    link: 'https://kaspi.kz/shop/p/apple-vision-pro-512-gb-116472619/?c=750000000',
    rating: 0,
    currentImageIndex:0,
    categoryId:4,
    likes:0,
  },
  {
    id: 2,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h5b/h39/85167731212318.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h01/h63/84713103917086.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hd3/hd5/84713103982622.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h3a/hf7/84713104048158.png?format=gallery-medium"],
    name: 'MacBook Pro 14 MRX33 SSD:512GB RAM:18GB',
    price: 1034975,
    description: 'The Apple MacBook Pro 14 MRX33 is a sleek and high-performance black laptop, featuring a 14-inch display, powerful hardware, and the macOS operating system.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000',
    rating: 5,
    currentImageIndex:0,
    categoryId:2,
    likes:0,
  },
  {
    id: 3,
    img:["https://resources.cdn-kaspi.kz/img/m/p/p34/pae/24852606.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h5a/h0e/86540810780702.jpg?format=gallery-medium"],
    name: 'Keychron K3 HotSwap Gateron Brown Switch ',
    price: 39990,
    description: 'Optical-mechanical keyboard with a classic design, designed for desktop computers, featuring wireless connectivity, and equipped with Gateron Brown mechanical switches.',
    link: 'https://kaspi.kz/shop/p/keychron-k3-hotswap-gateron-brown-switch-seryi-105986842/?c=750000000',
    rating: 5,
    currentImageIndex:0,
    categoryId:4,
    likes:0,
  },
  {
    id: 4,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h08/h5f/63839171149854.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/haa/h0f/63839173509150.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h67/h6e/63839176720414.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h27/hbb/63839179866142.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc7/hbb/63839183142942.jpg?format=gallery-medium"],
    name: 'Ibanez GRG121DX-BKF Black',
    price: 134990,
    description: 'Electric guitar with 6 strings, superstrat body shape, not specifically designed for left-handed players.',
    link: 'https://kaspi.kz/shop/p/ibanez-grg121dx-bkf-black-14200417/?c=750000000',
    rating: 5,
    currentImageIndex:0,
    categoryId:4,
    likes:0,
  },{
    id: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h4c/h48/84690345918494.jpg?format=gallery-medium"],
    name: 'REALTECH 37455530 белый',
    price: 3000000,
    description: 'Windows 11 Pro system with Intel Core i9-14900KF, 64GB RAM, 2TB SSD, NVIDIA GeForce RTX 4090, 4TB HDD, housed in a Midi-Tower case.',
    link: 'https://kaspi.kz/shop/p/realtech-37455530-belyi-115260839/?c=750000000',
    rating: 0,
    currentImageIndex:0,
    categoryId:2,
    likes:0,
  },{
    id:6,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h0a/h51/64417186480158.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h13/ha1/64417188675614.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h5e/h01/64417190739998.jpg?format=gallery-medium"],
    name:"Logitech MX Master 3S",
    price:49106,
    description:"Sensor Type: Optical LED, Connection Type: Wireless (USB, Bluetooth), Interface: USB, Bluetooth, Design: Right-handed, Gaming: No, Optical Sensor Resolution: 8000.0 dpi.",
    link:"https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006560-seryi-106172406/?c=750000000",
    rating: 5,
    currentImageIndex:0,
    categoryId:4,
    likes:0,
  },{
    id:7,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h03/h02/64026264174622.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb3/hfa/64026265518110.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h9f/h05/64026268467230.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h0e/h71/64026270498846.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h2e/hda/64026273939486.jpg?format=gallery-medium"],
    name:"Samsung Odyssey G9 C49G95TSSI LC49G95TSSIXCI",
    price:958898,
    description:"Diagonal: 48.9 inches, Resolution: 5120x1440, LCD Matrix Type: TFT *VA, Brightness: 420.0 cd/m², Response Time: 1.0 ms, Max Refresh Rate: 240.0 Hz, Inputs: HDMI, DisplayPort.",
    link:"https://kaspi.kz/shop/p/samsung-odyssey-g9-c49g95tssi-lc49g95tssixci-chernyi-belyi-101114775/?c=750000000",
    rating: 4.5,
    currentImageIndex:0,
    categoryId:4,
    likes:0,
  }
  ,{
    id:8,
    img:["https://resources.cdn-kaspi.kz/img/m/p/h17/h7f/64441029918750.jpg?format=gallery-medium"],
    name:"Кварцевые Seiko SSE019J1",
    price:2251300,
    description:"Time Display: Analog (hands), Type: Quartz, Case Material: Titanium, For: Men, Color: Black.",
    link:"https://kaspi.kz/shop/p/kvartsevye-seiko-sse019j1-titan-104529276/?c=750000000",
    rating: 0,
    currentImageIndex:0,
    categoryId:4,
    likes:0,
  },{
    id:9,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hea/he8/86596774690846.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/he0/hf5/86596774756382.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h24/h32/86596774821918.jpg?format=gallery-medium"],
    name:"Apple iPhone 15 Pro 1Tb",
    price:806704,
    description:"NFC Technology: Yes, Color: Blue, Screen Type: OLED, Super Retina XDR display, Diagonal: 6.1 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 1024.0 GB, Battery Capacity: 3279.0 mAh.",
    link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-sinii-113138344/?c=750000000",
    rating: 5,
    currentImageIndex:0,
    categoryId:1,
    likes:0,
  },{
    id:10,
    img:["https://resources.cdn-kaspi.kz/img/m/p/hf5/hf5/84077662830622.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hfe/hbf/84077662961694.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h11/h43/84077663027230.jpg?format=gallery-medium"],
    name:"Dyson Gen5detect",
    price:576482,
    description:"Type: Vertical, Cleaning: Dry, Dust Collector Type: Container, Power Consumption: 752.0 W, Power Source: Battery, Color: Purple.",
    link:"https://kaspi.kz/shop/p/dyson-gen5detect-fioletovyi-113592857/?c=750000000",
    rating: 4.5,
    currentImageIndex:0,
    categoryId:4,
    likes:0,
  },
  {
      id: 11,
      name: 'ASUS TUF Gaming A15',
      price: 427870 ,
      description: 'Screen diagonal: 15.6 inches\n' +
          'processor: AMD Ryzen 5 4600H\n' +
          'graphics card: nVidia GeForce GTX1650\n' +
          'RAM size: 8GB\n' +
          'Hard drive type: SSD\n' +
          'total storage capacity: 512 GB',
      rating: 5,
      img: ["https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha2/he7/62100002570270/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg","https://resources.cdn-kaspi.kz/img/m/p/hd9/h2b/64486321258526.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/he0/h20/64486323748894.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h57/h90/64486326304798.jpg?format=gallery-medium"],
      link: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
      categoryId: 2,
      currentImageIndex:0,
      likes: 0,
  },
  {
    id: 13,
    name: 'ASUS ROG Strix G533ZS',
    price: 1846990,
    description: 'Screen diagonal: 15.6 inches\n' +
        'processor: Intel Core i9 12900H\n' +
        'graphics card: NVIDIA GeForce RTX 3080\n' +
        'RAM: 32GB\n' +
        'Hard drive type: SSD\n' +
        'Total hard drive capacity: 1024GB',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h45/h7d/65501275062302.jpg?format=preview-medium","https://resources.cdn-kaspi.kz/img/m/p/h57/h8a/65501275586590.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hfc/h4e/65501276110878.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h81/hae/65501276635166.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb7/h45/65501277159454.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/asus-rog-strix-g533zs-ln050x-90nr0b62-m002d0-chernyi-107490087/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
    currentImageIndex:0,
  },
  {
    id: 14,
    name: 'GIGABYTE AORUS 15 XE5',
    price: 2690,
    description: 'Screen diagonal: 15.6 inches\n' +
        'processor: Intel Core i7-12700H\n' +
        'graphics card: NVIDIA GeForce RTX 3070 Ti\n' +
        'RAM size: 16GB\n' +
        'Hard drive type: SSD\n' +
        'Total hard drive capacity: 1024GB',
    rating: 4,
    img: ["https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he2/h22/52208748593182/gigabyte-aorus-15-xe5-xe5-73rub34sh-seryj-105664740-1.jpg","https://resources.cdn-kaspi.kz/img/m/p/he3/hab/63824263479326.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hdc/h8a/63824264396830.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h70/h09/63824264986654.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hef/h63/63824265576478.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hfa/h9c/63824266100766.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/gigabyte-aorus-15-xe5-xe5-73eeb34sh-chernyi-107137051/?c=750000000#!/item",
    categoryId: 2,
    currentImageIndex:0,
    likes: 0,
  },
  {
    id: 15,
    name: 'Apple iPhone 14 Pro Max 256Gb Purple',
    price: 620646,
    description: 'NFC technology: Yes\n' +
        'color: purple\n' +
        'Screen type: OLED, Super Retina XDR display\n' +
        'diagonal: 6.7 inch\n' +
        'main memory size: 6GB\n' +
        'processor: 6-core Apple A16 Bionic\n' +
        'Built-in memory: 256GB\n' +
        'Battery capacity: 3095mAh',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/ha5/hae/64508111912990.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h11/h2e/64508113485854.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/he8/h62/64508118794270.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h02/h9b/64508121710622.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
    categoryId: 1,
    currentImageIndex: 0,
    likes: 0,
  },
  {
    id: 16,
    name: ' Google Pixel 7 8 Gb/128Gb White',
    price: 218744,
    description: 'NFC technology: Yes\n' +
        'Color: white\n' +
        'Display Type: FHD+ (1080 x 2400) OLED\n' +
        'diagonal: 6.3 inches\n' +
        'RAM size: 8GB\n' +
        'processor: Google Tensor G2\n' +
        'Built-in memory: 128GB\n' +
        'Battery capacity: 4355mAh',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/ha9/h56/86037204172830.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h68/hbd/86037204205598.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc3/h37/86037204238366.png?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000",
    categoryId: 1,
    likes: 0,
    currentImageIndex: 0,
  },{
    id: 17,
    name: ' Xiaomi 12 Pro NFC 12 ГБ/256 ГБ',
    price: 549980,
    description: 'NFC technology: Yes\n' +
        'Color: white\n' +
        'Display Type: FHD+ (1080 x 2400) OLED\n' +
        'diagonal: 6.3 inches\n' +
        'RAM size: 8GB\n' +
        'processor: Google Tensor G2\n' +
        'Built-in memory: 128GB\n' +
        'Battery capacity: 4355mAh',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h33/h77/64536384405534.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hf9/h86/64536387158046.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h6a/h2c/64536389976094.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/haa/h65/64536392663070.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000",
    categoryId: 1,
    likes: 0,
    currentImageIndex: 0,
  },{
    id:18,
    name:"Apple iPhone 15 128Gb",
    price:374385,
    description:"Apple iPhone 15 128Gb",
    rating:5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h56/hbb/83559339065374.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h2e/hae/83559331856414.png?format=gallery-medium"],
    link:"https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
    categoryId:1,
    likes: 0,
    currentImageIndex:0,
  },
  {
    id:19,
    name:"CASIO MTP-1374L-1AVDF",
    price:25399,
    description:"Analog quartz wristwatch, steel case, non-shock-resistant, for men, black.",
    rating:5,
    img:["https://resources.cdn-kaspi.kz/img/m/p/ha1/ha8/63763581960222.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h2c/h0f/63763582418974.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h20/hd2/63763582877726.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h10/h67/63763583467550.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h4f/h06/63763584057374.jpg?format=gallery-medium"],
    link:"https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374l-1avdf-stal--21400996/?c=750000000#!/item",
    categoryId:3,
    likes:0,
    currentImageIndex:0,
  },
  {
    id: 20,
    name: 'CASIO MTP-1374D-1AVDF silver',
    price: 25500,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h76/h49/63778732965918.jpg?format=preview-medium","https://resources.cdn-kaspi.kz/img/m/p/h4d/h56/63778733588510.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb9/h2c/63778734112798.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h28/hcd/63778734669854.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h49/h39/63778735325214.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/casio-mtp-1374d-1avdf-serebristyi-21401209/?c=750000000",
    categoryId: 3,
    likes: 0,
    currentImageIndex: 0,
  },
  {
    id: 21,
    name: 'CASIO MTP-VD01D-1BVUDF silver',
    price: 16199,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h57/h1e/63780877631518.jpg?format=preview-medium","https://resources.cdn-kaspi.kz/img/m/p/h0b/h8f/63780878483486.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hf0/hb4/63780879007774.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h7c/ha7/63780879532062.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc7/he6/63780879925278.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/casio-mtp-vd01d-1bvudf-serebristyi-21401969/?c=750000000",
    categoryId: 3,
    likes: 0,
    currentImageIndex: 0,
  },
  {
    id: 22,
    name: 'CASIO MTP-1370D-1A1VDF silver',
    price: 22989,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/63775714017310.jpg?format=preview-medium","https://resources.cdn-kaspi.kz/img/m/p/h0f/h16/63775714508830.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/ha5/h65/63775714836510.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/casio-mtp-1370d-1a1vdf-serebristyi-21400929/?c=750000000",
    categoryId: 3,
    likes: 0,
    currentImageIndex: 0,
  },{
    id: 23,
    name: 'CASIO AE-1200WHD-1AVEF silver',
    price: 65,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    img: ["https://resources.cdn-kaspi.kz/img/m/p/hc2/h7f/63815174783006.jpg?format=preview-medium","https://resources.cdn-kaspi.kz/img/m/p/hc4/h11/63815177961502.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h9c/hd4/63815180648478.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/casio-ae-1200whd-1avef-serebristyi-21409364/?c=750000000",
    categoryId: 3,
    likes: 0,
    currentImageIndex: 0,
  },
];

