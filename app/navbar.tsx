//import { IoAdd, IoLogoGithub, IoOpenOutline } from 'react-icons/io5'
//import Button from './design-system/button'
//import styles from './navbar.module.css'
//import { SessionInfo } from '../lib/game-saving/account'
//import { isDark } from '../lib/state'

interface MainNavbarProps {
	//session: SessionInfo | null
	transparent?: boolean
	goldLogo?: boolean
}

export default function MainNavbar(props: MainNavbarProps) {
	return (
		<nav class={`${styles.container} ${props.transparent ? styles.transparent : ''}`}>
			
		</nav>
	)
}
