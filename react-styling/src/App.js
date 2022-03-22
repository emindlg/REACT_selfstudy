import Card from "./components/card/Card";
import Inline from "./components/inline-style/Inline";
import ModuleBtn from "./components/moduleCss/ModuleBtn";
import StyleSheet from "./components/regular-style/StyleSheet";
import data from "./data";




const App = () => {
  return (
    <>
      
    <Inline />
    <StyleSheet secenek={true} />
    <Card veriler = {data}/>
    <ModuleBtn />
    <ModuleBtn />

    </>
  );
};

export default App;
