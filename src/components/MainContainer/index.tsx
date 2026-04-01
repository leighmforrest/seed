import type { MainContainerProps } from "@/types";

import styles from "./styles.module.css";

const MainContainer = ({children}: MainContainerProps) => (
    <main className={styles.main} data-testid="main-container">
        {children}
    </main>
)

export default MainContainer;