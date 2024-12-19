import { useMacros } from '../context/MacroContext';

const FoodList = () => {
  const { foodList, removeFood } = useMacros();

  return (
    <div>
      <h2 className="text-xl">Logged Foods</h2>
      <ul className="space-y-2">
        {foodList.map((food) => (
          <li key={food.id} className="flex justify-between">
            <span>{food.name}</span>
            <button onClick={() => removeFood(food.id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
