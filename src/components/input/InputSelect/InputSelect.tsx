import styles from './InputSelect.module.css';

interface ArrayItens {
  nomes: string[];
}

const items: ArrayItens = {
  nomes: [
    "Total",
    "Finalizados",
    "Vigente"
  ]
}

const InputSelect = () => {
  return (
    <div className={styles.divSelect}>
      <select className={styles.select}>
        {items.nomes.map((nome) => (
          <option key={nome}>{nome}</option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect;