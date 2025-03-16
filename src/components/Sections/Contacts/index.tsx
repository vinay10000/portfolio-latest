'use client';
import Container from '@/components/Cards/Container';
import styles from './contacts.module.scss';

export default function Contacts() {
    return (
        <Container id={'contacts'} className={'contacts'}>
            <div className={styles['title']}>
                <h3>
                    Interested in collaborating with me?
                </h3>
                <p>
                    I&apos;m always open to discussing product design work or partnership opportunities.
                </p>
            </div>
            <div className={styles['action']}>
                <a href="mailto: mvinay.work@gmail.com">
                    <button>
                        <div className={styles['animation']}>
                            
                        </div>
                        <p>Start a conversation</p>
                    </button>
                </a>
            </div>
        </Container>
    );
}
