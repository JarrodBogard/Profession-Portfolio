import firetruck from "../assets/firetruck.jpeg";
import footballApp from "../assets/footballApp.png";
import gameLibrary from "../assets/gameLibraryUpdated.png";
import newsApp from "../assets/news.png";

export const projectsData = [
  {
    id: 1,
    name: "Easy News",
    description:
      "Easy News App is an application that allows users to seamlessly search for news articles based on a search term or predefined catergory. Users can easily favorite articles and view them at a later time from their 'Saved' page.",
    img: newsApp,
    createdAt: "",
    demoLink: "https://www.loom.com/share/dcc56b4470c64832b20d416c3ce814e2",
    repoLink: "https://github.com/JarrodBogard/news_app",
    hasWebsite: true,
  },
  {
    id: 2,
    name: "Games Library",
    description:
      "The Games Library app keeps your video game collection organized. Sign up or log in and view your existing library.  Easily add new games by entering title, price, and release date.  Add images and remove unwanted games with a simple tap. Keep track of your collection effortlessly.",
    img: gameLibrary,
    createdAt: "",
    demoLink: "https://www.loom.com/share/5d3f0ee0f5f64ae38cc0ff656a2cd8d8",
    repoLink: "https://github.com/JarrodBogard/game-library-frontend",
    hasWebsite: false,
  },
  {
    id: 3,
    name: "My Football App",
    description:
      "Stay on top of your favorite NFL players with My Football App. Create an account and easily search and add players to your list. Track their performance with up-to-date stats and view detailed breakdowns with a single click. Manage your list by removing players you no longer follow.",
    img: footballApp,
    createdAt: "",
    demoLink: "https://www.loom.com/share/45a4446ea2b344b78b28378dc5accde1",
    repoLink: "https://github.com/JarrodBogard/football-app-ui-rebuild",
    hasWebsite: false,
  },
];
