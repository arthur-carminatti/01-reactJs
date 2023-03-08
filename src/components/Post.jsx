import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/arthur-carminatti.png" />
                    <div className={styles.authorInfo}>
                        <strong>Arthur Carminatti</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='07 de Março às 15:48h' dateTime='2023-03-07 15:48:30'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>
                <p>This is my first ReactJS project 🚀</p>
                <p>👉{' '}<a href="https://github.com/arthur-carminatti">https://github.com/arthur-carminatti </a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#reactjs</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>

                <strong>Deixe se feedback</strong>

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