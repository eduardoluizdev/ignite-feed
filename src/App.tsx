import { Header } from "./components/Header";
import { Sidebar } from "./components/Sìdebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Eduardo Luiz",
      avatarUrl: "https://github.com/eduardoluizdev.png",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉jane.design/doctorcare", href: "#" },
    ],
    publishedAt: new Date("2022-06-27 16:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Maria Alice",
      avatarUrl: "https://github.com/eduardoluizdev.png",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉jane.design/doctorcare", href: "#" },
    ],
    publishedAt: new Date("2022-05-28 20:13:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
