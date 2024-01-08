import styles from "@/styles/components/boxInbox.module.css";

type BoxInboxType = {
  svg: React.ReactElement;
  title: string;
  date: string;
  top?: string;
  bottom: string;
  notification?: boolean;
  onClick?: () => void;
};

const BoxInbox = ({
  svg,
  title,
  date,
  top,
  bottom,
  notification,
  onClick,
}: BoxInboxType) => {
  return (
    <div onClick={onClick} className={styles.mainAllInbox}>
      <div className={styles.mainInbox}>
        <div className={styles.leftInbox}>{svg}</div>
        <div className={styles.rightInbox}>
          <div className={styles.rightInboxTitles}>
            <h1>{title}</h1>
            <p>{date}</p>
          </div>
          <b>{top}</b>
          <p>{bottom}</p>
        </div>
      </div>
      {notification && <div className={styles.dotNotif} />}
    </div>
  );
};

export default BoxInbox;
