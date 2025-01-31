import { useState } from "react";
import styles from "./styles.module.scss";
import RootLayout from "@/layouts/RootLayout";
import MoleculeTextImage from "@/components/molecules/TextImage/Index";
import MoleculeTechnologies from "@/components/molecules/Technologies/Index";
import MoleculeModalCopied from "@/components/molecules/ModalCopied/Index";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <RootLayout>
      <article className={styles.container}>
        <MoleculeTextImage />
        <hr className={styles.line} />
        <MoleculeTechnologies openModal={() => setIsModalOpen(true)} />
        <MoleculeModalCopied
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </article>
    </RootLayout>
  );
}
