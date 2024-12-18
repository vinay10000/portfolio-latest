import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles['footer-container']}>
            Designed with <a href={'https://www.figma.com/'} target={'_blank'}>Figma</a> and coded in <a
            href={'https://code.visualstudio.com/'}
            target={'_blank'}>VSCode</a>. Built with <a href={'https://nextjs.org/'} target={'_blank'}>Next.js</a> and
            <a href={'https://tailwindcss.com/'}> Tailwind CSS</a>,
            deployed using <a href={'https://vercel.com/'} target={'_blank'}>Vercel</a>
        </footer>
    );
}