//1) How will you access Sophia’s secondary school location?
// let data = {
//     Sophia: {
//             id: 33,
//             study: [
//                      {
//                         primary:
//                    [
//     { school_name: "ABC primary school" },
//     { location: "Peters burg" }
//     ]
//     },
//     {
//     secondary:
//     [
//     { school_name: "ABC secondary school"
//     },
//     { location: "St Lorence" }
//     ]
//     },
//     ]
//     }
//     }

// console.log(data.Sophia.study[1]);

/* 3) How will you get the output
a) abc
b) xyz */

let activities = {
  activity1: [
    {
      name: "listen on spotify",

      song_list: {
        song_1: "abc",
        song_2: "bcd",
      },
      id: 1,
    },
    {
      name: "listen music through bot",
      song_list: {
        song_1: "wxy",
        song_2: "xyz",
      },
      id: 2,
    },
  ],
};

// console.log(activities.activity1[0].song_list.song_1,activities.activity1[1].song_list.song_2);

/* 4) How will you display
a) Petersburg
b) Herry */

let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

// console.log(students[2222].address.city,students[3333].name);

/* 5) How will you display
a) programming er coddogosti
b) VW
c) Bangladesh */

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};

// console.log(instructor.additionalData.books[1],instructor.additionalData.moreDetails.hometown.state,instructor.additionalData.moreDetails.countriesLivedIn[0]);

/* 6) How will you display
a) B
b) D */

const studentData = [
  {
    class: 10,
    details: [
      {
        studentId: "1",
        gradingDetails: [{ grade: "A" }],
      },
      {
        studentId: "2",
        gradingDetails: [{ grade: "B" }],
      },
    ],
  },
  {
    class: 11,
    details: [
      {
        studentId: 3,
        gradingDetails: [{ grade: "B" }],
      },
      {
        studentId: 4,
        gradingDetails: [{ grade: "D" }],
      },
    ],
  },
];

// console.log(studentData[1].details[0].gradingDetails[0].grade,studentData[1].details[1].gradingDetails[0].grade)

/* 7) How will you display
a) habluder adda
b) Beginner */

let data = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};


console.log(data.data[0].bookDetails.name,data.data[1].bookCategory);
