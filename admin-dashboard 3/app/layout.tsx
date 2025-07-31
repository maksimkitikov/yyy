import './globals.css';
import { ReactNode } from 'react';
import Providers from '../components/Providers';

export const metadata = {
  title: 'Админ-панель',
  description: 'Минималистичная админ‑панель для управления курсами и лекциями',
};

/**
 * Корневой макет приложения. Здесь подключаются глобальные стили и
 * провайдер контекста данных. Все страницы приложения отображаются
 * внутри компонента <Providers>, который обеспечивает доступ к
 * мок‑данным и возможностям их изменения. Используйте этот макет
 * для добавления общего обрамления (например, модальные окна или
 * глобальные всплывающие подсказки) при необходимости.
 */
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {/* Оборачиваем содержимое в Providers для доступа к контексту */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}