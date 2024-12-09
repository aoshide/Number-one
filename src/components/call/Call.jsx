import React, { useState } from 'react';
import './call.css';

const Call = () => {

  const emergencyMessages = [
    { id: 1, text: 'Нужна помощь' },
    { id: 2, text: 'Пожар' },
    { id: 3, text: 'Нужна скорая помощь' },
    { id: 4, text: 'Угроза жизни' },
    { id: 5, text: 'Свяжитесь со мной' },
  ];

  const [sentMessages, setSentMessages] = useState([]);

  const onSendMessage = (message) => {
    setSentMessages((prevMessages) => [...prevMessages, message]);
    console.log(`Сообщение отправлено: ${message}`); 
    alert(`Сообщение отправлено: ${message}`); 
  };

  return (
    <div className="container">
      <h2 className="heading">Экстренные вызовы</h2>
      <div className="button-container">
        {emergencyMessages.map((message) => (
          <button
            key={message.id}
            onClick={() => onSendMessage(message.text)}
            className="button"
          >
            {message.text}
          </button>
        ))}
      </div>
      <div className="history">
        <h3>История отправленных сообщений:</h3>
        <ul>
          {sentMessages.map((msg, index) => (
            <li key={index} className="history-item">{msg}</li>
          ))}
        </ul>
      </div>
      <div className="contacts">
     <div className="video-call">
        <h2>Видеозвонки с другими глухонемыми:</h2>
        <p>Для общения с другими глухонемыми по видеозвонку нажмите кнопку ниже.</p>
        <button className="video-call-button" onClick={() => alert('Открытие видеозвонка!')}>
          Начать видеозвонок
        </button>
      </div>
    </div>
        <h3 className='contact-info' >Контакты для связи:</h3>
        <ul className='contact-info ul' >
          <>Телефон: <a className='contact-info a' href="tel:+996555600117">+996 (555)600-117</a></> <br />
          <>Email: <a className='contact-info a' href="iskakovkuttuubaj0207@gmail.com">iskakovkuttuubaj0207@gmail.com</a></> <br />
          <>WhatsApp: <a className='contact-info a' href="https://wa.me/996555600117" target="_blank" rel="noopener noreferrer">Написать в WhatsApp</a></> <br />
          <>Telegram: <a className='contact-info a' href="https://t.me/@bayyaa1" target="_blank" rel="noopener noreferrer">Связаться в Telegram</a></> 
        </ul>
      </div>
    
  );
};

export default Call;
