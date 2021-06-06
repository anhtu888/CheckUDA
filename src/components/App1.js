import React from 'react';
import IndexHeader from './Website/Header/Index';
import Slide from './Website/Slide';
import IndexAbout from './Website/About/Index';
import IndexProducts from './Website/Products/Index';
import IndexMember from './Website/Member/Index';
import IndexFooter from './Website/Footer/Index'



export default class App1 extends React.Component {
    render() {
        return (
            <>
                <IndexHeader />

                <Slide />
                <IndexAbout />
                <IndexProducts />
                <IndexMember />
                <IndexFooter />

            </>
        )
    }
}
