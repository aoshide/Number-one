import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Политика конфиденциальности</h1>
      <section>
        <h2>Введение</h2>
        <p>
          Мы ценим вашу конфиденциальность и обязуемся защищать вашу личную информацию. Настоящая Политика конфиденциальности
          описывает виды информации, которую мы собираем, как мы ее используем и как мы ее защищаем.
        </p>
      </section>

      <section>
        <h2>Информация, которую мы собираем</h2>
        <ul>
          <li>Личная идентификационная информация (Имя, Электронная почта и т. д.)</li>
          <li>Неличная информация (Тип браузера, Информация об устройстве и т. д.)</li>
        </ul>
      </section>

      <section>
        <h2>Как мы используем вашу информацию</h2>
        <p>
          Мы используем собранную информацию для улучшения наших услуг, ответов на запросы и отправки рекламных материалов с
          вашего согласия.
        </p>
      </section>

      <section>
        <h2>Как мы защищаем вашу информацию</h2>
        <p>
          Мы применяем различные меры безопасности для поддержания защиты вашей личной информации, когда вы оформляете заказ
          или вводите, отправляете или получаете доступ к личным данным.
        </p>
      </section>

      <section>
        <h2>Ваши права</h2>
        <p>
          Вы имеете право на доступ, исправление или удаление ваших личных данных в любое время. Если вы хотите воспользоваться
          этими правами, пожалуйста, свяжитесь с нами.
        </p>
      </section>

      <section>
        <h2>Изменения в нашей Политике конфиденциальности</h2>
        <p>
          Мы можем обновлять нашу Политику конфиденциальности время от времени. Все изменения будут размещены на этой странице,
          а дата вступления в силу будет обновлена соответствующим образом.
        </p>
      </section>

      <section>
        <h2>Контакты</h2>
        <p>
          Если у вас есть вопросы или замечания относительно нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами по
          адресу:
          <br />
          <strong>Электронная почта:</strong> nursquad@gmail.com
        </p>
      </section>
    </div>
  );
};

export default Privacy;