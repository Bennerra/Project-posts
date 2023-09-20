import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from "./navbar.module.css";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)
	
	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}
	
	return (
		<div className={classes.navbar}>
			<MyButton onClick={logout}>
				Выйти
			</MyButton>
			<div className={classes.links}>
				<Link className={classes.link} to="/about">О сайте</Link>
				<Link className={classes.link} to="/posts">Посты</Link>
			</div>
		</div>
	);
};

export default Navbar;