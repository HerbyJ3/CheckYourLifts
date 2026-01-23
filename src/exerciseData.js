// Exercise Database
export const exerciseDatabase = [
  // Chest Exercises
  { id: 1, name: "Bench Press", muscleGroups: ["chest", "shoulders", "triceps"], category: "upper" },
  { id: 2, name: "Incline Bench Press", muscleGroups: ["chest", "shoulders"], category: "upper" },
  { id: 3, name: "Decline Bench Press", muscleGroups: ["chest"], category: "upper" },
  { id: 4, name: "Dumbbell Press", muscleGroups: ["chest", "shoulders", "triceps"], category: "upper" },
  { id: 5, name: "Push-ups", muscleGroups: ["chest", "shoulders", "triceps"], category: "upper" },
  { id: 6, name: "Cable Flyes", muscleGroups: ["chest"], category: "upper" },
  { id: 7, name: "Dumbbell Flyes", muscleGroups: ["chest"], category: "upper" },
  
  // Back Exercises
  { id: 8, name: "Deadlift", muscleGroups: ["back", "glutes", "hamstrings"], category: "back" },
  { id: 9, name: "Pull-ups", muscleGroups: ["back", "biceps"], category: "upper" },
  { id: 10, name: "Bent-Over Rows", muscleGroups: ["back", "biceps"], category: "upper" },
  { id: 11, name: "Lat Pulldown", muscleGroups: ["back", "biceps"], category: "upper" },
  { id: 12, name: "T-Bar Rows", muscleGroups: ["back"], category: "upper" },
  { id: 13, name: "Seated Cable Rows", muscleGroups: ["back"], category: "upper" },
  
  // Shoulder Exercises
  { id: 14, name: "Overhead Press", muscleGroups: ["shoulders", "triceps"], category: "upper" },
  { id: 15, name: "Lateral Raises", muscleGroups: ["shoulders"], category: "upper" },
  { id: 16, name: "Front Raises", muscleGroups: ["shoulders"], category: "upper" },
  { id: 17, name: "Rear Delt Flyes", muscleGroups: ["shoulders"], category: "upper" },
  { id: 18, name: "Arnold Press", muscleGroups: ["shoulders"], category: "upper" },
  { id: 19, name: "Shrugs", muscleGroups: ["shoulders", "traps"], category: "upper" },
  
  // Arm Exercises
  { id: 20, name: "Barbell Curls", muscleGroups: ["biceps"], category: "upper" },
  { id: 21, name: "Hammer Curls", muscleGroups: ["biceps", "forearms"], category: "upper" },
  { id: 22, name: "Tricep Dips", muscleGroups: ["triceps", "chest"], category: "upper" },
  { id: 23, name: "Tricep Pushdowns", muscleGroups: ["triceps"], category: "upper" },
  { id: 24, name: "Skull Crushers", muscleGroups: ["triceps"], category: "upper" },
  { id: 25, name: "Concentration Curls", muscleGroups: ["biceps"], category: "upper" },
  
  // Leg Exercises
  { id: 26, name: "Squats", muscleGroups: ["quads", "glutes", "hamstrings"], category: "lower" },
  { id: 27, name: "Leg Press", muscleGroups: ["quads", "glutes"], category: "lower" },
  { id: 28, name: "Lunges", muscleGroups: ["quads", "glutes", "hamstrings"], category: "lower" },
  { id: 29, name: "Leg Extensions", muscleGroups: ["quads"], category: "lower" },
  { id: 30, name: "Leg Curls", muscleGroups: ["hamstrings"], category: "lower" },
  { id: 31, name: "Calf Raises", muscleGroups: ["calves"], category: "lower" },
  { id: 32, name: "Romanian Deadlifts", muscleGroups: ["hamstrings", "glutes", "back"], category: "lower" },
  { id: 33, name: "Bulgarian Split Squats", muscleGroups: ["quads", "glutes"], category: "lower" },
  
  // Core Exercises
  { id: 34, name: "Planks", muscleGroups: ["abs", "core"], category: "core" },
  { id: 35, name: "Crunches", muscleGroups: ["abs"], category: "core" },
  { id: 36, name: "Russian Twists", muscleGroups: ["abs", "obliques"], category: "core" },
  { id: 37, name: "Leg Raises", muscleGroups: ["abs"], category: "core" },
  { id: 38, name: "Cable Crunches", muscleGroups: ["abs"], category: "core" },
  { id: 39, name: "Mountain Climbers", muscleGroups: ["abs", "core"], category: "core" },
  { id: 40, name: "Bicycle Crunches", muscleGroups: ["abs", "obliques"], category: "core" },
];

// Muscle group color mapping
export const muscleColors = {
  chest: "#ef4444",
  shoulders: "#f97316",
  triceps: "#f59e0b",
  biceps: "#84cc16",
  forearms: "#22c55e",
  back: "#06b6d4",
  traps: "#0ea5e9",
  abs: "#8b5cf6",
  obliques: "#a855f7",
  core: "#8b5cf6",
  quads: "#ec4899",
  hamstrings: "#f43f5e",
  glutes: "#e11d48",
  calves: "#dc2626",
};
