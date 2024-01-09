import { Menu, Transition } from "@headlessui/react";
import styles from "@/styles/components/chatBox.module.css";
import { Fragment } from "react";

type ChatBoxType = {
  chat: string;
  time: string;
  user: "you" | string;
  color: string;
  textColor: string;
};

const ChatBox = ({ chat, time, user, color, textColor }: ChatBoxType) => {
  return (
    <div
      className={`${user === "You" ? styles.userYou : styles.userOther} ${
        styles.chatBoxMain
      }`}>
      <p style={{ color: textColor }}>{user}</p>
      <div
        className={`${styles.chatBoxSecond} ${
          user !== "You" && styles.chatBoxSecondMirror
        }`}>
        <Menu>
          <Menu.Button className={styles.chatBoxButton}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M4.00008 6.66667C3.26675 6.66667 2.66675 7.26667 2.66675 8.00001C2.66675 8.73334 3.26675 9.33334 4.00008 9.33334C4.73341 9.33334 5.33341 8.73334 5.33341 8.00001C5.33341 7.26667 4.73341 6.66667 4.00008 6.66667ZM12.0001 6.66667C11.2667 6.66667 10.6667 7.26667 10.6667 8.00001C10.6667 8.73334 11.2667 9.33334 12.0001 9.33334C12.7334 9.33334 13.3334 8.73334 13.3334 8.00001C13.3334 7.26667 12.7334 6.66667 12.0001 6.66667ZM6.66675 8.00001C6.66675 7.26667 7.26675 6.66667 8.00008 6.66667C8.73341 6.66667 9.33341 7.26667 9.33341 8.00001C9.33341 8.73334 8.73341 9.33334 8.00008 9.33334C7.26675 9.33334 6.66675 8.73334 6.66675 8.00001Z'
                fill='#4F4F4F'
              />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className={styles.chatBoxMenu}>
              <div
                className={`${styles.chatBoxMenuDivider} ${styles.chatBoxMenuDiv}`}>
                <Menu.Item>
                  <p>Edit</p>
                </Menu.Item>
              </div>
              <div className={styles.chatBoxMenuDiv}>
                <Menu.Item>
                  <p>Delete</p>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div
          className={styles.chatBoxMainBox}
          style={{ backgroundColor: color }}>
          <p>{chat}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
