"use client";

import { useRouter } from 'next/navigation';

/**
 * Страница входа. Здесь нет настоящей авторизации — после
 * отправки формы пользователь просто перенаправляется на
 * дашборд. Поля email и пароль добавлены для реалистичности
 * интерфейса, но их значения нигде не используются.
 */
export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Просто переходим на страницу дашборда; в будущем здесь
    // можно реализовать вызов API для проверки учётных данных
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow rounded p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Вход</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded border-gray-300 shadow-sm"
              placeholder="your@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Пароль</label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded border-gray-300 shadow-sm"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}