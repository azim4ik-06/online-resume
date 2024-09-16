import LanguageCol from "./LanguageCol";

export default function Language() {
  return (
    <div className="space-y-2">
      <LanguageCol language={"Таджикский"} width={"w-11/12"} />
      <LanguageCol language={"Русский"} width={"w-full"}/>
      <LanguageCol language={"Узбекский"} width={"w-full"}/>
      <LanguageCol language={"Корейский"} width={"w-1/4"}/>
    </div>
  );
}
