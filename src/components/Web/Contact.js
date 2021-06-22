import React from "react"
import Header from "./Header"
import MenuFooter from "./MenuFooter"
import Footer from "./Footer"
export default class Contact extends React.Component {
    render() {
        return (
            <>
                <Header />
                <section className="home-main">
                    {/* Breadcrumbs */}
                    <div className="breadcrumbs">
                        <div className="container">
                            <ul>
                                <li className="home"> <a href="/" title="Trở về trang chủ">Trang chủ</a> <span>//</span></li>
                                <li className="category13"><strong>Liên hệ</strong></li>
                            </ul>
                            <div className="st-border" />
                        </div>
                    </div>
                    {/* main-container */}
                    <div className="main-container col2-right-layout">
                        <div className="main container">
                            <div className="row">
                                <section className="col-main col-sm-6">
                                    <div className="page-title">
                                        <h2>Liên hệ</h2>
                                    </div>
                                    <div className="static-contain">
                                        <form acceptCharset="utf-8" action="/contact" id="contact" method="post">
                                            <input name="FormType" type="hidden" defaultValue="contact" />
                                            <input name="utf8" type="hidden" defaultValue="true" /><input type="hidden" id="Token-415310c464624055805b4e585f466b52" name="Token" defaultValue="03AGdBq24P5kyWEFHh2AFsDXceqnjZ5p9Om_yp2It-iB2UiqHHr_P_SlWafB1ynsv2ScrWty6pr7aHpSSYZjGAznm_8pzq70sjuqppxTauevMrGu6qifxZCeU2pQV8FmFrkPFqhEp_C0EsUurWM_oCvcT9g25K_IMOEHn6rOcllYc-CLTH4u9i2pdCxulFrl9WseU_lc4fiM89r_KPC9fo7LlAkm77b4WTMRz5PDqcvIsqpWNrZsFm-xd3L0nyOJKbXZYe1hhedNs0_jPHiKV8UwMVBpe9z4F0t93KM_MGWRWuAUSt_iuoxddi7-wCWKC8TExTYRb-S4KlUWZb_comAunft5ieFv_U67Ng5MeJ6xz5jLRi2aGW3vRpHCSK0po_7TPMPqSsItUvcO-x2-cX_MDvoeqOvyygICM4QUq7q2IgkM4h6yJaeiWnsl9uqP91sqwXxvYKiQpB" />
                                            <fieldset className="group-select">
                                                <div className="customer-name">
                                                    <div className="input-box">
                                                        <label> Họ và tên: <span className="required">*</span></label>
                                                        <br />
                                                        <input type="text" defaultValue name="contact[Name]" title="First Name" className="input-text " />
                                                    </div>
                                                    <div className="input-box">
                                                        <label> Email: <span className="required">*</span> </label>
                                                        <br />
                                                        <input type="text" defaultValue className="input-text" name="contact[email]" />
                                                    </div>
                                                    <div className="input-box">
                                                        <label htmlFor="comment">Nội dung: <em className="required">*</em></label>
                                                        <br />
                                                        <textarea name="contact[Body]" title="Comment" className="required-entry input-text" defaultValue={""} />
                                                    </div>
                                                    <div className="buttons-set">
                                                        <button type="submit" title="Submit" className="button submit"> <span> Gửi </span> </button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </section>
                                <div className="col-main col-sm-6">
                                    <div className="contact-footer">
                                        <div className="page-title">
                                            <h2>Thông tin liên hệ</h2>
                                        </div>
                                        <h4><span>Địa chỉ liên hệ</span></h4>
                                        <p>Đ/C: 33 Xô Viết Nghệ Tĩnh, Hải Châu, Đà Nẵng</p>
                                        <p>Điện thoại: +84 702.406.546</p>
                                        <p>Email: checkuda@gmail.com</p>
                                        <p>website: wwww.uda.com</p>
                                        <div className="social">
                                            <a href="#"><i className="fa fa-linkedin" /></a>
                                            <a href="#"><i className="fa fa-pinterest-p" /></a>
                                            <a href="#"><i className="fa fa-facebook-official" /></a>
                                            <a href="#"><i className="fa fa-skype" /></a>
                                            <a href="#"><i className="fa fa-twitter" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End main-container */}
                </section>



                <MenuFooter />
                <Footer />

            </>
        )
    }
}