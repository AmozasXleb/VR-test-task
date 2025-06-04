import { useRef } from "react";
import "./css.css";

export function LogIn() {
  const telDiv = useRef<HTMLDivElement>(null);
  const telInput = useRef<HTMLInputElement>(null);

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
              <input type="tel" ref={telInput} onFocus={onFocus} onBlur={onBlur} />
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
          <button className="next">Далее 🡢</button>
        </div>
      </div>
    </main>
  );
}
