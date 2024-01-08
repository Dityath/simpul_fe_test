import styles from "@/styles/components/chatBoxDivider.module.css";

type ChatBoxDividerType = {
  date: string;
};

const ChatBoxDivider = ({ date }: ChatBoxDividerType) => {
  return (
    <div className={styles.mainDivider}>
      <div className={styles.divider} />
      <p>{date}</p>
      <div className={styles.divider} />
    </div>
  );
};

export default ChatBoxDivider;
