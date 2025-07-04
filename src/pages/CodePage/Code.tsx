import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export function Code() {
  const navigate = useNavigate();

  const telDiv = useRef<HTMLDivElement>(null);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const telBut = useRef<HTMLButtonElement>(null);
  const [codeValues, setCodeValues] = useState(["", "", "", ""]);

  const telChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 1);
    const newCode = [...codeValues];
    newCode[index] = value;
    setCodeValues(newCode);

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const focusChange = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && codeValues[index] === "") {
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const butClick = () => {
    navigate("/main");
  };

  const isAllFilled = codeValues.every((val) => val !== "");

  useEffect(() => {
    if (telBut.current) {
      telBut.current.disabled = !isAllFilled;
      if (isAllFilled) {
        telBut.current.style.background = "#2d2d2d";
      } else {
        telBut.current.style.background = "#2d2d2d5c";
      }
    }
  }, [isAllFilled]);

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <div className={styles.content}>

        <div className={styles.main}>
          <div className={styles.back}>
            <a href="/login">
              <img src="../src/assets/Chevron.svg" alt="Назад" /> Назад{" "}
            </a>
          </div>
          <div className={styles.header}>
            <h1>Код подтверждения</h1>
            <p>
              Код отправлен на + 7 {localStorage.getItem("num")} <br />
              Введите код из SMS
            </p>
          </div>

          <div className={styles.inputs_cont}>
            <div ref={telDiv}>
              {inputRefs.map((ref, i) => (
                <input
                  key={i}
                  type="tel"
                  ref={ref}
                  value={codeValues[i]}
                  onChange={(e) => telChange(i, e)}
                  onKeyDown={(e) => focusChange(i, e)}
                  maxLength={1}
                  inputMode="numeric"
                />
              ))}
            </div>
            <label>Запросить повторно через: {seconds}</label>
          </div>
        </div>

        <div className={styles.button_cont}>
          <p>
            Нажимая “Получить код” вы принимате условия{" "}
            <span>Пользовательского соглашения</span> и{" "}
            <span>Политики кофиденциальности</span> , а также разрешаете
            обработку своих данных
          </p>
          <button
            className={styles.next}
            ref={telBut}
            onClick={() => butClick()}
          >
            Продолжить
          </button>
        </div>
      </div>
    </main>
  );
}
