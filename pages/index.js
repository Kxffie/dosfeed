import Head from 'next/head'
import Wave from 'react-wavify'
import styles from '../styles/Home.module.scss'

import styled, { keyframes } from 'styled-components';
import { fadeInDownBig } from 'react-animations'
import { fadeInUpBig } from 'react-animations'
import { fadeIn } from 'react-animations'

const fadeInDAnimation = keyframes`${fadeInDownBig}`;
const fadeInUAnimation = keyframes`${fadeInUpBig}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const FadeInDDiv = styled.div`
  animation: 1s ${fadeInDAnimation};
`;
const FadeInUDiv = styled.div`
  animation: 1s ${fadeInUAnimation};
`;
const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Dosfeed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page}>
        <div className={styles.header}>
          <FadeInDDiv><h1>DOSFEED</h1></FadeInDDiv>
        </div>
        
        <FadeInDiv>
          <div className={styles.hero}>
            <h1>COMING SOON</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.contentInfo}>
              <h1>Fill me in, what is coming soon?</h1>
              <p>To be bluntly honest, I&apos;m not sure</p>
            </div>
            <div className={styles.contentContact}>
              <h1>Contact</h1>
              <p>Add me on Discord at -------#0001 (most reliable method) or send me an email at <a target="_blank" rel="noreferrer" href="mailto:business@@-------.net">business@-------.net</a></p>
            </div>
          </div>
        </FadeInDiv>

      </main>

      <footer className={styles.footer}>
      <FadeInUDiv>
        <Wave style={{ zIndex: 10 }} options={{ speed: 0.25, amplitude: 30 }} fill="#262626" />
      </FadeInUDiv>
      </footer>
    </div>
  )
}