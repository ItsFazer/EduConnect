import React from 'react';
import '../styles/login.css';
import SuperImg from '../images/login/Суперкартинка_2.jpg';
import About from './redirect';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          isButtonDisabled: true,
        };
      }
    
      handleEmailChange = (event) => {
        this.setState({
          email: event.target.value,
          isButtonDisabled: !event.target.value || !this.state.city || !this.state.school || !this.state.password || !this.state.confirmPassword,
        });
      };
      handlePasswordChange = (event) => {
        this.setState({
          password: event.target.value,
          isButtonDisabled: !event.target.value || !this.state.email || !this.state.city || !this.state.school || !this.state.confirmPassword,
        });
      };
  render() {
    return (
        <div className="react-main">
        <header className="header">
          <div className="header_text">
            <a href>EduConnect</a>
          </div>
        </header>
        <div className="main">
          <div className="main_content">
            <div className="main_form">
              <a href>Главная </a>/<a href style={{color: '#5AB9EA'}}> Вход</a>
              <h1 className="enter">Войдите</h1>
              <form action>
                <div className="main_buttons">
                  <button type="button" className="main_button" id="student">Ученик</button>
                  <button type="button" className="main_button" id="teacher">Преподаватель</button>
                </div>
                <div className="form">
                  <input onChange={this.handleEmailChange} type="email" className="main_input" required placeholder="Эл.почта" />
                  <input onChange={this.handlePasswordChange} type="password" className="main_input" required placeholder="Пароль" />
                  <Link to={'/registration'}><u><h1 className='NewUser'>Регистрация</h1></u></Link>
                  <Link to='/about'><button type="submit" className="submit" disabled={this.state.isButtonDisabled}>Войти</button></Link>
                </div>
              </form>
              
            </div>
            <div className="main_news">
              <h1>Начните вместе с EduConnect</h1> 
              <div className="main_posts">
                <div className="main_post">
                  <a href><img src={SuperImg}  alt="Новость" id="post1" /><br /></a>
                  <label htmlFor="post1">Начните с EduConnect</label>
                </div>
                <div className="main_post">
                  <a href><img src={SuperImg}  alt="Новосить" id="post2" /><br /></a>
                  <label htmlFor="post2">В чем проблема<br /> домашнего обучения</label>
                </div>
                <div className="main_post">
                  <a href><img src={SuperImg} alt="Новосить" id="post2" /><br /></a>
                  <label htmlFor="post2">В чем проблема<br /> домашнего обучения</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default Login