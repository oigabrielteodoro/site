import { motion } from "framer-motion";

import * as S from "./Logo.styles";

type Props = {
  color?: any;
};

export function Logo({ color = "black" }: Props) {
  return (
    <S.Root href="/">
      <motion.svg
        width="122"
        height="33"
        viewBox="0 0 122 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
      >
        <path
          d="M9.51214 25.8881C7.63464 25.8881 5.98004 25.5074 4.54675 24.7459C3.11346 23.9845 1.99734 22.9094 1.19841 21.519C0.399468 20.1294 0 18.5036 0 16.6423V16.2073C0 14.322 0.393076 12.6906 1.17923 11.3122C1.96538 9.93456 3.06872 8.86503 4.48923 8.10359C5.90974 7.34215 7.54516 6.96143 9.39709 6.96143C11.249 6.96143 12.8213 7.34215 14.1907 8.10359C15.5601 8.86503 16.6259 9.93456 17.3865 11.3122C18.1471 12.6898 18.5281 14.2981 18.5281 16.1346V17.6208H4.41253C4.46286 19.0232 4.98297 20.147 5.97285 20.993C6.96194 21.839 8.17952 22.2621 9.62559 22.2621C11.0717 22.2621 12.0983 21.966 12.7838 21.3737C13.4685 20.7815 13.9886 20.111 14.3441 19.3616L17.9585 21.1383C17.603 21.7912 17.0893 22.4864 16.4174 23.2231C15.7446 23.9605 14.8506 24.5887 13.7353 25.1083C12.6192 25.6279 11.2115 25.8881 9.51214 25.8881ZM4.45168 14.4665H14.0781C13.9766 13.2828 13.5004 12.3394 12.6512 11.6386C11.8011 10.9378 10.7042 10.5874 9.36034 10.5874C8.01653 10.5874 6.84929 10.9378 6.012 11.6386C5.17471 12.3402 4.65461 13.2828 4.45168 14.4665Z"
          fill="currentColor"
        />
        <path
          d="M61.2844 11.167C60.4982 9.78942 59.4516 8.74384 58.1446 8.03029C56.8383 7.31753 55.7422 6.95996 54.221 6.95996C52.4442 6.95996 51.0812 7.25049 50.1296 7.83075C49.1789 8.41021 48.4878 9.07507 48.0564 9.82454H47.0921V7.46759H42.7922L39.9336 7.46839H39.9344L34.8739 7.46759L30.2697 13.6677H29.3085L24.7051 7.46759H19.6063L26.4923 16.3511L19.4912 25.3782H24.6659L29.3077 19.0688H30.2689L34.9107 25.3782H40.0471L33.046 16.3511L37.4857 10.6227C38.8622 10.6395 43.4074 10.6227 43.4074 10.6227V32.6302H47.0897V23.1306H48.054C48.3328 23.5664 48.7962 24.0006 49.2908 24.4356C49.7853 24.8714 50.4324 25.221 51.2314 25.4868C52.0303 25.7525 53.0258 25.8858 54.2186 25.8858C55.7653 25.8858 56.8679 25.5291 58.1606 24.8155C59.454 24.1035 60.495 23.0572 61.2812 21.6788C62.0666 20.3011 62.4604 18.6458 62.4604 16.711V16.1316C62.4604 14.1976 62.0666 12.5423 61.2812 11.1638L61.2844 11.167ZM58.0886 16.6065C58.0886 18.4191 57.5741 19.8143 56.5475 20.7944C55.5201 21.7729 54.2074 22.2622 52.6087 22.2622C51.0101 22.2622 49.7238 21.7729 48.6716 20.7944C47.6178 19.8143 47.0929 18.4191 47.0929 16.6065V16.2433C47.0929 14.4068 47.6178 13.0036 48.6716 12.037C49.7238 11.0713 51.0364 10.5868 52.6087 10.5868C54.181 10.5868 55.4881 11.0713 56.5275 12.037C57.5685 13.0044 58.0886 14.4068 58.0886 16.2433V16.6065Z"
          fill="currentColor"
        />
        <path
          d="M65.8242 25.3806V0H70.2V25.3806H65.8242Z"
          fill="currentColor"
        />
        <path
          d="M83.3782 25.8881C81.5007 25.8881 79.8206 25.5193 78.3369 24.7818C76.8533 24.0452 75.6861 22.9932 74.8368 21.6275C73.9867 20.2619 73.5625 18.6241 73.5625 16.7149V16.1346C73.5625 14.2254 73.9867 12.5812 74.8368 11.2036C75.6861 9.82601 76.8533 8.77404 78.3369 8.04931C79.8206 7.32379 81.5007 6.96143 83.3782 6.96143C85.2557 6.96143 86.9295 7.32379 88.4004 8.04931C89.8712 8.77484 91.0312 9.82601 91.8813 11.2036C92.7306 12.5812 93.1556 14.2254 93.1556 16.1346V16.7149C93.1556 18.6249 92.7306 20.2627 91.8813 21.6275C91.0312 22.9932 89.8704 24.0452 88.4004 24.7818C86.9287 25.5185 85.2549 25.8881 83.3782 25.8881ZM83.3782 22.1894C84.9761 22.1894 86.2824 21.7002 87.297 20.7208C88.3109 19.7415 88.819 18.3703 88.819 16.6055V16.2432C88.819 14.4793 88.3117 13.1064 87.297 12.1279C86.2824 11.1486 84.9761 10.6593 83.3782 10.6593C81.7804 10.6593 80.4733 11.1486 79.4594 12.1279C78.4448 13.1064 77.9375 14.4793 77.9375 16.2432V16.6055C77.9375 18.3703 78.4448 19.7415 79.4594 20.7208C80.4733 21.6994 81.7804 22.1894 83.3782 22.1894Z"
          fill="currentColor"
        />
        <path
          d="M97.8252 25.3804L94.8955 7.46899H99.2329L101.249 22.5885H101.897L104.75 7.46899H111.751L114.605 22.5885H115.252L117.269 7.46899H121.606L118.677 25.3804H111.41L108.594 10.2609H107.947L105.093 25.3804H97.826H97.8252Z"
          fill="currentColor"
        />
      </motion.svg>
    </S.Root>
  );
}
