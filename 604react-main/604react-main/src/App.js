import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile
        img="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
        name="김일동"
        title="프로트엔드 개발자"
      />
      <Profile
        img="https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_1280.jpg"
        name="김이동"
        title="백엔드 개발자"
        isNew={true}
      />
      <Profile
        img="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg"
        name="김삼동"
        title="풀스택 개발자"
      />
    </>
  );
}

export default App;
