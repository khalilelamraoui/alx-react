import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {return;},
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keydownEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownEvent);
  }

  keydownEvent = (e) => {
    if (e.ctrlKey && e.key === 'h'){
      alert('Logging you out');
      this.props.logOut();
    }
  }
  
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        <Notifications listNotifications={ listNotifications } />
        <Header />
        {isLoggedIn ? <CourseList listCourses={ listCourses } /> : <Login />}
        <Footer />
      </div>
    );
  }
}

export default App;