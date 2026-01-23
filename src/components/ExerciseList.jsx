import React from 'react';

const ExerciseList = ({ exercises, selectedExercises, onToggleExercise }) => {
  const isSelected = (exerciseId) => {
    return selectedExercises.some(ex => ex.id === exerciseId);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-h-[600px] overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Available Exercises ({exercises.length})
      </h2>
      
      {exercises.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No exercises found. Try adjusting your filters.
        </p>
      ) : (
        <div className="space-y-2">
          {exercises.map(exercise => (
            <button
              key={exercise.id}
              onClick={() => onToggleExercise(exercise)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                isSelected(exercise.id)
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
              }`}
            >
              <div className="font-medium">{exercise.name}</div>
              <div className={`text-xs mt-1 flex flex-wrap gap-1 ${
                isSelected(exercise.id) ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {exercise.muscleGroups.map((muscle, idx) => (
                  <span key={idx} className="capitalize">
                    {muscle}{idx < exercise.muscleGroups.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
