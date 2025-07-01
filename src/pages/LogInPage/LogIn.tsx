import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export function LogIn() {
  const navigate = useNavigate();

  const loadingDiv = useRef<HTMLDivElement>(null);
  const loadingImg = useRef<HTMLImageElement>(null);

  const [load, setLoad] = useState(false);

  const telDiv = useRef<HTMLDivElement>(null);
  const telInput = useRef<HTMLInputElement>(null);
  const telBut = useRef<HTMLButtonElement>(null);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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

      if (telInput.current.value.length === 13) {
        if (telBut.current) {
          setIsButtonDisabled(false);
          localStorage.setItem("num", formatted);
          telBut.current.style.background = "#2d2d2d";
        }
      } else {
        if (telBut.current) {
          setIsButtonDisabled(true);

          telBut.current.style.background = "#2d2d2d5c";
        }
      }
    }
  };

  const navNext = () => {
    setLoad(true);

    setTimeout(() => {
      if (loadingDiv.current) {
        loadingDiv.current.style.opacity = "1";
        setTimeout(() => {
          if (loadingDiv.current) {
            loadingDiv.current.style.background = "white";
            if (loadingImg.current) {
              loadingImg.current.style.opacity = "0";
              setTimeout(() => {
                navigate("/code");
              }, 300);
            }
          }
        }, 1600);
      }
    }, 200);
  };

  return (
    <main>
      <div className={styles.content}>
        {load && (
          <div className={styles.loading} ref={loadingDiv}>
            <img
              src="../src/assets/dowland_img.png"
              alt="Загрузка..."
              ref={loadingImg}
            />
          </div>
        )}

        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Авторизация</h1>
            <p>
              Войдите, чтобы управлять своими записями, управлять аккаунтом и
              смотреть ход лечения.
            </p>
          </div>

          <div className={styles.input_cont}>
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
                inputMode="numeric"
              />
              <button onClick={clearInput}>
                <img src="../src/assets/delete_icon.svg" alt="Очистить" />
              </button>
            </div>
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
            disabled={isButtonDisabled}
            onClick={() => {
              navNext();
            }}
          >
            Получить код
          </button>
        </div>
      </div>
    </main>
  );
}
