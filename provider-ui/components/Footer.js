import React, { Fragment } from "react";

import NoSsr from "@mui/material/NoSsr";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography, Paper, styled } from "@layer5/sistent";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor : theme.palette.background.elevatedComponents,
  padding : theme.spacing(2),
  color : theme.palette.background.secondary,
  minWidth : "100%",
  border : "0",
}));

const ClickableSpan = styled("span")(({ theme }) => ({
  cursor : "pointer",
  display : "inline",
  verticalAlign : "middle",
  color : theme.palette.text.disabled,
}));

const StyledFavoriteIcon = styled(FavoriteIcon)(({ theme }) => ({
  display : "inline",
  verticalAlign : "top",
  color : theme.palette.icon.brand,
}));

export default function Footer() {
  const handleL5CommunityClick = () => {
    if (typeof window !== "undefined") {
      const w = window.open("https://layer5.io", "_blank");
      w.focus();
    }
  };

  return (
    <Fragment>
      <NoSsr>
        <Item component="footer" square variant="outlined">
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            component="p"
          >
            <ClickableSpan onClick={handleL5CommunityClick}>
              Built with <StyledFavoriteIcon /> by the Layer5 Community
            </ClickableSpan>
          </Typography>
        </Item>
      </NoSsr>
    </Fragment>
  );
}
