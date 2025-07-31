"use client";

import Layout from '../../components/Layout';
import CourseList from '../../components/CourseList';
import LectureList from '../../components/LectureList';
import { useData } from '../../contexts/DataProvider';
import Link from 'next/link';

/**
 * Основная страница админ‑панели. Отображает списки курсов и лекций,
 * полученные из контекста данных. Также содержит ссылки для
 * добавления новых курсов и лекций. В будущем при подключении
 * API этот компонент может извлекать данные с сервера.
 */
export default function DashboardPage() {
  const { courses, lectures } = useData();

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Дашборд</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">Курсы</h3>
            <Link href="/courses/new" className="text-sm text-blue-600 hover:underline">
              + Добавить
            </Link>
          </div>
          <CourseList courses={courses} />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">Лекции</h3>
            <Link href="/lectures/new" className="text-sm text-blue-600 hover:underline">
              + Добавить
            </Link>
          </div>
          <LectureList lectures={lectures} />
        </div>
      </div>
    </Layout>
  );
}