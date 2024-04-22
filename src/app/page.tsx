import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import InputSelect from "@/components/input/InputSelect/InputSelect";
import InputText from "@/components/input/InputText/InputText";
import InputDate from "@/components/input/InputDate/InputDate";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.divButton}>
        <Button icon="loading" label="Recarregar" variant="filled-primary"/>
        <Button icon="loading" label="Clica aquaaaaaaaaai" variant="outline-primary"/>
        <Button label="Outline" variant="empty-primary"/>
      </div>
      <div className={styles.divInput}>
        <InputText label="Cultura"/>
        <InputDate label="Início"/>
      </div>
      <div className={styles.divSelect}>
        <InputSelect />
      </div>
    </main>
  );
}