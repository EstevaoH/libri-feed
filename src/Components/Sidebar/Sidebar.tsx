import { Avatar } from "../Avatar/Avatar";

import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/estevaoh.png" />
        <strong>Estevão Ferreira</strong>
        <span>Front end Developer</span>
      </div>
      <footer>
        <a href="http://">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
