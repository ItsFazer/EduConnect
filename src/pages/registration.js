import React from 'react';
import '../styles/reset.css';
import '../styles/registration.css';
import SuperImg from '../images/login/Суперкартинка_2.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


class Registration extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            email: '',
            city: '',
            school: '',
            password: '',
            confirmPassword: '',
            isButtonDisabled: true,
          };
        }
      
        handleEmailChange = (event) => {
          this.setState({
            email: event.target.value,
            isButtonDisabled: !event.target.value || !this.state.city || !this.state.school || !this.state.password || !this.state.confirmPassword,
          });
        };
      
        handleCityChange = (event) => {
          this.setState({
            city: event.target.value,
            isButtonDisabled: !event.target.value || !this.state.email || !this.state.school || !this.state.password || !this.state.confirmPassword,
          });
        };
      
        handleSchoolChange = (event) => {
          this.setState({
            school: event.target.value,
            isButtonDisabled: !event.target.value || !this.state.email || !this.state.city || !this.state.password || !this.state.confirmPassword,
          });
        };
      
        handlePasswordChange = (event) => {
          this.setState({
            password: event.target.value,
            isButtonDisabled: !event.target.value || !this.state.email || !this.state.city || !this.state.school || !this.state.confirmPassword,
          });
        };
      
        handleConfirmPasswordChange = (event) => {
          this.setState({
            confirmPassword: event.target.value,
            isButtonDisabled: !event.target.value || !this.state.email || !this.state.city || !this.state.school || !this.state.password,
          });
        };
  render() {
    return (
      <div className="react-main">
        <header className="header">
          <div className="header_text">
            <a href="">EduConnect</a>
          </div>
        </header>
        <div className="main">
          <div className="main_content">
            <div className="main_form">
              <a href="">Главная </a>/
              <a href="" style={{ color: '#5AB9EA' }}>
                {' '}
                Регистрация
              </a>
              <h1 className="enter">Зарегистрируйтесь</h1>
              <form action="/">
                <div className="main_buttons">
                  <button type="button" className="main_button" id="student">
                    Ученик
                  </button>
                  <button type="button" className="main_button" id="teacher">
                    Преподаватель
                  </button>
                </div>
                <div className="form">
                  <input
                    type="email"
                    className="main_input"
                    required=""
                    placeholder="Эл.почта" onChange={this.handleEmailChange}
                  />
                  <input
                    type="text"
                    className="main_input"
                    required=""
                    placeholder="Город"
                    onChange={this.handleCityChange}
                  />
                  <input
                    type="text"
                    className="main_input"
                    required=""
                    placeholder="ОУ/ООУ"
                    onChange={this.handleSchoolChange} 
                  />
                  <input
                    type="password"
                    className="main_input"
                    required=""
                    placeholder="Пароль"
                    onChange={this.handlePasswordChange}
                  />
                  <input
                    type="password"
                    className="main_input"
                    required=""
                    placeholder="Повторите пароль"
                    onChange={this.handleConfirmPasswordChange} 
                  />
                  <Link to='/about'><button type="submit" className="submit">Войти</button></Link>
                </div>
              </form>
            </div>
            <div className="main_news">
              <h1>Начните вместе с EduConnect</h1>
              <div className="main_posts">
                <div className="main_post">
                  <a href="">
                    <img src={SuperImg} alt="Новость" id="post1" />
                    <br />
                  </a>
                  <label htmlFor="post1">Начните с EduConnect</label>
                </div>
                <div className="main_post">
                  <a href="">
                    <img src={SuperImg} alt="Новосить" id="post2" />
                    <br />
                  </a>
                  <label htmlFor="post2">
                    В чем проблема
                    <br /> домашнего обучения
                  </label>
                </div>
                <div className="main_post">
                  <a href="">
                    <img src={SuperImg} alt="Новосить" id="post2" />
                    <br />
                  </a>
                  <label htmlFor="post2">
                    В чем проблема
                    <br /> домашнего обучения
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
