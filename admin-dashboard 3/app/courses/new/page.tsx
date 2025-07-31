"use client";

import Layout from '../../../components/Layout';
import CourseForm from '../../../components/CourseForm';
import { useData } from '../../../contexts/DataProvider';

/**
 * Страница создания курса. Содержит форму CourseForm, которая
 * заполняется пользователем. После отправки новый курс добавляется
 * в общий список через функцию контекста addCourse.
 */
export default function NewCoursePage() {
  const { addCourse } = useData();

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Новый курс</h2>
      <CourseForm onSubmit={addCourse} />
    </Layout>
  );
}