import Test1 from "./programmers/짝수는 싫어요";
import Test2 from "./programmers/피자 나눠 먹기(1)";
import Test3 from "./programmers/제일 작은 수 제거하기";

function App() {
  return (
    <div className="App">
      <Test1 number={40} />
      <Test2 number={15} />
      <Test3 arr={[4,3,2]} />
    </div>
  );
}

export default App;
