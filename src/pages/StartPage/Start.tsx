import "../StartPage/css.css";

export function Start() {
  return (
    <main>
      <div className="content">
        <div className="frame-row">
          <div className="frame">
            <img src="./src/assets/tooth_main.png" alt="" />
            <div className="text">
              <h2>Добро Пожаловать!</h2>
              <p>
                Мы поможем вам эффективно и легко записываться на прием к
                врачам.
                <br />
                Давайте начнем!
              </p>
            </div>
          </div>
          <div className="frame">
            <img src="./src/assets/peoples.png" alt="" />
            <div className="text">
              <h2>Выберите Специализацию</h2>
              <p>
                Выберите нужную вам медицинскую специализацию, чтобы мы могли{" "}
                <br />
                адаптировать ваш опыт.
              </p>
            </div>
          </div>
          <div className="frame">
            <img src="./src/assets/tooth_second.png" alt="" />
            <div className="text">
              <h2>Запланируйте Свой Первый Прием</h2>
              <p>
                Выберите удобное время и дату для <br /> встречи с желаемым
                врачом. <br />
                Начните свой путь к лучшему здоровью!
              </p>
            </div>
          </div>
        </div>

        <div className="indication">
          <div id="f1">*</div>
          <div id="f2">*</div>
          <div id="f3">*</div>
        </div>
        <div className="button-cont">
          <button className="next-but">Далее 🡢</button>
        </div>
      </div>
    </main>
  );
}
