interface IBaseColorType {
  white: string;
  black: string;
}

interface IColorType {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

interface IThemeType {
  colors: {
    base: IBaseColorType;
    gray: IColorType;
    lime: IColorType;
  };
}

export const theme: IThemeType = {
  colors: {
    base: {
      white: "#fff",
      black: "#000",
    },
    gray: {
      100: "#F8F9FA",
      200: "#F1F3F5",
      300: "#E9ECEF",
      400: "#DEE2E6",
      500: "#CED4DA",
      600: "#ADB5BD",
      700: "#868E96",
      800: "#495057",
      900: "#343A40",
      950: "#212529",
    },
    lime: {
      100: "#F4FCE3",
      200: "#E9FAC8",
      300: "#D8F5A2",
      400: "#C0EB75",
      500: "#A9E34B",
      600: "#94D82D",
      700: "#82C91E",
      800: "#74B816",
      900: "#66A80F",
      950: "#5C940D",
    },
  },
};
