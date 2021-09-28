import React from "react";
import { Box, useMediaQuery, Container, Grid, Link } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import cx from "classnames";
import ScrollAnimation from "react-animate-on-scroll";
import i18next from "i18next";

import { useIsDarkMode } from "state/user/hooks";

import { HeaderSection } from ".";
import { FeatureBox } from "components/Box";
import { AdButton } from "components/Button";

import LOGO_WITH_CITY from "assets/img/landing/logos/logo-with-city.png";
import LOGO_WITH_CITY_W from "assets/img/landing/logos/logo-with-city-white.png";
import LOGO_WHAT_IS_ARDANA from "assets/backgrounds/what-is-ardana.png";

import img_fully_decentralized from "assets/img/landing/icons/fully-decentralized.png";
import img_borrow_lend from "assets/img/landing/icons/borrow-lend.png";
import img_store_of_value from "assets/img/landing/icons/store-of-value.png";
import img_powered_by_cardano from "assets/img/landing/icons/powered-by-cardano.png";

const Ardana_features = [
  {
    image: img_fully_decentralized,
    title: i18next.t("PAGE.LANDING.ARDANA.FEATURES.0.TITLE"),
    content: i18next.t("PAGE.LANDING.ARDANA.FEATURES.0.CONTENT"),
  },
  {
    image: img_borrow_lend,
    title: i18next.t("PAGE.LANDING.ARDANA.FEATURES.1.TITLE"),
    content: i18next.t("PAGE.LANDING.ARDANA.FEATURES.1.CONTENT"),
  },
  {
    image: img_store_of_value,
    title: i18next.t("PAGE.LANDING.ARDANA.FEATURES.2.TITLE"),
    content: i18next.t("PAGE.LANDING.ARDANA.FEATURES.2.CONTENT"),
  },
  {
    image: img_powered_by_cardano,
    title: i18next.t("PAGE.LANDING.ARDANA.FEATURES.3.TITLE"),
    content: i18next.t("PAGE.LANDING.ARDANA.FEATURES.3.CONTENT"),
  },
];

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  bg: {
    paddingBottom: "100px",
    background: `url(${LOGO_WITH_CITY}) right top no-repeat, url(${LOGO_WITH_CITY_W}) right 30px no-repeat, #080E42`,
  },

  title: {
    fontFamily: "Brandon Grotesque",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "100px",
    lineHeight: "100%",
    color: "white",
    margin: "50px 0px 30px 0",

    [breakpoints.down("sm")]: {
      fontSize: "64px",
    },
  },

  subTitle: {
    color: "white",
    whiteSpace: "pre-line",
    fontSize: "24px",
    fontFamily: "Museo Sans",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "29px",

    [breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },

  definitionQ: {
    color: "white",
    fontSize: "64px",
    fontWeight: 900,
    fontFamily: "Brandon Grotesque",
    fontStyle: "normal",
    lineHeight: "200%",
  },

  definitionA: {
    color: "white",
    whiteSpace: "pre-line",
    fontWeight: 300,
    fontSize: "18px",
    fontFamily: "Museo Sans",
    fontStyle: "normal",
    lineHeight: "150%",
  },
}));

const MainSection: React.FC = () => {
  const { breakpoints } = useTheme();
  const dark = useIsDarkMode();
  const mobile = useMediaQuery(breakpoints.down("xs"));
  const classes = useStyles({ dark, mobile });

  return (
    <Box className={cx(classes.bg)}>
      <Container>
        <HeaderSection />

        <Grid container>
          <Grid item xs={12} sm={6}>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <Box className={cx(classes.title)} mr={!mobile && "-10px"} textAlign={mobile ? "center" : "left"}>
                {i18next.t("PAGE.LANDING.TITLE")}
              </Box>
              <Box className={cx(classes.subTitle)} mr={!mobile && "-150px"} textAlign={mobile ? "center" : "left"}>
                {i18next.t("PAGE.LANDING.DESCRIPTION")}
              </Box>
            </ScrollAnimation>

            <Box mt="50px"></Box>

            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <Box textAlign={mobile ? "center" : "left"}>
                <Link href="http://app.ardana.org/launch" underline="none">
                  <AdButton variant="contained">
                    {i18next.t("PAGE.LANDING.LAUNCH_PLATFORM")}
                  </AdButton>
                </Link>
              </Box>
            </ScrollAnimation>
          </Grid>
        </Grid>

        <Box mt={!mobile ? "200px" : "50px"}></Box>
        <Box mx={!mobile ? "100px" : "0"}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <img src={LOGO_WHAT_IS_ARDANA} alt="What is Ardana" width="100%" />
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <Box className={cx(classes.definitionQ)}>
                  {i18next.t("PAGE.LANDING.ARDANA.QUESTION")}
                </Box>
                <Box className={cx(classes.definitionA)}>
                  {i18next.t("PAGE.LANDING.ARDANA.DESC")}
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Box>

        <Box mt={!mobile ? "200px" : "50px"}></Box>

        <Box>
          <Grid container spacing={3} alignItems="stretch">
            {Ardana_features.map((feature, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={3}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  flexFlow: "column",
                }}
              >
                <FeatureBox
                  image={feature.image}
                  title={feature.title}
                  content={feature.content}
                  custom_style={{
                    marginBottom: "50px",
                    padding: "20px",
                    flex: 2,
                    background:
                      "linear-gradient(180deg, rgba(115, 214, 241, 0) 0%, #2F3DA0 100%)",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MainSection;
