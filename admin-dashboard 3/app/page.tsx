import { redirect } from 'next/navigation';

/**
 * Корневая страница приложения. Для удобства сразу перенаправляем
 * пользователя на страницу входа. При желании здесь можно
 * разместить приветственный экран или landing page.
 */
export default function Page() {
  redirect('/login');
}