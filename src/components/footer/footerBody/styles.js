export const styles = {
  gridTwoBox: {
    width: { xs: "100%", sm: "90%", md: "90%", lg: "65%" },
    mx: { md: "auto" },
    paddingBottom: { xs: 5, sm: 0}
  },
  boxTwoLabel: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "6px",
    "& .MuiFormLabel-root": {
      color: "white",
      fontWeight: "light",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "white",
    },
  },
  btn: {
    width: "fit-content",
    background: "white",
    "&:hover": { background: "white" },
    color: "black",
    float: "right",
    position: "absolute",
    top: { xs: 56, sm: 8 },
    right: { sm: 7 },
    px: 2,
    py: 1,
  },
};
