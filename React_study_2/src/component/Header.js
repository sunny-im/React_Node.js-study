// import React from 'react';   // 함수형
import React, {Component} from 'react';  //클래스형 , 리액트를 구현할 수 있는 플러그인을 연결

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
class Header1 extends Component {
    render() {  // 상속받은 화면 출력 함수, 클래스형 컴포넌트는 render() 필수!
        return (
            <div>
                <header>
                    <h1>헤더입니다!!</h1>
                </header>
            </div>
        );
    }
}
export default Header1;  //다른 JS파일에서 불러올 수 있도록 내보내주기