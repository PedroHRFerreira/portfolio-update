import styles from "./styles.module.scss";
import "@/assets/globals.scss";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${styles.layout}`}>
      <main className={`${styles.main}`}>{children}</main>
    </div>
  );
}
