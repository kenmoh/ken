export const projects = [
  {
    projectName: "QuickPickup",
    img: "/src/assets/app.png",
    frameworks: [
      "FastAPI",
      "JWT",
      "Postgresql",
      "SQLAlchemy",
      "React Native",
      "Docker",
    ],
    url: "https://mohdelivery.onrender.com/docs",
    description:
      "A Multi vendor dispatch application with wallet system. This app allow users(Sender) to list item for and have dispatch rider pick it up for delivery. A wallet is created for each registered user. Upon delivery confirmation by the sender, the wallet is credited.",
  },
  {
    projectName: "ReserveIt",
    img: "/src/assets/reservation.jpg",
    frameworks: ["FastAPI", "JWT", "Postgresql", "SQLAlchemy"],
    url: "https://github.com/kenmoh/restaurant_reservation_api/tree/main/backend",
    description:
      "This REST API allow users to register and make reservations in a restaurant. The restaurant owner(s) is/are able to set the restaurant capacity. When the restaurant is occupied, user get a prompt telling them the restaurant is fully booked. Roles are assigned to restaurant staff to confirm and cancel reservations.",
  },
  {
    projectName: "OrderIt",
    img: "/src/assets/pizza.jpg",
    frameworks: ["FastAPI", "JWT", "Postgresql", "SQLAlchemy"],
    url: "https://github.com/kenmoh/pizza_app",
    description:
      "This API allow user to register and order for Pizza. Pizza are grouped in SMALL, MEDIUM and LARGE sizes.The restaurant owner can also set other sizes dynamically. Users can cancel order within a time frame that is set by the Pizza restaurant so as to avoid cacelling an already prepared order.",
  },
  {
    projectName: "Jobify",
    img: "/src/assets/vacancy.jpg",
    frameworks: ["Django", "Postgresql", "Bootstrap"],
    url: "https://github.com/kenmoh/jobex",
    description:
      "Full stack job listing web app for posting vacancies. It has Employers and Employees as types of users. Employee users can add work experience, education and other details. Employer users can add profile and list vacancies.",
  },
];

export const techs = [
  {
    name: "Python",
    icon: "/public/assets/python.png",
  },
  {
    name: "JavaScript",
    icon: "/public/assets/JS.png",
  },
  {
    name: "React Native",
    icon: "/public/assets/ReactNative.png",
  },
  {
    name: "Docker",
    icon: "/public/assets/Docker.png",
  },
];
export const socials = [
  {
    name: "Email",
    icon: "/src/assets/gmail.png",
    url: "mailto: kenneth.aremoh@gmail.com",
  },
  {
    name: "Github",
    icon: "/src/assets/github.png",
    url: "https://github.com/kenmoh",
  },
  {
    name: "twitter",
    icon: "/src/assets/twitter.png",
    url: "https://twitter.com/kennmoh",
  },
  {
    name: "LinkedIn",
    icon: "/src/assets/linkedin.png",
    url: "https://www.linkedin.com/in/kenneth-aremoh/",
  },
];
