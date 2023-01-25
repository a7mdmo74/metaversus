'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="text-white font-extrabold">Metaverse</span> refers to a
        virtual shared space, created by the convergence of virtually enhanced
        <span className="text-white font-extrabold">physical reality</span> and
        <span className="text-white font-extrabold">
          physically persistent virtual reality
        </span>
        . It is a collective virtual shared space, created by the convergence of
        virtually enhanced physical reality and physically persistent virtual
        reality. It is a collective{' '}
        <span className="text-white font-extrabold">virtual shared space</span>,
        created by the convergence of virtually enhanced physical reality and
        physically persistent virtual reality.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
