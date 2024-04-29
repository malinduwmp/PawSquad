import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-lato: Lato;
--font-inter: Inter;

/* font sizes */
--font-size-xs: 12px;
--font-size-5xs: 8px;
--font-size-sm: 14px;
--font-size-lg: 18px;
--font-size-smi: 13px;

/* Colors */
--color-teal: #30817c;
--color-white: #fff;
--color-darkgray-100: #aaafb9;
--color-darkgray-200: #aeaeae;
--color-darkslategray-100: #2f2e2e;
--color-darkslategray-200: rgba(47, 46, 46, 0.77);
--color-gold: #ffdd4e;
--color-paleturquoise: #b1f3ef;
--color-black: #000;
--color-gainsboro-100: #d9d9d9;
--color-gainsboro-200: rgba(217, 217, 217, 0.69);
--color-cadetblue: #478f8a;
--color-silver: #acc2c1;

/* Gaps */
--gap-10xs: 3px;
--gap-11xs: 2px;
--gap-xl: 20px;
--gap-8xs: 5px;
--gap-4xs: 9px;
--gap-3xs: 10px;
--gap-5xs: 8px;
--gap-smi: 13px;

/* Paddings */
--padding-mid: 17px;
--padding-6xs: 7px;
--padding-12xs: 1px;
--padding-3xs: 10px;
--padding-9xs: 4px;
--padding-11xs: 2px;
--padding-8xs: 5px;
--padding-mini: 15px;
--padding-sm: 14px;
--padding-12xl: 31px;
--padding-10xl: 29px;
--padding-xl: 20px;
--padding-5xl: 24px;
--padding-14xl: 33px;

/* Border radiuses */
--br-mini: 15px;
--br-13xl: 32px;
--br-lgi: 19px;
--br-11xl: 30px;
--br-xl: 20px;
--br-131xl: 150px;
--br-3xs: 10px;
--br-xs: 12px;

}
`;
}
