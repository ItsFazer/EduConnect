import React from 'react';
import Group1 from '..//images/redirect/Group 1.svg';
import Group2 from '..//images/redirect/Group 2.svg';
import Beta from '..//images/redirect/Beta.svg';
import '../styles/redirect.css';
import '../styles/reset.css';
import '../styles/fonts.css';

class About extends React.Component {
  render() {
    return (
      <div className="for_react">
        <div className="logo">
          <img src={Group1} alt="" />
        </div>
        <div className="wrapper">
          <div className="main">
            <div className="deployy">
              <img src={Group2} alt="" className="deploy" />
            </div>
            <h1>О нас</h1>
            <span>
              EduConnect, прямое обьяснение современного домашнего обучения.
              EduConnect представлен как платформа для выкладывания курсов,
              тестов, и вебинаров. Наша платформа будет использоваться в частных
              школах, интенсивах, тренингах, курсах. EduConnect не только
              решение домашнего обучения, которое требует больших переработок. А
              также новая возможность для удобного Feedback’а между
              преподавателем и учениками. <br />
              <br />
              <br />
              <br />
            </span>
            <h1>
              Простой режим
              <img src={Beta} alt="" />
            </h1>
            <span>
              Современное поколение хорошо разбирается в интернете, но как же
              поколение которое чуть старше нас? EduConnect удобен для всех, мы
              добавили Простой режим, который убирает все разделы и кнопки
              второго плана, и оставляет только самое нужное для обучения! В
              данном режиме не будет других вкладок, только главная, на которой
              будут успехи ученика, домашнее задание, вебинары, и все самое
              нужное для саморазвития. Простой режим - все самое нужное для вас.
            </span>
          </div>
        </div>
        <br/>
        <br/>

        <br/>

        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        
      </div>
    );
  }
}

export default About;
