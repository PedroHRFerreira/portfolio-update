import styles from "./styles.module.scss";
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
