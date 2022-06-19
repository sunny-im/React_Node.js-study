// import React from 'react';   // 함수형
import React, {Component} from 'react';  //클래스형

// 함수형 컴포넌트
/*function Header(props) {
    return ( // HTML을 웹 페이지에 랜더링!
        <div>
            <header>
                <h1>헤더입니다 !!</h1>
            </header>
        </div>
    );
}*/

// 클래스형 컴포넌트
class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>헤더입니다!!</h1>
                </header>
            </div>
        );
    }
}
export default Header;  //다른 JS파일에서 불러올 수 있도록 내보내주기