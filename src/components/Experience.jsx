export default function Experience() {
  const Ilmhona = [
    {
      title: "Исправление ошибок",
      description:
        "Успешно выявил и исправил ошибки с переводом контента на сайте, что улучшило пользовательский опыт.",
    },
    {
      title: "Обновление ссылок",
      description:
        "Провел аудит и исправил неработающие ссылки, обеспечив доступ к актуальной информации.",
    },
    {
      title: "Дополнение контента",
      description:
        "Активно работал над обновлением и дополнением информации на сайте, что способствовало его актуальности и информативности.",
    },
    {
      title: "Командное взаимодействие",
      description:
        "Сотрудничал с командой для оптимизации процессов разработки и улучшения качества продукта.",
    },
  ];

  const experiences = [
    {
      position: "Стажёр Front-End разработчик",
      accelerator: "акселератор навыков Илмхона",
      period: "ИЮЛЬ 2024 - СЕНТЯБРЬ 2024",
      details: Ilmhona,
    },
  ];

  return (
    <div className="mt-4">
      {experiences.map((exp, index) => (
        <div key={index}>
          <h1 className="font-semibold text-md">{exp.position}</h1>
          <div className="flex flex-col gap-2 lg:flex-row justify-between text-sm">
            <p className="font-medium">{exp.accelerator}</p>
            <p className="font-medium">{exp.period}</p>
          </div>
          <div className="text-sm ps-4 my-2 space-y-2">
            {exp.details.map((detail, index) => (
              <li key={index}>
                <b className="font-semibold">{detail.title}:</b> {detail.description}
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
