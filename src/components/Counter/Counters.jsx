import { useEffect } from "react";
import Counter from "./Counter";
import { counterAnimation } from "../../assets/js/main.js";
import { useTranslation } from "react-i18next";

export default function Counters() {
  const { t } = useTranslation();
  // animation (fade-in & count increase)
  useEffect(counterAnimation, []);

  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        {t("main.counters", { returnObjects: true }).map((c) => (
          <Counter
            key={c.id}
            id={c.id}
            length={t("main.counters", { returnObjects: true }).length}
            number={c.number}
            text={c.text}
            properties={c.properties}
          />
        ))}
      </div>
    </div>
  );
}
