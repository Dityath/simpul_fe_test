import styles from "@/styles/components/tabsButton.module.css";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

type TabsButtonType = {
  openedTabs: "main" | "inbox" | "task";
  setOpenedTabs: React.Dispatch<
    React.SetStateAction<"main" | "inbox" | "task">
  >;
};

const TabsButton = ({ setOpenedTabs, openedTabs }: TabsButtonType) => {
  const animations = [useAnimation(), useAnimation()];
  const animationsSvg = [useAnimation(), useAnimation()];
  const animationsPath = [useAnimation(), useAnimation()];
  const animationMain = useAnimation();
  const [isClicked, setIsClicked] = useState(false);

  const handleClickMain = () => {
    setIsClicked(!isClicked);
    setOpenedTabs("main");
    const targetX: number[] = isClicked ? [0, 0] : [91, 176];
    const targetType: string = isClicked ? "spring" : "block";

    animations.forEach((animate, index) => {
      animate.start({
        x: targetX[index],
        zIndex: 5,
        height: "60px",
        width: "60px",
        backgroundColor: "#F2F2F2",
        transition: {
          type: targetType,
          stiffness: 100,
          duration: 0.3,
          ease: "easeInOut",
        },
      });
    });

    animationsPath.forEach((animate, index) => {
      animate.start({
        fill: index === 0 ? "#8785FF" : "#F8B76B",
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      });
    });

    animationMain.start({
      x: 0,
      backgroundColor: "#2F80ED",
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.3,
        ease: "easeInOut",
      },
    });
  };

  const handleClickInbox = () => {
    setIsClicked(!isClicked);
    setOpenedTabs("inbox");

    animationMain.start({
      x: -15,
      backgroundColor: "#4F4F4F",
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.1,
        ease: "easeInOut",
      },
    });

    animations[0].start({
      x: 94,
      zIndex: 20,
      width: "68px",
      height: "68px",
      backgroundColor: "#8785FF",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });

    animations[1].start({
      x: 169,
      zIndex: 5,
      width: "60px",
      height: "60px",
      backgroundColor: "#F2F2F2",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });

    animationsPath[0].start({
      fill: "#F2F2F2",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });

    animationsPath[1].start({
      fill: "#F8B76B",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
  };

  const handleClickTask = () => {
    setIsClicked(!isClicked);
    setOpenedTabs("task");

    animationMain.start({
      x: -20,
      backgroundColor: "#4F4F4F",
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.1,
        ease: "easeInOut",
      },
    });

    animations[0].start({
      x: 91,
      zIndex: 5,
      width: "60px",
      height: "60px",
      backgroundColor: "#F2F2F2",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    });

    animations[1].start({
      x: 179,
      zIndex: 20,
      width: "68px",
      height: "68px",
      backgroundColor: "#F8B76B",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });

    animationsPath[0].start({
      fill: "#8885FF",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });

    animationsPath[1].start({
      fill: "#F2F2F2",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });
  };

  return (
    <div className={styles.overallTabs}>
      <motion.button
        className={styles.mainTabs}
        animate={animationMain}
        onClick={handleClickMain}
        whileHover={{ scale: 1.1 }}>
        <svg
          width='56'
          height='56'
          viewBox='0 0 56 56'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M31.4427 12.3359C32.3618 12.9486 32.6101 14.1904 31.9974 15.1094L24.737 26H35C35.7376 26 36.4153 26.406 36.7634 27.0563C37.1114 27.7066 37.0732 28.4957 36.6641 29.1094L27.3308 43.1094C26.7181 44.0285 25.4763 44.2768 24.5573 43.6641C23.6382 43.0514 23.3899 41.8097 24.0026 40.8906L31.263 30H21C20.2624 30 19.5847 29.5941 19.2367 28.9437C18.8886 28.2934 18.9268 27.5043 19.3359 26.8906L28.6692 12.8906C29.2819 11.9716 30.5237 11.7232 31.4427 12.3359Z'
            fill='white'
          />
        </svg>
      </motion.button>
      <motion.button
        initial={{ x: 91 }}
        className={styles.secondaryTabs}
        animate={animations[0]}
        whileHover={{ scale: 1.1 }}
        onClick={handleClickInbox}>
        <motion.svg
          animate={animationsSvg[0]}
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <motion.path
            animate={animationsPath[0]}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.4443 3.11066H3.99984C3.38873 3.11066 2.88873 3.61066 2.88873 4.22177V19.7773L7.33318 15.3329H18.4443C19.0554 15.3329 19.5554 14.8329 19.5554 14.2218V4.22177C19.5554 3.61066 19.0554 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41097L5.75541 13.7661L5.11097 14.4106V5.3328H17.3332ZM21.7776 7.55512H23.9998C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6665 20.8885H8.44429C7.83317 20.8885 7.33317 20.3885 7.33317 19.7773V17.5551H21.7776V7.55512Z'
            fill='#8885FF'
          />
        </motion.svg>
      </motion.button>
      <motion.button
        initial={{ x: 176 }}
        className={styles.secondaryTabs}
        animate={animations[1]}
        whileHover={{ scale: 1.1 }}
        onClick={handleClickTask}>
        <motion.svg
          animate={animationsSvg[1]}
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <motion.path
            animate={animationsPath[1]}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.11117 4.66669H24.1112C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1112 23.5556H4.11117C2.88895 23.5556 1.88895 22.5556 1.88895 21.3334V6.88891C1.88895 5.66669 2.88895 4.66669 4.11117 4.66669ZM4.11117 6.88891V21.3334H13.0001V6.88891H4.11117ZM24.1112 21.3334H15.2223V6.88891H24.1112V21.3334ZM23.0001 10.7778H16.3334V12.4445H23.0001V10.7778ZM16.3334 13.5556H23.0001V15.2222H16.3334V13.5556ZM23.0001 16.3334H16.3334V18H23.0001V16.3334Z'
            fill='#F8B76B'
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default TabsButton;
