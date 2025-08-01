"use client";

import { DataProvider } from '../contexts/DataProvider';

/**
 * Компонент, который объединяет все необходимые провайдеры контекста.
 * Сейчас он оборачивает приложение в DataProvider, что позволяет
 * использовать общий стейт для курсов и лекций на разных страницах.
 * При необходимости сюда можно добавить другие провайдеры (например,
 * для темизации или управления авторизацией).
 */
export default function Providers({ children }: { children: any }) {
  return <DataProvider>{children}</DataProvider>;
}