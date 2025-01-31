import styles from "./styles.module.scss";
const MoleculeTextImage = () => {
  return (
    <section className={styles.section}>
      <img
        className={styles.image}
        src="/Download PH logo monogram with slash style design template for free.jpeg"
        width={200}
      />
      <div className={styles.text}>
        <h1>Pedro H.Rodrigues</h1>
        <h3>Front-End Developer</h3>
        <p>
          Apaixonado por construir aplicações web escaláveis e eficientes.
          Experiente em desenvolvimento full-stack com foco nos ecossistemas Vue
          e React.
        </p>
      </div>
    </section>
  );
};
export default MoleculeTextImage;
