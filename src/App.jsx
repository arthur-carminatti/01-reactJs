import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';



export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar/>

        <main>
          <Post
            author="Arthur Carminatti"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, autem sit."
          />
          <Post
            author="Vanusa Lima"
            content="Lorem ipsum dolor sit amet com."
          />
        </main>
      </div>
    </div>
  )
}
