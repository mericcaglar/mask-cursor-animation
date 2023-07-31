'use client'
import {useState} from "react";
import styles from './page.module.css'
import {useMousePosition} from "@/hook/useMousePosition";
import {motion} from "framer-motion";

export default function Home() {
    const {x,y} = useMousePosition();
    const [isHovered,setIsHovered] = useState(false);
    const size = isHovered ? 250 : 25;

  return (
      <motion.div className={styles.main}>
          <motion.div
              className={styles.mask}

              animate={{
                  WebkitMaskPosition:`${x - size/2}px ${y - size/2}px`,
                  WebkitMaskSize:`${size}px`
                }}
              transition={{
                  type:"tween",
                  ease:"backOut"
              }}
          >
              <p
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
              >Hello World.</p>
          </motion.div>
         <div className={styles.body}>
             <p>Merhaba Dünya</p>
         </div>
      </motion.div>
  )
}
