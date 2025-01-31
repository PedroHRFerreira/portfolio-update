import styles from "./styles.module.scss";

const MoleculeTechnologies = ({ openModal = () => {} }) => {
  const image = [
    {
      url: "/github.svg",
      link: "https://github.com/PedroHRFerreira",
    },
    {
      url: "/linkedin.svg",
      link: "https://www.linkedin.com/in/pedro-henrique-2ab9b6302/",
    },
    {
      url: "/insta.svg",
      link: "https://www.instagram.com/pedrohr_dev/",
    },
  ];

  return (
    <section className={styles.section}>
      <h1>Informações de contato:</h1>
      <div className={styles.image}>
        {image.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img
              src={item.url}
              width={32}
              alt="Ícone"
              className={styles.icon}
            />
          </a>
        ))}
        <div className={styles.button}>
          <button className={styles.button__link} onClick={openModal}>
            Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoleculeTechnologies;
