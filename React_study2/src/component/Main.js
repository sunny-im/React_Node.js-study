// import React from 'react';   // 함수형
import React, {Component} from 'react';  //클래스형

// 함수형 컴포넌트
/*function Main(props) {
    return (
        <div>
            <main>
                <h1>hi, I'm Sunny!!!!!</h1>
            </main>
        </div>
    );
}*/

// 클래스형 컴포넌트
class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <h1>메인입니다!!</h1>
                </main>
            </div>
        );
    }
}
export default Main;  //다른 JS파일에서 불러올 수 있도록 내보내주기