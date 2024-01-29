import styles from './AuthLinks.module.css';
import Link from 'next/link';
const AuthLinks=()=>{
    //temporary
    const status ="notauthenticated";
    return (
        <>
        {
            status==="notauthenticated"?(
                <Link href="/login">Login</Link>
            ):(
                <>
                <Link href="/write">Write</Link>
                <span className={styles.link}>Logout</span>
                </>
            )
        }
        </>
    )
}
export default AuthLinks;