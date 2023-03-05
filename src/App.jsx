import { Header } from './components/Header';
import { Post } from './Post';

export function App() {
  return (
    <div>

      <Header />

      <Post
        author="Arthur Carminatti"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, autem sit."
      />
      <Post
        author="Vanusa Lima"
        content="Lorem ipsum dolor sit amet com."
      />
    </div>
  )
}
