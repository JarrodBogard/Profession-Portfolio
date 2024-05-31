import firetruck from "../assets/firetruck.jpeg";
import house from "../assets/house.jpeg";
import inspection from "../assets/inspection.jpg";

export const experienceData = [
  {
    id: 1,
    company: "Polk County Fire Rescue",
    fullTime: true,
    timeFrame: "March 2013 - February 2020",
    position: "Firefighter / Paramedic",
    img: firetruck,
    bgColor: "red",
    className: "rotate-90-br-ccw",
  },
  {
    id: 2,
    company: "Tru-Seal Roofing",
    fullTime: true,
    timeFrame: "March 2020 - December 2022",
    position: "Project Manager / Sales Representative",
    img: house,
    bgColor: "orange",
    className: "slide-top",
  },
  {
    id: 3,
    company: "ProCo Roofing",
    fullTime: true,
    timeFrame: "December 2022 - January 2024",
    position: "Project Manager / Sales Representative",
    img: inspection,
    bgColor: "blue",
    className: "rotate-90-bottom-cw",
  },
];
