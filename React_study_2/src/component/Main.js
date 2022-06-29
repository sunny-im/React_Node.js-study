import React from 'react';   // 함수형
// import React, {Component} from 'react';  //클래스형
import PropTypes from 'prop-types' // 프로퍼티 타입을 지정해주기 위해 사용 한다.

// 함수형 컴포넌트
// function Main(props) {
function Main({name, color, femaleY}) { // props 대신 비구조화 할당
    const msg = femaleY ? '여자' : '남자' ;
    return (
        <div>
            <main>
                {/* <h1 style={{color:props.color}}>hi, I'm {props.name}!!!!!</h1> */}
                <h1 style={{color}}>hi, I'm {name}!!!!! ({msg})</h1>
            </main>
        </div>
    );
}
// // 프로퍼티 타입 지정
// Main.propTypes = {
//     name: PropTypes.string
//   }

// // 프로퍼티 기본값 지정
// Main.defaultProps = {
//     name : '써니'
// }

// 프로퍼티 타입 지정 및 필수값 설정
Main.propTypes = {
    name : PropTypes.string.isRequired,
}

// 클래스형 컴포넌트
/*class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <h1>메인입니다!!</h1>
                </main>
            </div>
        );
    }
}*/
export default Main;  //다른 JS파일에서 불러올 수 있도록 내보내주기