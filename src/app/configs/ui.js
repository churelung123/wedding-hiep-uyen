import images from "../images";

const WISH_API_LINK = "https://sheetdb.io/api/v1/jurqnkhwz789o"; // use mock api
const cdnLink =
  "/images";

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    time: {
      date: "30/08",
      year: "2026",
      time: "11:00",
      full: "Chủ nhật, Ngày 30 Tháng 08 năm 2026",
    },
    address: "Nhà hàng Năm Nhỏ sảnh Center",
    street: "D7 số 35-41 Tôn Đức Thắng, phường Rạch Giá - tỉnh An Giang",
    phone: "0913572558",
    posision: "bottom left",
  },
];

// December
const daysInMonth = [
  {
    title: "mon",
    days: [0, 3, 10, 17, 24, 31],
  },
  {
    title: "tue",
    days: [0, 4, 11, 18, 25, 0],
  },
  {
    title: "wed",
    days: [0, 5, 12, 19, 26, 0],
  },
  {
    title: "thu",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "fri",
    days: [0, 7, 14, 21, 28, 0],
  },
  {
    title: "sat",
    days: [1, 8, 15, 22, 28, 0],
  },
  {
    title: "sun",
    days: [2, 9, 16, 23, 30, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage:
    "/images/anh-cuoi1.jpg",
  brideFirstLetter: "U",
  groomFirstLetter: "H",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "bride",
      name: "Lê Phương Uyên",
      avatar: `${cdnLink}/bride6.jpg`,
      images: [`${cdnLink}/bride4.jpg`, `${cdnLink}/bride7.jpg`],
    },
    {
      title: "groom",
      name: "Trương Cát Hiệp",
      avatar: `${cdnLink}/groom2.jpg`,
      images: [`${cdnLink}/groom3.jpg`, `${cdnLink}/groom1.jpg`],
    },
  ],
};

// invitation section

const invitationSection = {
  imgs: [`${cdnLink}/e7.jpg`, `${cdnLink}/e4.jpg`, `${cdnLink}/e6.jpg`],
  activeDay: 30,
};

// album section

const albumSection = {
  images: [
    `${cdnLink}/e1.jpg`,
    `${cdnLink}/e3.jpg`,
    `${cdnLink}/e4.jpg`,
    `${cdnLink}/e5.jpg`,
    `${cdnLink}/e7.jpg`,
    `${cdnLink}/e8.jpg`,
  ],
};

// guestbook section

const guestbookSection = {
  image: `${cdnLink}/e5.jpg`,
  time: "12/12/2026",
};

// gift section

const giftSection = {
  image:
    "/images/anh-cuoi2.jpg",
  brideBank: {
    name: "Trần Thị Thuý",
    bankName: "Vietinbank ",
    qr: images.qr2.default.src,
    bankNumber: "107880386791",
  },
  groomBank: {
    name: "Lang Mạnh Hùng",
    bankName: "MB BANK",
    qr: images.qr.default.src,
    bankNumber: "9999999996654",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 30,
    month: 8,
  },
};

// final section

const finalSection = {
  images: [
    `${cdnLink}/final1.jpg`,
    `${cdnLink}/final2.jpg`,
    `${cdnLink}/final3.jpg`,
    `${cdnLink}/final4.jpg`,
  ],
};

// Album Page

const albumPage = {
  topImage: `${cdnLink}/aland3.jpg`,
  bottomImage: `${cdnLink}/aland2.jpg`,
  mainImage: `${cdnLink}/e1.jpg`,
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: `${cdnLink}/e1.jpg`,
      },

      {
        id: 2,
        img: `${cdnLink}/e4.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: `${cdnLink}/e3.jpg`,
      },
      {
        id: 4,
        img: `${cdnLink}/e5.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: `${cdnLink}/e6.jpg`,
      },
      {
        id: 6,
        img: `${cdnLink}/e7.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: `${cdnLink}/e8.jpg`,
      },
      {
        id: 8,
        img: `${cdnLink}/groom3.jpg`,
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: `${cdnLink}/e9.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: `${cdnLink}/e13.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: `${cdnLink}/e10.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: `${cdnLink}/e11.jpg`,
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: `${cdnLink}/e15.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: `${cdnLink}/e14.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: `${cdnLink}/e16.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: `${cdnLink}/e17.jpg`,
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Báo Hỉ Hiệp - Uyên | Kính Mời",
    graphImage:
      "/images/anh-cuoi2.jpg",
  },

  wish: {
    title: "Tất cả lời chúc dành cho Hiệp - Uyên",
    graphImage:
      "/images/anh-cuoi3.jpg",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage:
      "/images/anh-cuoi4.jpg",
  },
  album: {
    title: "Album của Hiệp - Uyên`",
    graphImage:
      "/images/anh-cuoi5.jpg",
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
