import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1678063477373-21b03883bc0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <strong>Arthur Carminatti</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu Perfil</a>
            </footer>

        </aside>
    )
}