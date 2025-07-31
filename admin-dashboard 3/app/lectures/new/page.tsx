"use client";

import Layout from '../../../components/Layout';
import LectureForm from '../../../components/LectureForm';
import { useData } from '../../../contexts/DataProvider';

/**
 * Страница создания лекции. Содержит форму LectureForm. При
 * отправке формы вызывается addLecture из контекста, что
 * добавляет новую лекцию в общий список, а пользователь
 * возвращается на дашборд.
 */
export default function NewLecturePage() {
  const { addLecture } = useData();

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Новая лекция</h2>
      <LectureForm onSubmit={addLecture} />
    </Layout>
  );
}