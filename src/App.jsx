import React, { useState } from 'react';
import BodyMap from './components/BodyMap';
import ExerciseList from './components/ExerciseList';
import SelectedExercises from './components/SelectedExercises';
import { exerciseDatabase } from './exerciseData';

function App() {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Get all muscle groups from selected exercises
  const highlightedMuscles = [...new Set(
    selectedExercises.flatMap(ex => ex.muscleGroups)
  )];

  const toggleExercise = (exercise) => {
    setSelectedExercises(prev => {
      const isSelected = prev.some(ex => ex.id === exercise.id);
      if (isSelected) {
        return prev.filter(ex => ex.id !== exercise.id);
      } else {
        return [...prev, exercise];
      }
    });
  };

  const removeExercise = (exerciseId) => {
    setSelectedExercises(prev => prev.filter(ex => ex.id !== exerciseId));
  };

  const clearAll = () => {
    setSelectedExercises([]);
  };

  // Filter exercises based on search and category
  const filteredExercises = exerciseDatabase.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || exercise.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            💪 CheckYourLifts
          </h1>
          <p className="text-xl text-white/90">
            Visualize Your Workout Routine
          </p>
          <p className="text-white/70 mt-2">
            Select exercises to see which muscle groups you're targeting
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Exercise Selection Panel */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              
              <div className="mt-3 flex flex-wrap gap-2">
                {['all', 'upper', 'lower', 'core', 'back'].map(category => (
                  <button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      categoryFilter === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Exercise List */}
            <ExerciseList
              exercises={filteredExercises}
              selectedExercises={selectedExercises}
              onToggleExercise={toggleExercise}
            />
          </div>

          {/* Body Visualization */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Muscle Groups
              </h2>
              <BodyMap highlightedMuscles={highlightedMuscles} />
              
              {highlightedMuscles.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Active Muscle Groups:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {highlightedMuscles.map(muscle => (
                      <span
                        key={muscle}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Selected Exercises Panel */}
          <div className="lg:col-span-1">
            <SelectedExercises
              selectedExercises={selectedExercises}
              onRemoveExercise={removeExercise}
              onClearAll={clearAll}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-white/70 text-sm">
          <p>Created by Herby Jeanty | CheckYourLifts v1.0.0</p>
          <p className="mt-1">Track your workouts, visualize your gains 💪</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
