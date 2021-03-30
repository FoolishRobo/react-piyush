import './App.css';
import Body from './components/body/Body';
import MyPageHeader from './components/header/Header';

function App() {
  return (
    <div>
    <div className="elevate fixedToTop">
        <MyPageHeader/>
    </div>
    <Body />
    </div>
  );
}

export default App;
