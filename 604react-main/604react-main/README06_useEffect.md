
# useEffect

# useEffect(()=>{},[])

# useEffect(()=>{},[])  ==> 배열이 비어있을 경우에는 component가 실행될때 처음 한번만 실행된다.
![image](https://github.com/understanding963852/604react/assets/60366769/e3ba505a-5e99-4c32-9b6d-998ec2576f67)

# useEffect(()=>{},[products])  ==>component가 실행될때 처음 한번 실행된후 products의 값이 바뀔때마다 useEffect가 실행됨
![image](https://github.com/understanding963852/604react/assets/60366769/15d3e6c0-7b11-4745-93b9-7be7e714feff)


# useEffect(()=>{},[products, count])  ==>component가 실행될때 처음 한번 실행된후 products와 count중 하나라도 값이 바뀌면 useEffect가 실행됨(2개 다 바뀌어도 한번만 실행됨)

 # useEffect() 가 종료되는 시점에 데이타가 변경된다. 
![image](https://github.com/understanding963852/604react/assets/60366769/29163d0c-a805-4715-8d8b-b635de51d818)


# 이전값 prev

setNum((이전값)=> 이전값 + 1)

```
import { useState } from 'react';
import './App.css';

function App() {
  //let num=0;
  let [num, setNum]=useState(0);

  return (
    <div className='counter'>
      <span className='number'>{num}</span>
      <button className='button' onClick={()=>{

         //아래 코드 세줄에서는  값을 변화가 없다 
         // 상태값은 함수가 종료후 다시 함수가 실행될때 반영되기 때문이다.
         // num은 모두 0이다.
        //setNum(num + 1)
        // setNum(num + 1)
        // setNum(num + 1)


        // prev는 이전값을 가지고 있음
        // setNum((prev)=> {
        //   return prev + 1})
        
         setNum((prev)=> prev + 1)//1
        // setNum((prev)=> prev + 1)//2
        // setNum((prev)=> prev + 1)//3
        
        }}>1씩증가</button>
    </div> 
  );
}

export default App;
```
