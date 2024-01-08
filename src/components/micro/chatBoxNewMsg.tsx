import styles from "@/styles/components/chatBoxNewMsg.module.css";

const ChatBoxNewMsg = () => {
  return (
    <div className={styles.mainDivider}>
      <div className={styles.divider} />
      <p>New Message</p>
      <div className={styles.divider} />
    </div>
  );
};

export default ChatBoxNewMsg;
