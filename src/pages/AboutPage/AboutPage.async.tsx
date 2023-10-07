import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!! ЭТО ТОЛЬКО ДЛЯ НАГЛЯДНОСТИ
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
