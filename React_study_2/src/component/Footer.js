// import React from 'react';   // 함수형
import React, {Component} from 'react';  //클래스형

// 함수형 컴포넌트
/*function Footer(props) {
    return (
        <div>
            <footer>
                <h1>푸터 입니다 !!</h1>
            </footer>
        </div>
    );
}*/

// 클래스형 컴포넌트
class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <h1>푸터입니다!!</h1>
                </footer>
            </div>
        );
    }
}
export default Footer;  //다른 JS파일에서 불러올 수 있도록 내보내주기