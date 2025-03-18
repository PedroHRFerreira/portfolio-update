import styles from "./styles.module.scss";

const MoleculeModalCopied = ({ isOpen = false, closeModal = () => {} }) => {
  const pedroHenrique = {
    code: ["TypeScript", "JavaScript", "PHP", "HTML", "CSS", "Sass"],
    askMeAbout: ["Web Dev", "Vue.js", "React", "Nuxt.js", "Next.js", "Laravel"],
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modalOverlay} onClick={closeModal}></div>
      <aside className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.badgeContainer}>
            {pedroHenrique.code.map((language, index) => (
              <span key={index} className={styles.badge}>
                {language}
              </span>
            ))}
          </div>

          <div className={styles.badgeContainer}>
            {pedroHenrique.askMeAbout.map((topic, index) => (
              <span key={index} className={styles.badge}>
                {topic}
              </span>
            ))}
          </div>

          <button onClick={closeModal} className={styles.closeButton}>
            Fechar
          </button>
        </div>
      </aside>
    </>
  );
};

export default MoleculeModalCopied;
