import Image from 'next/image';
import Container from '@/components/Cards/Container';
import GitHub from '@/resources/svgs/contact-icons/github.svg';
import LinkedIn from '@/resources/svgs/contact-icons/linkedin.svg';
import Mail from '@/resources/svgs/contact-icons/mail.svg';
import Resume from '@/resources/svgs/resume.svg';
import styles from './home.module.scss';
import { Code, Code2Icon } from 'lucide-react';


export default function Home() {
    return (
        <Container id={'home'} className={'home'}>
            <div className={styles['home-container']}>
                <div className={styles.status}>
                    <div className={styles['status-circle']}></div>
                    Online.
                </div>
                <div className={styles.introduction}>
                    Hey, I&apos;m Vinay
                    <div className={styles.occupation}>
                        Fullstack Developer.
                    </div>
                </div>
                <div className={styles.contacts}>
                    <a href="https://github.com/vinay10000" target="_blank" className={styles.links}>
                        <Image src={GitHub} alt={'GitHub'} className={styles.icon} width={20} height={20} />
                        <div className={styles.label}>GitHub</div>
                    </a>
                    <a href="https://www.linkedin.com/in/mhvinay/" target="_blank"
                        className={styles.links}>
                        <Image src={LinkedIn} alt={'LinkedIn'} className={styles.icon} width={18} height={18} />
                        <div className={styles.label}>LinkedIn</div>
                    </a>
                    <a href="mailto: mhvinay5@gmail.com" className={styles.links}>
                        <Image src={Mail} alt={'Mail'} className={styles.icon} width={22} height={22} />
                        <div className={styles.label}>Mail</div>
                    </a>
                    <a href="https://leetcode.com/u/vinay10000/" target="_blank" className={styles.links}>
                        <Code2Icon size={18} style={{ marginRight: '8px' }} />
                        <div className={styles.label}>LeetCode</div>
                    </a>
                </div>
                <hr className={styles.divider} />
                <div className={styles.summery}>
                    <p>
                        Hey!, I&apos;m Vinay, <b>  an enthusiastic beginner in the world of full-stack development </b> Capable
                        in <b>React</b>,<b> Next</b>,<b> Node</b>.js with<b> MongoDB</b> and <b>Postgres </b>. Ready to
                        build innovative web applications and always putting out creative solutions to
                        problems. Stepping into the world of Machine Learning and keeping up to date wit the latest news
                        and technologies
                    </p><br />
                    <p>
                        Currently, I&apos;m focusing on improving my skills with hands-on projects and continuously learning through tutorials, courses, and online communities.


                    </p><br />
                    <p>
                        When I’m not at the computer, I’m usually playing football, reading books, watching movies and
                        listening to music.
                    </p>
                </div>
            </div>
        </Container>
    );
}

