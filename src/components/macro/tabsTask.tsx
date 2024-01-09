import { Disclosure, Menu } from "@headlessui/react";
import Box from "../micro/box";
import styles from "@/styles/components/tabTask.module.css";

const TabsTask = () => {
  return (
    <Box>
      <div className={styles.tabTaskHeader}>
        <Menu as='div'>
          <Menu.Button className={styles.tabTaskHeaderLeftButton}>
            <p>My Task</p>
            <svg
              width='21'
              height='20'
              viewBox='0 0 21 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.5979 6.91248L10.7729 10.7291L6.94795 6.91248L5.77295 8.08748L10.7729 13.0875L15.7729 8.08748L14.5979 6.91248Z'
                fill='#4F4F4F'
              />
            </svg>
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>
              <>Hehe</>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <button className={styles.tabTaskHeaderRightButton}>New Task</button>
      </div>
      <div className={styles.allTask}>
        <Disclosure defaultOpen>
          <Disclosure.Button className={styles.allTaskButton}>
            <button
              className={styles.allTaskButtonInside}
              onClick={(event) => event.stopPropagation()}>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z'
                  fill='#828282'
                />
              </svg>
              <p>Close off Case #012920- RODRIGUES, Amiguel</p>
            </button>
            <div className={styles.allTaskButtonRight}>
              <p>2 Days Left</p>
              <p>12/06/2021</p>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g id='expand_more_24px'>
                  <path
                    id='icon/navigation/expand_more_24px'
                    d='M6.175 13.0875L10 9.27086L13.825 13.0875L15 11.9125L10 6.91253L5 11.9125L6.175 13.0875Z'
                    fill='#4F4F4F'
                  />
                </g>
              </svg>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className={styles.allTaskBottom}>
            <div className={styles.allTaskBottomTop}>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M9.99181 1.66663C5.39181 1.66663 1.66681 5.39996 1.66681 9.99996C1.66681 14.6 5.39181 18.3333 9.99181 18.3333C14.6001 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6001 1.66663 9.99181 1.66663ZM10.0003 16.6666C6.31697 16.6666 3.33364 13.6833 3.33364 9.99996C3.33364 6.31662 6.31697 3.33329 10.0003 3.33329C13.6836 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6836 16.6666 10.0003 16.6666ZM9.16681 5.83329H10.4168V10.2083L14.1668 12.4333L13.5418 13.4583L9.16681 10.8333V5.83329Z'
                  fill='#2F80ED'
                />
              </svg>
              <div>
                <input type='text' />
              </div>
            </div>
            <div className={styles.allTaskBottomBottom}>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z'
                  fill='#2F80ED'
                />
              </svg>
              <p>
                Closing off this case since this application has been cancelled.
                No one really understand how this case could possibly be
                cancelled. The options and the documents within this document
                were totally a guaranteed for a success!
              </p>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </Box>
  );
};

export default TabsTask;
