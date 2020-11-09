export default  global ={
palette: {
  primary: {
    light: "#63ccff",
    main: "#009be5",
    dark: "#006db3",
    instad: "#FED800",
  },
},
typography: {
  h5: {
    fontWeight: 500,
    fontSize: 26,
    letterSpacing: 0.5,
  },
  h1: {
    color: "white",
    fontSize: "48px",
    margin: 0,
  },
  h3: {
    color: "#FEDB00",
    fontWeight: 700,
    fontDecoration: "uppercase",
  },
  p: {
    fontSize: 16,
  },
},
shape: {
  borderRadius: 8,
},
props: {
  MuiTab: {
    disableRipple: true,
  },
},
mixins: {
  toolbar: {
    minHeight: 48,
  },
},
}

