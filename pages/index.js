import { MacroProvider } from '../context/MacroContext';
import FoodInput from '../components/FoodInput';
import GoalTracker from '../components/GoalTracker';
import FoodList from '../components/FoodList';

const Home = () => {
  return (
    <MacroProvider>
      <div className="p-8 space-y-8">
        <h1 className="text-2xl font-bold">Macro Compliance Tracker</h1>
        <GoalTracker />
        <FoodInput />
        <FoodList />
      </div>
    </MacroProvider>
  );
};

export default Home;
