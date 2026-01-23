import React from 'react';
import { muscleColors } from '../exerciseData';

const SelectedExercises = ({ selectedExercises, onRemoveExercise, onClearAll }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-h-[600px] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Your Workout ({selectedExercises.length})
        </h2>
        {selectedExercises.length > 0 && (
          <button
            onClick={onClearAll}
            className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {selectedExercises.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏋️</div>
          <p className="text-gray-500">
            Select exercises from the list to build your workout
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {selectedExercises.map(exercise => (
            <div
              key={exercise.id}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800">{exercise.name}</h3>
                <button
                  onClick={() => onRemoveExercise(exercise.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  title="Remove exercise"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {exercise.muscleGroups.map((muscle, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded text-xs font-medium text-white capitalize"
                    style={{ backgroundColor: muscleColors[muscle] || '#94a3b8' }}
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Workout Summary */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Workout Summary</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Total Exercises: <span className="font-medium">{selectedExercises.length}</span></p>
              <p>Muscle Groups: <span className="font-medium">
                {new Set(selectedExercises.flatMap(ex => ex.muscleGroups)).size}
              </span></p>
            </div>
            
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
              Save Workout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedExercises;
