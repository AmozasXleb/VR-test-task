import { useRef } from "react";
import "./css.css";

export function LogIn() {
  const telDiv = useRef<HTMLDivElement>(null);
  const telInput = useRef<HTMLInputElement>(null);
  const telBut = useRef<HTMLButtonElement>(null);

  const onFocus = () => {
    if (telDiv.current) {
      telDiv.current.style.border = "1px solid #EDCAB8";
    }
  };

  const onBlur = () => {
    if (telDiv.current) {
      telDiv.current.style.border = "1px solid #F2F2F5";
    }
  };

  const clearInput = () => {
    if (telInput.current) {
      telInput.current.value = "";
    }
    if (telBut.current) {
      telBut.current.disabled = true;
      telBut.current.style.background = "#2d2d2d5c";
    }
  };

  const telChange = () => {
    if (telInput.current) {
      const numbers = telInput.current.value.replace(/\D/g, "");

      let formatted = "";
      if (numbers.length > 0) formatted += numbers.slice(0, 3);
      if (numbers.length > 3) formatted += " " + numbers.slice(3, 6);
      if (numbers.length > 6) formatted += " " + numbers.slice(6, 8);
      if (numbers.length > 8) formatted += " " + numbers.slice(8, 10);

      telInput.current.value = formatted;

      if (telInput.current.value !== "") {
        if (telBut.current) {
          telBut.current.disabled = false;
          telBut.current.style.background = "#2d2d2d";
        }
      } else {
        if (telBut.current) {
          telBut.current.disabled = true;
          telBut.current.style.background = "#2d2d2d5c";
        }
      }
    }
  };

  return (
    <main>
      <div className="content">
        <div className="main">
          <div className="header">
            <h1>Авторизация</h1>
            <p>
              Войдите, чтобы управлять своими записями, управлять аккаунтом и
              смотреть ход лечения.
            </p>
          </div>

          <div className="input-cont">
            <label>Номер Телефона</label>
            <div ref={telDiv}>
              <img src="../src/assets/ru_flag.svg" alt="Ru" />
              <span>+7</span>
              <input
                type="tel"
                ref={telInput}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={telChange}
              />
              <button onClick={clearInput}>
                <img src="../src/assets/delete_icon.svg" alt="Очистить" />
              </button>
            </div>
          </div>
        </div>

        <div className="button-cont">
          <p>
            Нажимая “Получить код” вы принимате условия{" "}
            <span>Пользовательского соглашения</span> и{" "}
            <span>Политики кофиденциальности</span> , а также разрешаете
            обработку своих данных
          </p>
          <button className="next" ref={telBut} disabled={true}>
            Получить код
          </button>
        </div>
      </div>
    </main>
  );
}
