import React from "react";
import styles from "./NavBar.module.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavBar = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <navbar className={styles.container}>
      <ul className={styles.list}>
        <li>
          <h3 className={styles.title}>
            <span style={{ color: "#22C55E" }}>Uretken</span>
            <span style={{ color: "#000814" }}>Shop</span>
          </h3>
        </li>
        <li>
          <span className={styles.signIn}>Giriş Yap</span>
          <button className={styles.signUp}>Üye Ol</button>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </li>
      </ul>
    </navbar>
  );
};

export default NavBar;
