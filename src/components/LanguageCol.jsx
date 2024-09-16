import LanguageLine from "./LanguageLine";

export default function LanguageCol({width, language }) {
  return (
    <div className="grid grid-cols-12 items-center gap-4">
      <p className="col-span-4">{language}</p>
      <LanguageLine width={width}/>
    </div>
  );
}
