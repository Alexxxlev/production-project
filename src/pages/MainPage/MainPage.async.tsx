import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
  //@ts-ignore
  // В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!! ЭТО ТОЛЬКО ДЛЯ НАГЛЯДНОСТИ
  setTimeout(() => resolve(import("./MainPage")), 1500);
}));
