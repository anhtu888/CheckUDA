import React from 'react';
import Header from './Web/Header';
import HomeMain from './Web/HomeMain';
import MenuFooter from './Web/MenuFooter';
import IndexFooter from './Web/Footer';

export default class App1 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <HomeMain />
                <MenuFooter />
                <IndexFooter />
            </>
        )
    }
}
