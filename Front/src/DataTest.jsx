import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Test() {
   // 데이터 받을떄
  // 요청받은 정보를 담아줄 변수 선언
  const [ testStr, setTestStr ] = useState('');

  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
  useEffect(
      () => {
        axios({
            url: '/hello',
            method: 'POST'
        }).then((res) => {
            callback(res.data);
        })
      }, []);
// -------------------------------------------------------------------------------------
      // 데이터 보낼 때 get방식
    useEffect(
      () => {
        axios.get('/user',{params:{
              id:4902
        }
        }).then((res) => {
            callback(res.data);
        })
      }, []);


    // 데이터 보낼 때 포스트 방식
    useEffect( () =>{
      let data = {article_seq:1234}
      axios.post('/user2', JSON.stringify(data), {
        headers: { "Content-Type": `application/json`}
      }
       ).then((res) => {
                console.log(res);
               })
    },[]);
  return (
      <div className="App">
          <header className="App-header">
              {testStr}
          </header>
      </div>
  );
}

export default Test;