const fakes = [
  {
    id: 1,
    title: "Homeblend Mobile",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16706089/media/8a1397ca1d8123a2d9e73bbaf9418f36.png?compress=1&resize=1600x1200",
    time: "10/08/2021, 12:50:59 AM",
  },
  {
    id: 2,
    title: "Jack Bauer",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16142345/media/18afe6187a04d2fe6808e02ac232fdd5.png?compress=1&resize=1600x1200",
    time: "10/01/2021, 12:50:59 AM",
  },
  {
    id: 3,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "10/07/2021, 12:50:59 AM",
  },
  {
    id: 4,
    title: "Raj Karan Singh",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16623242/media/55385d63e05bd01939a4eb6ab9a2f84e.png?compress=1&resize=1600x1200",
    time: "09/08/2021, 12:50:59 AM",
  },
  {
    id: 5,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/488314/screenshots/16705121/media/9e1f117a20491847a48852b7442267d7.png?compress=1&resize=1600x1200",
    time: "09/05/2021, 12:50:59 AM",
  },
  {
    id: 6,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/875611/screenshots/16681893/media/2b51437de9e789a845c560653041e108.jpg?compress=1&resize=1600x1200",
    time: "09/25/2021, 12:50:59 AM",
  },
  {
    id: 7,
    title: "Norris",
    url: "https://cdn.dribbble.com/users/110792/screenshots/16686459/media/72902dd63b5caac6370431eb1ab4998e.png?compress=1&resize=1600x1200",
    time: "09/22/2021, 12:50:59 AM",
  },
  {
    id: 8,
    title: "Chucrris",
    url: "https://cdn.dribbble.com/users/110792/screenshots/14767581/media/e37353267ca3eefd8818a231ed4a0177.png?compress=1&resize=1600x1200",
    time: "10/22/2021, 12:50:59 AM",
  },
  {
    id: 9,
    title: "ChNorris",
    url: "https://cdn.dribbble.com/users/110792/screenshots/15242972/media/f74d2607355cb035ee1303cfa376a850.png?compress=1&resize=1600x1200",
    time: "10/22/2021, 1:50:59 AM",
  },
  {
    id: 10,
    title: "Chuckris",
    url: "https://cdn.dribbble.com/users/110792/screenshots/15605042/media/6c37a75b09d806516dfd089269ac9d03.png?compress=1&resize=1600x1200",
    time: "10/22/2021, 4:50:59 AM",
  },
  {
    id: 11,
    title: "Chucs",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "10/21/2021, 12:50:59 AM",
  },
  {
    id: 12,
    title: "ChNorris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/15882929/media/590367995fb92c846ac1c9ad97b73fc6.png?compress=1&resize=1600x1200",
    time: "10/20/2021, 12:50:59 AM",
  },
  {
    id: 13,
    title: "uck Norris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "10/19/2021, 12:50:59 AM",
  },
  {
    id: 14,
    title: "ChckNris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/15882929/media/590367995fb92c846ac1c9ad97b73fc6.png?compress=1&resize=1600x1200",
    time: "10/18/2021, 12:50:59 AM",
  },
  {
    id: 15,
    title: "Chck Nrrs",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "10/22/2021, 2:50:59 AM",
  },
  {
    id: 16,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "10/2/2021, 12:50:59 AM",
  },
  {
    id: 17,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "10/22/2020, 12:50:59 AM",
  },
  {
    id: 18,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/6047818/screenshots/15865996/media/e065e300c0eda7469e91fe53e1420b3b.png?compress=1&resize=1600x1200",
    time: "10/22/2020, 12:50:59 AM",
  },
  {
    id: 19,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/110792/screenshots/15187350/media/a13cc9cab992af32e8fec0ec58103f63.png?compress=1&resize=1600x1200",
    time: "10/04/2021, 12:50:59 AM",
  },
  {
    id: 20,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "10/12/2021, 12:50:59 AM",
  },
  {
    id: 21,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "08/22/2021, 12:50:59 AM",
  },
  {
    id: 22,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/6047818/screenshots/16706970/media/be19b6d9bab6f59f96334ebe1b67d16f.png?compress=1&resize=1600x1200",
    time: "07/22/2021, 12:50:59 AM",
  },
  {
    id: 23,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/26642/screenshots/16420932/media/2525f753c0bdfbf0ccbc83c34383ab4a.png?compress=1&resize=1600x1200",
    time: "05/22/2021, 12:50:59 AM",
  },
  {
    id: 24,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/6047818/screenshots/15865996/media/e065e300c0eda7469e91fe53e1420b3b.png?compress=1&resize=1600x1200",
    time: "06/22/2021, 12:50:59 AM",
  },
  {
    id: 25,
    title: "Chuck Norris",
    url: "https://cdn.dribbble.com/users/6047818/screenshots/16706970/media/be19b6d9bab6f59f96334ebe1b67d16f.png?compress=1&resize=1600x1200",
    time: "10/22/2021, 03:50:59 AM",
  },
];

export default fakes;