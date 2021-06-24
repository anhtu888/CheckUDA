import React from 'react';
export default class HMCategory extends React.Component {
    render() {
        return (
            <div className="block category">
                <div className="title">
                    <h2>Danh mục</h2>
                </div>
                <div className="category-content">
                    <ul className="list-collections submenu">
                        <li className="level0 "><a href="/product1">Hoa quả sạch</a></li>
                        <li className="level0 "><a href="/product2">Rau sạch</a></li>
                        <li className="level0 "><a href="/product3">Thịt sạch</a></li>
                        <li className="level0 "><a href="/product4">Thuỷ - Hải sản sạch</a></li>
                        <li className="level0 "><a href="/product5">Gạo - Hạt khô</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}