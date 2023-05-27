import FirstDesgin from './Component/Design/FirstDesgin';
import Fourdesign from './Component/Design/Fourdesign';
import Threedesign from './Component/Design/Threedesign';
import Twodesgin from './Component/Design/Twodesgin';
import { Fivedesign } from './Component/Design/Fivedesign';
import Home from './Component/Home/Home';
import './App.css'
function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black realtive overflow-hidden">
      <div className='max-w-screen-2xl h-full mx-auto flex justify-center items-center'>
        <Home/>
      </div>
      <div className='w-full h-full absolute top-0 left-0 z-10 overflow-y-hidden'>
        <FirstDesgin/>
        <Twodesgin/>
        <Threedesign/>
        <Fourdesign/>
       <Fivedesign/>
      </div>
    
    </div>
  );
}
export default App;
