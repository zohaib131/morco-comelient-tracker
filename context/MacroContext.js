import { createContext, useContext, useState } from 'react';

const MacroContext = createContext();

export const useMacros = () => useContext(MacroContext);

export const MacroProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);
  const [goal, setGoal] = useState({ calories: 2000, protein: 150, carbs: 250, fats: 70 });

  const addFood = (food) => {
    setFoodList((prevFoodList) => [...prevFoodList, food]);
  };

  const removeFood = (id) => {
    setFoodList((prevFoodList) => prevFoodList.filter(food => food.id !== id));
  };

  const updateGoal = (newGoal) => {
    setGoal(newGoal);
  };

  const calculateTotalMacros = () => {
    return foodList.reduce((totals, food) => {
      totals.calories += food.calories;
      totals.protein += food.protein;
      totals.carbs += food.carbs;
      totals.fats += food.fats;
      return totals;
    }, { calories: 0, protein: 0, carbs: 0, fats: 0 });
  };

  return (
    <MacroContext.Provider value={{ foodList, goal, addFood, removeFood, updateGoal, calculateTotalMacros }}>
      {children}
    </MacroContext.Provider>
  );
};
