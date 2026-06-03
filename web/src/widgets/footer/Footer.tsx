import styles from "./footer.module.scss";
export const Footer = () => {
  console.log("Footer rendered");
  return (
    <footer className={styles.footer}>
      <div>ASH</div>
      <div>CO23 </div>
    </footer>
  );
};
