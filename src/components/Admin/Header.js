import React from 'react';
export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="navbar-container">
                        <div className="navbar-header2 pull-left">
                            <a href="#" className="navbar-brand">
                                <small>
                                <img src="asset/web/images/logo-footer.png" />
                                </small>
                            </a>
                        </div>
                        <div className="sidebar-collapse" id="sidebar-collapse">
                            <i className="collapse-icon fa fa-bars" />
                        </div>
                        <div className="navbar-header2 pull-right">
                            <div className="navbar-account">
                                <ul className="account-area">
                                    <li>
                                        <a className="login-area dropdown-toggle" data-toggle="dropdown">
                                            <div className="avatar" title="View your public profile">
                                                <img src="assets/img/avatars/adam-jansen.jpg" />
                                            </div>
                                            <section>
                                                <h2><span className="profile"><span>David Stevenson</span></span></h2>
                                            </section>
                                        </a>
                                        <ul className="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                                            <li className="username"><a>David Stevenson</a></li>
                                            <li className="email"><a>David.Stevenson@live.com</a></li>
                                            <li>
                                                <div className="avatar-area">
                                                    <img src="assets/img/avatars/adam-jansen.jpg" className="avatar" />
                                                    <span className="caption">Change Photo</span>
                                                </div>
                                            </li>
                                            <li className="edit">
                                                <a href="profile.html" className="pull-left">Profile</a>
                                                <a href="#" className="pull-right">Setting</a>
                                            </li>
                                            <li className="dropdown-footer">
                                                <a href="login.html">
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}