import styles from "./footer.module.scss";

export const Footer = () => {
  console.log("Footer rendered");
  console.log("Footer styles", styles);

  console.log("Footer className", styles.footer);

  return (
    <footer className={styles.footer}>
      <div>ASH</div>
      <div>CO23 </div>
    </footer>
  );
};
