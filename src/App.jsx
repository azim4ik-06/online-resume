import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HardSkills from "./components/HardSkills";
import Language from "./components/Language";
import LineDashed from "./components/LineDashed";

export default function App() {
  return (
    <div className="grid place-items-center bg-slate-100">
      <div className="lg:w-2/3 lg:mx-auto border shadow-lg">
        <div className="pt-8 text-center">
          <h1 className="text-3xl font-semibold">Саидмуродов Азимджон</h1>
          <h3 className="text-xl font-medium mt-4">Front-End разработчик</h3>
        </div>
        <ul className="text-center my-4">
          <li>
            <a href="#">English</a>
          </li>
          <li>
            <a href="#">Русский</a>
          </li>
        </ul>

        <div className="lg:mx-12">
          <div className="h-px bg-black w-full"></div>
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="order-4 lg:order-1 lg:col-span-5 bg-sky-100 px-6 md:px-12 py-4 space-y-4">
            <h1 className="text-xl uppercase font-semibold my-2">КОНТАКТЫ</h1>
            <Contact
              number={"+992 905 22 69 63"}
              email={"saidmurodovazim808@gmail.com"}
              portfolio={"У меня ПОКА нет портфолио"}
            />
            <LineDashed />
            <HardSkills />
            <LineDashed />
            <div>
              <h1 className="text-xl uppercase font-semibold my-2">
                Образование
              </h1>
              <div className="space-y-2">
                <h1 className="text-xl font-medium">
                  Среднее Образовательное Учреждение №28
                </h1>
                <p>2013-2024</p>
              </div>
            </div>
            <LineDashed />
            <div>
              <h1 className="text-xl uppercase font-semibold my-2">Языки</h1>
              <Language />
            </div>
          </div>
          <div className="lg:order-2 lg:col-span-7 py-4 ps-4 md:pe-12 space-y-6 bg-sky-50">
            <div>
              <h1 className="text-xl font-semibold my-2">ПРОФИЛЬ</h1>
              <p className="text-sm">
                Я Front-End разработчик с опытом в создании интерактивных и
                адаптивных веб-приложений. Уверенно владею HTML, CSS, JavaScript
                и TypeScript, а также React JS для разработки пользовательских
                интерфейсов. Знаком с работой с API, использую TailwindCSS и
                Bootstrap для быстрой стилизации. Имею опыт работы с Git и
                GitHub, а также с Figma для дизайна интерфейсов.
              </p>
            </div>
            <LineDashed />
            <div>
              <h1 className="text-xl font-semibold  my-2">Опыт работы</h1>
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
