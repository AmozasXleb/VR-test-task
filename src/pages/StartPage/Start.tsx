import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export function Start() {
  const navigate = useNavigate();


  const ind1 = useRef<HTMLDivElement>(null);
  const ind2 = useRef<HTMLDivElement>(null);
  const ind3 = useRef<HTMLDivElement>(null);
  const ind = useRef<HTMLDivElement>(null);
  const but = useRef<HTMLDivElement>(null);

  const first = useRef<HTMLDivElement>(null);
  const second = useRef<HTMLDivElement>(null);
  const last = useRef<HTMLDivElement>(null);

  const firstImg = useRef<HTMLImageElement>(null);
  const firstText = useRef<HTMLImageElement>(null);

  let slideNum = 1;

  const nextSlide = () => {
    if (slideNum === 1) {
      if (ind1.current) {
        ind1.current.style.transform = "translateX(18px)";
      }
      if (ind2.current) {
        ind2.current.style.transform = "translateX(-40px)";
      }

      if (first.current) {
        first.current.style.opacity = "0";
        first.current.style.display = "none";
      }
      if (second.current) {
        second.current.style.opacity = "1";
      }

      slideNum += 1;

      return;
    }
    if (slideNum === 2) {
      if (ind1.current) {
        ind1.current.style.transform = "translateX(28px)";
      }
      if (ind3.current) {
        ind3.current.style.transform = "translateX(-40px)";
      }

      if (second.current) {
        second.current.style.opacity = "0";
        second.current.style.display = "none";
      }
      if (last.current) {
        last.current.style.opacity = "1";
      }

      slideNum += 1;

      return;
    }
        if (slideNum === 3) {
          navigate("/login")
    }
  };

  useEffect(() => {
    if (firstImg.current) {
      firstImg.current.style.marginBottom = "-70px";
    }

    setTimeout(() => {
      if (firstImg.current) {
        firstImg.current.style.transform = "translateY(-90px)";
      }
      if (but.current) {
        but.current.style.opacity = "1";
      }
      if (ind.current) {
        ind.current.style.opacity = "1";
      }
      if (firstText.current) {
        firstText.current.style.opacity = "1";
      }
    }, 1000);
  }, []);

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.frame_row}>
          <div className={styles.frame} ref={first}>
            <img src="./src/assets/tooth_main.png" alt="" ref={firstImg} />
            <div className={styles.text_first} ref={firstText}>
              <h2>Добро Пожаловать!</h2>
              <p>
                Мы поможем вам эффективно и легко записываться на прием к
                врачам.
                <br />
                Давайте начнем!
              </p>
            </div>
          </div>
          <div className={styles.frame} ref={second}>
            <img src="./src/assets/peoples.png" alt="" />
            <div className={styles.text}>
              <h2>Выберите Специализацию</h2>
              <p>
                Выберите нужную вам медицинскую специализацию, чтобы мы могли{" "}
                <br />
                адаптировать ваш опыт.
              </p>
            </div>
          </div>
          <div className={styles.frame} ref={last}>
            <img src="./src/assets/tooth_second.png" alt="" />
            <div className={styles.text}>
              <h2>Запланируйте Свой Первый Прием</h2>
              <p>
                Выберите удобное время и дату для <br /> встречи с желаемым
                врачом. <br />
                Начните свой путь к лучшему здоровью!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.indication} ref={ind}>
          <div className={styles.ind1} ref={ind1}>
            *
          </div>
          <div className={styles.ind2} ref={ind2}>
            *
          </div>
          <div className={styles.ind3} ref={ind3}>
            *
          </div>
        </div>
        <div className={styles.button_cont} ref={but}>
          <button className={styles.next_but} onClick={nextSlide}>
            Далее 🡢
          </button>
        </div>
      </div>
    </main>
  );
}
