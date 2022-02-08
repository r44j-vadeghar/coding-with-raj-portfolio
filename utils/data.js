export const projects = [
  {
    id: "0",
    projectName: "Kakatiya University",
    descriptionList: [
      {
        desc: "This is ongoing project. Where our college students and teachers get a chance to interact online",
      },
      {
        desc: "Main purpose is to provide online classes in a more efficient way for both students and teachers",
      },
      {
        desc: "Includes CRUD operations",
      },
      {
        desc: "Authentication is with roll number and password",
      },
      {
        desc: "Database used is mongodb",
      },
    ],
    technologiesUsed: [
      { techImgSrc: "/img/react-logo.png" },
      { techImgSrc: "/img/next-logo.png" },
      { techImgSrc: "/img/mongo-logo.png" },
      { techImgSrc: "/img/tailwind-logo.svg" },
      { techImgSrc: "/img/typescript-logo.png" },
    ],
    demoLink: "https://kakatiyauniversity.vercel.app/",
    bgImg: "bg-ku-app",
    projectPagesDetails: [
      {
        id: "0",
        pageName: "Home Page",
        descriptionList: [
          {
            desc: "This is Home page",
          },
          {
            desc: "With header, and two components student and faculty which has buttons that maps to different links like signIn. register and facultyRegister",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/homepage.png",
      },
      {
        id: "1",
        pageName: "Sign In",
        descriptionList: [
          {
            desc: "Users can sign in from here using unique ID",
          },
          {
            desc: "faculty and students both are directed to login from here",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/signin.png",
      },
      {
        id: "2",
        pageName: "Register",
        descriptionList: [
          {
            desc: "Only Students can register using this form",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/register.png",
      },
      {
        id: "3",
        pageName: "faculty Register",
        descriptionList: [
          {
            desc: "This page is password protected.",
          },
          {
            desc: "Only faculty would know this password. So that they can enter and create faculty",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/facultyregister.png",
      },
      {
        id: "4",
        pageName: "Student profile",
        descriptionList: [
          {
            desc: "Student's details are displayed",
          },
          {
            desc: "Students can edit their details using that pencil icon at top right corner",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/user/studentprofile.png",
      },
      {
        id: "5",
        pageName: "Student profile edit options",
        descriptionList: [
          {
            desc: "Students can't change some data of their account. But if they want to change them, they should reach out to faculty. Faculty account has access to change any user's details",
          },
          {
            desc: "But students can add some additional information from this form",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/user/studentedit.png",
      },
      {
        id: "6",
        pageName: "faculty profile",
        descriptionList: [
          {
            desc: "Faculty's profile is similar to student's profile but has extra option to delete accounts.",
          },
          {
            desc: "Also faculty can visit to students account and do the same i.e delete student's account or edit their details.",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/user/facultyprofile.png",
      },
      {
        id: "7",
        pageName: "faculty Profile edit options",
        descriptionList: [
          {
            desc: "This is so much similar to user's component.",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/user/facultyedit.png",
      },
      {
        id: "8",
        pageName: "Student Dashboard",
        descriptionList: [
          {
            desc: "This is where students get's links of videos posted by faculty.",
          },
          {
            desc: "Student's can filter data as per the form provided and can map to video links to watch video",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/classlink/studentdashboard.png",
      },
      {
        id: "9",
        pageName: "Student Dashboard Class Link",
        descriptionList: [
          {
            desc: "Students can watch video here",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/classlink/studentdbvideo.png",
      },
      {
        id: "10",
        pageName: "faculty dashboard",
        descriptionList: [
          {
            desc: "Faculty also has same experience provided to students",
          },
          {
            desc: "Faculty has extra button to post a class",
          },
        ],
        img: "/projects/ku/classlink/facultydashboard.png",
      },
      {
        id: "11",
        pageName: "Form to add class for faculty",
        descriptionList: [
          {
            desc: "Faculty gets directed to this page when they click the add button provided on their dashboard",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/ku/classlink/addclass.png",
      },
      {
        id: "12",
        pageName: "faculty Dashboard Class Link",
        descriptionList: [
          {
            desc: "This is similar to student's class link",
          },
          {
            desc: "But faculty has extra option to delete video / class",
          },
          {
            desc: "And faculty can delete video / class only if it's posted by them",
          },
          {
            desc: "Faculty can also view how much percentage watched by student if the video is posted by them",
          },
        ],
        img: "/projects/ku/classlink/facultydbvideo.png",
      },
    ],
  },

  {
    id: "1",
    projectName: "Google Clone",
    descriptionList: [
      {
        desc: "This is Google Clone, Where we can get google search results.",
      },
      {
        desc: "This is build using Google Custom Search api.",
      },
      {
        desc: "Also, users can get to know news when they search for anything, this is done using newsapi",
      },
      {
        desc: "Mobile responsive design.",
      },
    ],
    technologiesUsed: [
      { techImgSrc: "/img/google-logo.png" },
      { techImgSrc: "/img/react-logo.png" },
      { techImgSrc: "/img/next-logo.png" },
      { techImgSrc: "/img/firebase-logo.png" },
      { techImgSrc: "/img/tailwind-logo.svg" },
    ],
    demoLink: "https://coding-with-raj-google.vercel.app/",
    bgImg: "bg-google-app",
    projectPagesDetails: [
      {
        id: "0",
        pageName: "Home page",
        descriptionList: [
          {
            desc: "This is Home page",
          },
          {
            desc: "With header, searchbar and footer",
          },
          {
            desc: "Also, can modify theme",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/google/google-1.png",
      },
      {
        id: "1",
        pageName: "Home page With Dark Theme",
        descriptionList: [
          {
            desc: "Notice header and footer changed their theme",
          },
          {
            desc: "We can toggle theme this way",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/google/google-2.png",
      },
      {
        id: "2",
        pageName: "Search Results",
        descriptionList: [
          {
            desc: "URL pattern is changed",
          },
          {
            desc: "The q in url quotes query. This query is being searched with google's custom search API",
          },
          {
            desc: "Also, we have random news generated from news api",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/google/google-3.png",
      },
      {
        id: "3",
        pageName: "Search results with theme change",
        descriptionList: [
          {
            desc: "Notice, we can change theme of news cards",
          },
          {
            desc: "We can toggle. But by default it is in light mode",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/google/google-4.png",
      },
    ],
  },

  {
    id: "3",
    projectName: "Todo App",
    descriptionList: [
      {
        desc: "This is Todo App, for productivity.",
      },
      {
        desc: "Included total CRUD functionality and google authentication.",
      },
      {
        desc: "Inspired from frontendmentor.io",
      },
      {
        desc: "Mobile responsive design.",
      },
    ],
    technologiesUsed: [
      { techImgSrc: "/img/react-logo.png" },
      { techImgSrc: "/img/next-logo.png" },
      { techImgSrc: "/img/firebase-logo.png" },
      { techImgSrc: "/img/tailwind-logo.svg" },
    ],
    demoLink:
      "https://codingwithraj-todo-app-nzm33nrtb-rajvadeghar.vercel.app/",
    bgImg: "bg-todo-app",
    projectPagesDetails: [
      {
        id: "0",
        pageName: "Home page",
        descriptionList: [
          {
            desc: "This is Home page",
          },
          {
            desc: "With just a button",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/todo/homepage.png",
      },
      {
        id: "1",
        pageName: "Sign In page",
        descriptionList: [
          {
            desc: "You can sign in from here",
          },
          {
            desc: "It get's redirected to google sign in after clicking the button",
          },
        ],
        img: "/projects/todo/signin.png",
      },
      {
        id: "2",
        pageName: "dashboard light theme",
        descriptionList: [
          {
            desc: "You can post todo, delte them or mark them as read",
          },
          {
            desc: "This page displays all todos that are posted",
          },
        ],
        img: "/projects/todo/dashboardLT.png",
      },
      {
        id: "3",
        pageName: "dashboard dark theme",
        descriptionList: [
          {
            desc: "Theme change",
          },
        ],
        img: "/projects/todo/dashboardDT.png",
      },
      {
        id: "4",
        pageName: "Active Todos",
        descriptionList: [
          {
            desc: "This tab displays only active todos",
          },
        ],
        img: "/projects/todo/activetodos.png",
      },
      {
        id: "5",
        pageName: "completed Todos",
        descriptionList: [
          {
            desc: "This tab displays only completed todos",
          },
        ],
        img: "/projects/todo/completedtodos.png",
      },
    ],
  },

  {
    id: "4",
    projectName: "Instagram Redesign",
    descriptionList: [
      {
        desc: "This is Instagram Redesign, Where we can get complete user experience like instagram",
      },
      {
        desc: "CRUD operations are integrated",
      },
      {
        desc: "Also, users can post images, comment etc",
      },
      {
        desc: "Authentication feature is enabled (Register and login functionalities), Google Login and Facebook Login.",
      },
      {
        desc: "Mobile responsive design.",
      },
    ],
    technologiesUsed: [
      { techImgSrc: "/img/react-logo.png" },
      { techImgSrc: "/img/firebase-logo.png" },
      { techImgSrc: "/img/materialui-logo.png" },
      { techImgSrc: "/img/insta-logo.png" },
    ],
    demoLink: "https://instagram-redesign-4778b.web.app/",
    bgImg: "bg-instagram-app",
    projectPagesDetails: [
      {
        id: "0",
        pageName: "Home page",
        descriptionList: [
          {
            desc: "User can login from here.",
          },
          {
            desc: "Integrated authentications is provided. Such as google, facebook, twitter login.",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/instagram/homepage.png",
      },
      {
        id: "1",
        pageName: "Popup",
        descriptionList: [
          {
            desc: "Example of google popup",
          },
        ],
        img: "/projects/instagram/loginwithgoogle.png",
      },
      {
        id: "2",
        pageName: "Dashboard",
        descriptionList: [
          {
            desc: "Dashboard after login. Sidebar options have changed.",
          },
        ],
        img: "/projects/instagram/loggedin.png",
      },
      {
        id: "3",
        pageName: "Post upload",
        descriptionList: [
          {
            desc: "User can click add photo button on navbar to post something",
          },
          {
            desc: "This displays a modal. Using that form inside modal. User can post his picture and thoughts.",
          },
        ],
        img: "/projects/instagram/fileupload.png",
      },
      {
        id: "4",
        pageName: "Post Details",
        descriptionList: [
          {
            desc: "User can click comments option of post on daskboard to get more details of a particular post as above picture",
          },
          {
            desc: "This displays post with additional information like comments, description etc",
          },
        ],
        img: "/projects/instagram/postdetails.png",
      },
      {
        id: "5",
        pageName: "Settings",
        descriptionList: [
          {
            desc: "User can update their profile or delete",
          },
        ],
        img: "/projects/instagram/usersettings.png",
      },
      {
        id: "6",
        pageName: "Edit Profile",
        descriptionList: [
          {
            desc: "User can update their profile from here",
          },
        ],
        img: "/projects/instagram/editprofile.png",
      },
    ],
  },

  {
    id: "5",
    projectName: "Covid Tracker",
    descriptionList: [
      {
        desc: "This is Covid Tracker, Where we can track covid cases",
      },
      {
        desc: "This is build using api from disease.sh",
      },
      {
        desc: "Also, users can get track visualizing maps/graphs",
      },
      {
        desc: "Mobile responsive design.",
      },
    ],
    technologiesUsed: [
      { techImgSrc: "/img/react-logo.png" },
      { techImgSrc: "/img/firebase-logo.png" },
      { techImgSrc: "/img/materialui-logo.png" },
    ],
    demoLink: "https://codingwithraj-covid-tracker.web.app/",
    bgImg: "bg-covid-app",
    projectPagesDetails: [
      {
        id: "0",
        pageName: "Home page",
        descriptionList: [
          {
            desc: "It displays WorldWide CORONA cases",
          },
          {
            desc: "With map, table and a graph",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/covid/homepage.png",
      },
      {
        id: "1",
        pageName: "Recovered Cases",
        descriptionList: [
          {
            desc: "It displays recovered CORONA cases",
          },
        ],
        img: "/projects/covid/recovered.png",
      },
      {
        id: "2",
        pageName: "Deaths",
        descriptionList: [
          {
            desc: "It displays total deaths due to CORONA",
          },
        ],
        img: "/projects/covid/deaths.png",
      },
      {
        id: "3",
        pageName: "Other Countries",
        descriptionList: [
          {
            desc: "User can choose other countries in option button as well",
          },
          {
            desc: "This filters data as per the option choosen",
          },
        ],
        img: "/projects/covid/othercountries.png",
      },
    ],
  },

  {
    id: "6",
    projectName: "Netflix Clone",
    descriptionList: [
      {
        desc: "This is Netflix Clone, Where we can get latest movies with categories",
      },
      {
        desc: "This is build using api from TMDB",
      },
      {
        desc: "Also, users can watch trailers by clicking any movie item. Although some may not work.",
      },
      {
        desc: "Authentication feature is enabled (Register and login functionalities)",
      },
    ],
    technologiesUsed: [
      { techImgSrc: "/img/react-logo.png" },
      { techImgSrc: "/img/netflix-logo.png" },
    ],
    demoLink: "https://codingwithraj-netflix-clone.web.app/",
    bgImg: "bg-netflix-app",
    projectPagesDetails: [
      {
        id: "0",
        pageName: "Home page",
        descriptionList: [
          {
            desc: "As you can see. there's a form where you put email address and click get started. It get's redirected to sign in page.",
          },
          {
            desc: "Or you can just click sign in on navbar",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/netflix/homepage.png",
      },
      {
        id: "1",
        pageName: "Sign In page",
        descriptionList: [
          {
            desc: "You can sign in from here",
          },
          {
            desc: "It get's registered if you click register button",
          },
        ],
        img: "/projects/netflix/signin.png",
      },
      {
        id: "2",
        pageName: "dashboard",
        descriptionList: [
          {
            desc: "Divided list of items into seperate categories as per genre",
          },
          {
            desc: "You can click any of them. Some of them results in showing youtube trailer.",
          },
        ],
        img: "/projects/netflix/dashboard.png",
      },
      {
        id: "3",
        pageName: "Profile",
        descriptionList: [
          {
            desc: "User's profile",
          },
          {
            desc: "You can logout from here",
          },
        ],
        img: "/projects/netflix/profile.png",
      },
    ],
  },

  {
    id: "7",
    projectName: "One on One chat Application",
    descriptionList: [
      { desc: "As shown in title, this is one on one chat application." },
      {
        desc: "Users have to sign in and chat with friends placing their email address.",
      },
      {
        desc: "Users can delete chat, reply to particular messages and acn do lot of things.",
      },
      {
        desc: "Authentication is with google. So, no need to waste time creating accounts.",
      },
    ],
    technologiesUsed: [
      { techImgSrc: "/img/react-logo.png" },
      { techImgSrc: "/img/next-logo.png" },
      { techImgSrc: "/img/firebase-logo.png" },
      { techImgSrc: "/img/tailwind-logo.svg" },
    ],
    demoLink:
      "https://codingwithraj-chat-app-3f0fpr9r1-rajvadeghar.vercel.app/",
    bgImg: "bg-chat-app",
    projectPagesDetails: [
      {
        id: "0",
        pageName: "Home page",
        descriptionList: [
          {
            desc: "This is Home page",
          },
          {
            desc: "With just a button",
          },
          {
            desc: "Mobile responsive design.",
          },
        ],
        img: "/projects/chat/homepage.png",
      },
      {
        id: "1",
        pageName: "Sign In page",
        descriptionList: [
          {
            desc: "You can sign in from here",
          },
          {
            desc: "It get's redirected to google sign in after clicking the button",
          },
        ],
        img: "/projects/chat/signin.png",
      },
      {
        id: "2",
        pageName: "dashboard light theme",
        descriptionList: [
          {
            desc: "We can add friends to chat using create chat button on navbar and toggle theme.",
          },
          {
            desc: "By default it checks your default theme",
          },
        ],
        img: "/projects/chat/dashboardLT.png",
      },
      {
        id: "3",
        pageName: "dashboard dark theme",
        descriptionList: [
          {
            desc: "Theme change",
          },
          {
            desc: "You can click on your friends list on sidebar to chat with them",
          },
        ],
        img: "/projects/chat/dashboardDT.png",
      },
      {
        id: "4",
        pageName: "Chat",
        descriptionList: [
          {
            desc: "This is where you and your friend can chat",
          },
        ],
        img: "/projects/chat/chat.png",
      },
      {
        id: "5",
        pageName: "Message Options",
        descriptionList: [
          {
            desc: "You can delete your msg. The above options are bit more. Those are just for me",
          },
        ],
        img: "/projects/chat/msgoptions.png",
      },
    ],
  },
];

export const colleges = [
  {
    id: "0",
    name: "Kakatiya University college of Engineering and Technologies",
    course: "Bachelors of Technology in Computer Science",
    period: "July 2020 - Present",
    desc: "Currently pursuing, completion of course will be on 2023",
    reviews: {
      0: "No hostel provided for newly admitted students",
      1: "No placements provided",
    },
    img: "/img/ku-clg.png",
  },

  {
    id: "1",
    name: "Government Institute Of Electronics",
    course: "Diploma in Computer Science",
    period: "July 2016 - November 2019",
    desc: "Passed with distinction. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    reviews: {
      0: "Good college with ugly hostel",
    },
    img: "/img/gioe-clg.jpg",
  },
];

export const whatIDo = [
  {
    work: "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
  },

  {
    work: "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
  },

  {
    work: "Integration of third party services such as Firebase/ AWS / Digital Ocean",
  },
];
