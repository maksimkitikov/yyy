"use client";

import Link from 'next/link';


/**
 * Компонент макета, который отображает шапку с навигацией и
 * контейнер для основного контента. Используется на страницах
 * дашборда и формах, обеспечивая единообразный внешний вид.
 * Навигация содержит ссылки на главные разделы: дашборд,
 * создание курса и создание лекции.
 */
export default function Layout({ children }: { children: any }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Шапка */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Админ‑панель</h1>
          <nav className="space-x-4">
            <Link href="/dashboard" className="text-blue-600 hover:underline">
              Дашборд
            </Link>
            <Link href="/courses/new" className="text-blue-600 hover:underline">
              Добавить курс
            </Link>
            <Link href="/lectures/new" className="text-blue-600 hover:underline">
              Добавить лекцию
            </Link>
          </nav>
        </div>
      </header>
      {/* Основной контент */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}