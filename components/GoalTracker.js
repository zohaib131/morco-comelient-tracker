import { useMacros } from '../context/MacroContext';

const GoalTracker = () => {
  const { goal, calculateTotalMacros } = useMacros();
  const totalMacros = calculateTotalMacros();

  return (
    <div className="space-y-4">
      <h2 className="text-xl">Your Macro Goal</h2>
      <div className="flex space-x-4">
        <div>
          <strong>Calories:</strong> {totalMacros.calories}/{goal.calories}
        </div>
        <div>
          <strong>Protein:</strong> {totalMacros.protein}/{goal.protein}
        </div>
        <div>
          <strong>Carbs:</strong> {totalMacros.carbs}/{goal.carbs}
        </div>
        <div>
          <strong>Fats:</strong> {totalMacros.fats}/{goal.fats}
        </div>
      </div>
    </div>
  );
};

export default GoalTracker;
