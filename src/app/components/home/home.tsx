import Image from 'next/image'
import styles from './home.module.css'
import { Konkhmer_Sleokchher } from 'next/font/google';
import { Krub } from 'next/font/google';

const konkhmer = Konkhmer_Sleokchher({
  subsets: ['latin'],
  weight: '400',
});

const krub = Krub({
    subsets: ['latin'],
    weight: '500',
  });

export const HomePage = () => {
    return (
        <section className={styles.homeSection}>
            <div className={styles.homeContent}>
                <Image className={styles.homeImage} src={"/Logo.png"} alt="Logo" width={191} height={238} priority/>
                <div className={styles.homeTextContainer}>
                    <h1 className={konkhmer.className}>KEY SPRING</h1>
                    <h2 className={krub.className}>Unlock Secure Access, Seamlessly</h2>
                </div>
                <div className={styles.homeButtonContainer}>
                    <a className={styles.homeButtonGit}
                    href='https://github.com/majiinB/KeySpring.git'
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <Image src={"/github_logo.png"} alt="git" width={24} height={24} className={styles.homeButtonGitLogo}/>
                        <p className={konkhmer.className}>GitHub</p>
                    </a>
                    <a className={styles.homeButtonReg}>
                        <Image src={"/key_spring_logo.png"} alt="reg" width={20} height={22} className={styles.homeButtonRegLogo}/>
                        <p className={konkhmer.className}>Register</p>
                    </a>
                </div>
            </div>
        </section>
    )
}