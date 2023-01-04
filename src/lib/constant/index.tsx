const oishiiHours = [
  "Mon to Thu: 11AM - 3PM | 5PM - 10PM",
  "Fri: 11AM - 3PM | 5PM - 11PM",
  "Sat: 11AM - 11PM",
  "Sun: 5PM - 10PM",
];

const LOCATIONS = [
  {
    name: "Oishii - Wycliff",
    locationName: "WYCLIFF",
    address: "2525 Wycliff Ave #100, Dallas, TX 75219",
    phone: "214-599-9448",
    locationLink: "wycliff",
    onlineLinks: {
      googleMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1138.7093784433666!2d-96.82035985108895!3d32.81054158975674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9eb138812a6d%3A0xe478feb9deee6ea2!2sOishii!5e0!3m2!1sen!2sus!4v1671821588505!5m2!1sen!2sus",
      opentable: "https://www.opentable.com/r/oishii-sushi-dallas",
      doordash:
        "https://order.online/store/oishii-dallas-23169527/?delivery=true&hideModal=true",
      facebook: "https://www.facebook.com/oishiisushidallas",
      instagram: "https://www.instagram.com/oishiidallas",
    },
    services: ["Dine-in", "Takeout", "Delivery"],
    businessHours: oishiiHours,
    promotions: [
      {
        type: "Promotion",
        desc: "Celebrate with $5 Mimosas during lunch from 11 AM-4 PM",
      },
      {
        type: "Happy Hours",
        desc: "All day Wednesday - 50% off bottles of wines, cold sake and carafes of hot sake",
      },
    ],
  },
  {
    name: "Oishii - SMU Blvd",
    locationName: "SMU BLVD",
    address: "5627 SMU Boulevard, Dallas, TX 75206",
    phone: "972-863-8863",
    locationLink: "smu",
    onlineLinks: {
      googleMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.114444352144!2d-96.77391778481629!3d32.842221380952374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f1b3e9f6365%3A0xf9e076e2a471c639!2sOishii%20-%20SMU%20Blvd!5e0!3m2!1sen!2sus!4v1672172392891!5m2!1sen!2sus",
      opentable: "https://www.opentable.com/r/oishii-smu-dallas",
      doordash:
        "https://order.online/store/-23169375/?delivery=true&hideModal=true",
      facebook: "https://www.facebook.com/oishiismublvd",
      instagram: "https://www.instagram.com/oishiismu",
    },
    services: ["Dine-in", "Takeout", "Delivery"],
    businessHours: oishiiHours,
    promotions: [
      {
        type: "Promotion",
        desc: "Celebrate with $5 Mimosas during lunch from 11 AM-4 PM",
      },
    ],
  },
  {
    name: "Oishii - Plano",
    locationName: "PARKWOOD BLVD - PLANO",
    address: "8448 Parkwood Blvd Ste 700, Plano, TX 75024",
    phone: "972-377-8448",
    locationLink: "plano",
    onlineLinks: {
      googleMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.675897625696!2d-96.81544418480993!3d33.09131028087823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3d10f144f99f%3A0x929304aaf9814ee0!2sOishii%20Sushi%20%26%20Pan-Asian%20Cuisine%20-%20Plano!5e0!3m2!1sen!2sus!4v1672172615086!5m2!1sen!2sus",
      opentable: "https://www.opentable.com/r/oishii-plano",
      doordash:
        "https://order.online/store/oishii-plano-17119/?delivery=true&hideModal=true",
      facebook: "https://www.facebook.com/oishiiplano",
      instagram: "https://www.instagram.com/oishiiplano",
    },
    services: ["Dine-in", "Takeout", "Delivery"],
    businessHours: oishiiHours,
    promotions: [
      {
        type: "Happy Hours",
        desc: "All day Wednesday - 50% off bottles of wines, cold sake and carafes of hot sake",
      },
    ],
  },
  {
    name: "LAVUI - Maple Ave",
    locationName: "LAVUI",
    address: "5321 Maple Ave, Dallas, TX 75235",
    phone: "469-776-8212",
    locationLink: "lavui",
    website: "https://lavuirestaurants.com",
    onlineLinks: {
      googleMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.0304905244434!2d-96.83499858481693!3d32.817957080959715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9fdf68d7553b%3A0x580331f1f08fec02!2sLaVui%20Restaurant!5e0!3m2!1sen!2sus!4v1672172666435!5m2!1sen!2sus",
      opentable: "",
      doordash:
        "https://order.online/store/lavui-vietnamese-restaurant-dallas-1442869/?hideModal=true&pickup=true",
      facebook: "https://www.facebook.com/LaVuiDallas",
      instagram: "https://www.instagram.com/lavuidallas",
    },
    services: ["Dine-in", "Takeout", "Delivery"],
    businessHours: [
      "Mon, Wed - Fri: 11AM - 3PM | 4:30PM - 11PM",
      "Tue: 11AM - 3PM | 4:30PM - 9PM",
      "Sat: 11AM- 11PM",
      "Sun: 3PM - 11PM",
    ],
  },
];

export { LOCATIONS };
