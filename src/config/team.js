import washingtonBeach from "../assets/images/scenery/coast-rocks-horizontal.jpg";
import emilyCarter from "../assets/images/team/emily-carter.jpg";
import lauraNguyen from "../assets/images/team/laura-nguyen.jpg";
import michaelHarrington from "../assets/images/team/michael-harrington.jpg";
import sofiaPatel from "../assets/images/team/sofia-patel.jpg";
import ethanRivera from "../assets/images/team/ethan-rivera.jpg";
import kimberlyMorgan from "../assets/images/team/kimberly-morgan.jpg";
import meganSullivan from "../assets/images/team/megan-sullivan.jpg";
import monicaAlvarez from "../assets/images/team/monica-alvarez.jpg";
import noahCampbell from "../assets/images/team/noah-campbell.jpg";
import jordanLee from "../assets/images/team/jordan-lee.jpg";

export const teamContent = {
  hero: {
    header: "Our Team",
    backgroundImg: washingtonBeach,
  },
  intro: {
    header: "The People Behind the Care",
    para: "At Pacific Therapy, our team is dedicated to to supporting you through every step of your wellness journey. Comprising licensed therapists and skilled support staff, we bring a wealth of knowledge and a shared passion for helping others. Together, we create a collaborative, client-centered environment to help you can achieve healing, growth, and balance.",
  },
};

export const team = [
  {
    id: 1,
    gridSize: "gridLarge",
    sectionTitle: "Practice Owners:",
    members: [
      {
        id: 1,
        name: "Emily Carter",
        credentials: "PhD",
        title: "Executive Director & Founding Therapist",
        image: {
          src: emilyCarter,
          alt: "Emily Carter",
        },
      },
      {
        id: 2,
        name: "Laura Nguyen",
        credentials: "PsyD",
        title: "Lead Therapist & Co-Founder",
        image: {
          src: lauraNguyen,
          alt: "Laura Nguyen",
        },
      },
      {
        id: 3,
        name: "Michael Harrington",
        credentials: "PhD",
        title: "Clinical Director & Licensed Therapist",
        image: {
          src: michaelHarrington,
          alt: "Michael Harrington",
        },
      },
    ],
  },
  {
    id: 2,
    gridSize: "gridLarge",
    sectionTitle: "Therapists:",
    members: [
      {
        id: 1,
        name: "Sofia Patel",
        credentials: "LCSW",
        title: "Licensed Therapist",
        image: {
          src: sofiaPatel,
          alt: "Sofia Patel",
        },
      },
      {
        id: 2,
        name: "Ethan Rivera",
        credentials: "LMHC",
        title: "Licensed Therapist",
        image: {
          src: ethanRivera,
          alt: "Ethan Rivera",
        },
      },
      {
        id: 3,
        name: "Kimberly Morgan",
        credentials: "LMHC",
        title: "Licensed Therapist",
        image: {
          src: kimberlyMorgan,
          alt: "Kimberly Morgan",
        },
      },
    ],
  },
  {
    id: 3,
    gridSize: "gridSmall",
    sectionTitle: "Support Staff:",
    members: [
      {
        id: 1,
        name: "Monica Alvarez",
        title: "Practice Manager",
        image: {
          src: monicaAlvarez,
          alt: "Monica Alvarez",
        },
      },
      {
        id: 2,
        name: "Megan Sullivan",
        title: "Client Care Coordinator",
        image: {
          src: meganSullivan,
          alt: "Megan Sullivan",
        },
      },
      {
        id: 3,
        name: "Noah Campbell",
        title: "Client Care Coordinator",
        image: {
          src: noahCampbell,
          alt: "Noah Campbell",
        },
      },
      {
        id: 4,
        name: "Jordan Lee",
        title: "Office Assistant",
        image: {
          src: jordanLee,
          alt: "Jordan Lee",
        },
      },
    ],
  },
];
