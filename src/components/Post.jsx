import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/maykbrito.png" />
                    <div className={styles.authorInfo}>
                        <strong>Arthur Carminatti</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='07 de Março às 15:48h' dateTime='2023-03-07 15:48:30'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}