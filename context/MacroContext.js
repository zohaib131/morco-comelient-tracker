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
      totals.calories += Number(food.calories);  // Ensure the value is treated as a number
      totals.protein += Number(food.protein);    // Same for protein
      totals.carbs += Number(food.carbs);        // Same for carbs
      totals.fats += Number(food.fats);          // Same for fats
      return totals;
    }, { calories: 0, protein: 0, carbs: 0, fats: 0 }); // Start with 0 for each macro
  };
  
  // Calculate the overall total (sum of all macros)
  const calculateTotal = (totals) => {
    const total = totals.calories + totals.protein + totals.carbs + totals.fats;
    return total; // Return the total sum
  };
  
  const totals = calculateTotalMacros();
  const total = calculateTotal(totals);
  
  console.log("Total Macros:", totals);
  console.log("Overall Total (Calories + Protein + Carbs + Fats):", total);
  
  
  return (
    <MacroContext.Provider value={{ foodList, goal, addFood, removeFood, updateGoal, calculateTotalMacros }}>
      {children}
    </MacroContext.Provider>
  );
};
