import styles from "@/styles/components/tabsInbox.module.css";
import Box from "../micro/box";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BoxDivider from "../micro/boxDivider";
import BoxInbox from "../micro/boxInbox";
import ChatBox from "../micro/chatBox";
import ChatBoxDivider from "../micro/chatBoxDivider";
import ChatBoxNewMsg from "../micro/chatBoxNewMsg";

type TabsInboxType = {
  isOpen?: boolean;
  setIsOpen?: (value: "main" | "inbox" | "task") => void;
};

const TabsInbox = ({ isOpen, setIsOpen }: TabsInboxType) => {
  const [phase, setPhase] = useState<"load" | "inbox" | "chat">("load");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPhase("inbox");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box
      noPadding={phase === "chat"}
      className={`${phase === "chat" ? styles.boxChatPhase : null} ${
        styles.box
      }`}>
      {phase === "load" ? (
        <>
          <div className={styles.inputBox}>
            <input type='text' placeholder='Search' />
            <svg
              width='13'
              height='12'
              viewBox='0 0 13 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z'
                fill='#333333'
              />
            </svg>
          </div>
          <div className={styles.loading}>
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "anticipate" }}
              width='86'
              height='86'
              viewBox='0 0 86 86'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M17.8009 60.5045L67.6057 24.9025L67.6796 25.0058C67.6551 24.9713 67.6306 24.9369 67.606 24.9025C57.7747 11.1492 38.6557 7.96983 24.9024 17.8011C11.1492 27.6323 7.96978 46.7513 17.8009 60.5045Z'
                fill='#C4C4C4'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M67.6058 24.9025L17.8009 60.5047L17.7771 60.4715C17.785 60.4826 17.7929 60.4936 17.8008 60.5047C27.6321 74.2579 46.7511 77.4373 60.5044 67.6061C74.2577 57.7748 77.4371 38.6557 67.6058 24.9025Z'
                fill='#F8F8F8'
              />
              <path
                d='M26.3985 59.0807C26.3985 61.4391 24.4866 63.351 22.1282 63.351C19.7697 63.351 17.8578 61.4391 17.8578 59.0807C17.8578 56.7222 19.7697 54.8103 22.1282 54.8103C24.4866 54.8103 26.3985 56.7222 26.3985 59.0807Z'
                fill='#C4C4C4'
              />
              <path
                d='M68.3256 27.2472C68.3256 29.6056 66.4137 31.5175 64.0553 31.5175C61.6968 31.5175 59.7849 29.6056 59.7849 27.2472C59.7849 24.8887 61.6968 22.9768 64.0553 22.9768C66.4137 22.9768 68.3256 24.8887 68.3256 27.2472Z'
                fill='#C4C4C4'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M24.1859 55.9403C31.4963 66.1671 45.7131 68.5313 55.9399 61.2208C66.1666 53.9104 68.5308 39.6937 61.2204 29.4669C53.9099 19.2401 39.6932 16.8759 29.4664 24.1864C19.2396 31.4968 16.8755 45.7135 24.1859 55.9403Z'
                fill='white'
              />
            </motion.svg>
            <p>Loading Chats</p>
          </div>
        </>
      ) : phase === "inbox" ? (
        <>
          <div className={styles.inputBox}>
            <input type='text' placeholder='Search' />
            <svg
              width='13'
              height='12'
              viewBox='0 0 13 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z'
                fill='#333333'
              />
            </svg>
          </div>
          <BoxInbox
            onClick={() => setPhase("chat")}
            svg={
              <svg
                width='51'
                height='34'
                viewBox='0 0 51 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z'
                  fill='#E0E0E0'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M17 11C15.3425 11 14 12.3425 14 14C14 15.6575 15.3425 17 17 17C18.6575 17 20 15.6575 20 14C20 12.3425 18.6575 11 17 11ZM18.5 14C18.5 13.175 17.825 12.5 17 12.5C16.175 12.5 15.5 13.175 15.5 14C15.5 14.825 16.175 15.5 17 15.5C17.825 15.5 18.5 14.825 18.5 14ZM21.5 21.5C21.35 20.9675 19.025 20 17 20C14.9825 20 12.6725 20.96 12.5 21.5H21.5ZM11 21.5C11 19.505 14.9975 18.5 17 18.5C19.0025 18.5 23 19.505 23 21.5V23H11V21.5Z'
                  fill='black'
                  fill-opacity='0.54'
                />
                <path
                  d='M51 17C51 26.3888 43.3888 34 34 34C24.6112 34 17 26.3888 17 17C17 7.61116 24.6112 0 34 0C43.3888 0 51 7.61116 51 17Z'
                  fill='#2F80ED'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M34 11C32.3425 11 31 12.3425 31 14C31 15.6575 32.3425 17 34 17C35.6575 17 37 15.6575 37 14C37 12.3425 35.6575 11 34 11ZM35.5 14C35.5 13.175 34.825 12.5 34 12.5C33.175 12.5 32.5 13.175 32.5 14C32.5 14.825 33.175 15.5 34 15.5C34.825 15.5 35.5 14.825 35.5 14ZM38.5 21.5C38.35 20.9675 36.025 20 34 20C31.9825 20 29.6725 20.96 29.5 21.5H38.5ZM28 21.5C28 19.505 31.9975 18.5 34 18.5C36.0025 18.5 40 19.505 40 21.5V23H28V21.5Z'
                  fill='white'
                />
              </svg>
            }
            title='109220-Naturalization'
            date='January 1,2021 19:10'
            top='Cameron Phillips :'
            bottom='Please check this out!'
            notification
          />
          <BoxDivider />
          <BoxInbox
            onClick={() => setPhase("chat")}
            svg={
              <svg
                width='51'
                height='34'
                viewBox='0 0 51 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z'
                  fill='#E0E0E0'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M17 11C15.3425 11 14 12.3425 14 14C14 15.6575 15.3425 17 17 17C18.6575 17 20 15.6575 20 14C20 12.3425 18.6575 11 17 11ZM18.5 14C18.5 13.175 17.825 12.5 17 12.5C16.175 12.5 15.5 13.175 15.5 14C15.5 14.825 16.175 15.5 17 15.5C17.825 15.5 18.5 14.825 18.5 14ZM21.5 21.5C21.35 20.9675 19.025 20 17 20C14.9825 20 12.6725 20.96 12.5 21.5H21.5ZM11 21.5C11 19.505 14.9975 18.5 17 18.5C19.0025 18.5 23 19.505 23 21.5V23H11V21.5Z'
                  fill='black'
                  fill-opacity='0.54'
                />
                <path
                  d='M51 17C51 26.3888 43.3888 34 34 34C24.6112 34 17 26.3888 17 17C17 7.61116 24.6112 0 34 0C43.3888 0 51 7.61116 51 17Z'
                  fill='#2F80ED'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M34 11C32.3425 11 31 12.3425 31 14C31 15.6575 32.3425 17 34 17C35.6575 17 37 15.6575 37 14C37 12.3425 35.6575 11 34 11ZM35.5 14C35.5 13.175 34.825 12.5 34 12.5C33.175 12.5 32.5 13.175 32.5 14C32.5 14.825 33.175 15.5 34 15.5C34.825 15.5 35.5 14.825 35.5 14ZM38.5 21.5C38.35 20.9675 36.025 20 34 20C31.9825 20 29.6725 20.96 29.5 21.5H38.5ZM28 21.5C28 19.505 31.9975 18.5 34 18.5C36.0025 18.5 40 19.505 40 21.5V23H28V21.5Z'
                  fill='white'
                />
              </svg>
            }
            title='Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]'
            date='02/06/2021 10:45'
            top='Ellen :'
            bottom='Hey, please read.'
          />
          <BoxDivider />
          <BoxInbox
            onClick={() => setPhase("chat")}
            svg={
              <svg
                width='51'
                height='34'
                viewBox='0 0 51 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z'
                  fill='#E0E0E0'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M17 11C15.3425 11 14 12.3425 14 14C14 15.6575 15.3425 17 17 17C18.6575 17 20 15.6575 20 14C20 12.3425 18.6575 11 17 11ZM18.5 14C18.5 13.175 17.825 12.5 17 12.5C16.175 12.5 15.5 13.175 15.5 14C15.5 14.825 16.175 15.5 17 15.5C17.825 15.5 18.5 14.825 18.5 14ZM21.5 21.5C21.35 20.9675 19.025 20 17 20C14.9825 20 12.6725 20.96 12.5 21.5H21.5ZM11 21.5C11 19.505 14.9975 18.5 17 18.5C19.0025 18.5 23 19.505 23 21.5V23H11V21.5Z'
                  fill='black'
                  fill-opacity='0.54'
                />
                <path
                  d='M51 17C51 26.3888 43.3888 34 34 34C24.6112 34 17 26.3888 17 17C17 7.61116 24.6112 0 34 0C43.3888 0 51 7.61116 51 17Z'
                  fill='#2F80ED'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M34 11C32.3425 11 31 12.3425 31 14C31 15.6575 32.3425 17 34 17C35.6575 17 37 15.6575 37 14C37 12.3425 35.6575 11 34 11ZM35.5 14C35.5 13.175 34.825 12.5 34 12.5C33.175 12.5 32.5 13.175 32.5 14C32.5 14.825 33.175 15.5 34 15.5C34.825 15.5 35.5 14.825 35.5 14ZM38.5 21.5C38.35 20.9675 36.025 20 34 20C31.9825 20 29.6725 20.96 29.5 21.5H38.5ZM28 21.5C28 19.505 31.9975 18.5 34 18.5C36.0025 18.5 40 19.505 40 21.5V23H28V21.5Z'
                  fill='white'
                />
              </svg>
            }
            title='8405-Diana SALAZAR MUNGUIA'
            date='01/06/2021 12:19'
            top='Cameron Phillips :'
            bottom='I understand your initial concerns and thats very valid, Elizabeth. But you ...'
          />
          <BoxDivider />
          <BoxInbox
            onClick={() => setPhase("chat")}
            svg={
              <svg
                width='34'
                height='34'
                viewBox='0 0 34 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z'
                  fill='#2F80ED'
                />
                <path
                  d='M20.296 7V8.712H15.168V12.136H19.496V13.856H15.168V18.568H13V7H20.296Z'
                  fill='white'
                />
              </svg>
            }
            title='FastVisa Support'
            date='01/06/2021 12:19'
            bottom='Hey there! Welcome to your inbox.'
          />
        </>
      ) : (
        <>
          <div className={styles.chatHead}>
            <div className={styles.chatHeadLeft}>
              <button onClick={() => setPhase("inbox")}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z'
                    fill='#333333'
                  />
                </svg>
              </button>
              <div className={styles.chatHeadCenter}>
                <h1>
                  I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
                </h1>
                <p>3 Participants</p>
              </div>
            </div>

            <button onClick={() => setIsOpen && setIsOpen("main")}>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
                  fill='#333333'
                />
              </svg>
            </button>
          </div>
          <div className={styles.chatMain}>
            <ChatBox
              chat='Morning. I’ll try to do them. Thanks'
              time='19:32'
              user='Obaidullah Amarkhil'
              color='#D2F2EA'
              textColor='#43B78D'
            />
            <ChatBoxNewMsg />
            <ChatBox
              chat='Sure thing, Claren'
              time='19:32'
              user='Mary Hilda'
              color='#FCEED3'
              textColor='#E5A443'
            />
            <ChatBox
              chat='Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.'
              time='19:32'
              user='You'
              color='#EEDCFF'
              textColor='#9B51E0'
            />
            <ChatBox
              chat='Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.'
              time='19:32'
              user='Mary Hilda'
              color='#FCEED3'
              textColor='#E5A443'
            />
            <ChatBoxDivider date='Today June 09, 2021' />
            <ChatBox
              chat='No worries. It will be completed ASAP. I’ve asked him yesterday.'
              time='19:32'
              user='You'
              color='#EEDCFF'
              textColor='#9B51E0'
            />
            <ChatBox
              chat='Just Fill me in for his updates yea?'
              time='19:32'
              user='Mary Hilda'
              color='#FCEED3'
              textColor='#E5A443'
            />
          </div>
          <div className={styles.chatBottom}>
            <input type='text' placeholder='Type a new message' />
            <button>Send</button>
          </div>
        </>
      )}
    </Box>
  );
};

export default TabsInbox;
