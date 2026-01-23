import React from 'react';
import { muscleColors } from '../exerciseData';

const BodyMap = ({ highlightedMuscles }) => {
  const getMuscleOpacity = (muscle) => {
    return highlightedMuscles.includes(muscle) ? 1 : 0.2;
  };

  const getMuscleColor = (muscle) => {
    return muscleColors[muscle] || '#94a3b8';
  };

  return (
    <div className="flex justify-center items-center gap-8">
      {/* Front View */}
      <div className="relative">
        <h3 className="text-center text-white font-semibold mb-2">Front View</h3>
        <svg width="200" height="400" viewBox="0 0 200 400" className="drop-shadow-lg">
          {/* Head */}
          <circle cx="100" cy="30" r="20" fill="#fbbf24" opacity="0.3" />
          
          {/* Neck */}
          <rect x="90" y="50" width="20" height="20" fill="#cbd5e1" opacity="0.3" />
          
          {/* Shoulders */}
          <ellipse 
            cx="70" cy="80" rx="25" ry="15" 
            fill={getMuscleColor('shoulders')} 
            opacity={getMuscleOpacity('shoulders')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="130" cy="80" rx="25" ry="15" 
            fill={getMuscleColor('shoulders')} 
            opacity={getMuscleOpacity('shoulders')}
            className="transition-opacity duration-300"
          />
          
          {/* Chest */}
          <ellipse 
            cx="100" cy="105" rx="40" ry="30" 
            fill={getMuscleColor('chest')} 
            opacity={getMuscleOpacity('chest')}
            className="transition-opacity duration-300"
          />
          
          {/* Abs */}
          <rect 
            x="80" y="135" width="40" height="60" rx="5" 
            fill={getMuscleColor('abs')} 
            opacity={getMuscleOpacity('abs')}
            className="transition-opacity duration-300"
          />
          
          {/* Obliques */}
          <path 
            d="M 75 145 Q 65 165 70 185" 
            fill={getMuscleColor('obliques')} 
            opacity={getMuscleOpacity('obliques')}
            strokeWidth="15"
            stroke={getMuscleColor('obliques')}
            className="transition-opacity duration-300"
          />
          <path 
            d="M 125 145 Q 135 165 130 185" 
            fill={getMuscleColor('obliques')} 
            opacity={getMuscleOpacity('obliques')}
            strokeWidth="15"
            stroke={getMuscleColor('obliques')}
            className="transition-opacity duration-300"
          />
          
          {/* Biceps */}
          <ellipse 
            cx="50" cy="120" rx="12" ry="30" 
            fill={getMuscleColor('biceps')} 
            opacity={getMuscleOpacity('biceps')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="150" cy="120" rx="12" ry="30" 
            fill={getMuscleColor('biceps')} 
            opacity={getMuscleOpacity('biceps')}
            className="transition-opacity duration-300"
          />
          
          {/* Forearms */}
          <rect 
            x="40" y="150" width="15" height="40" rx="5" 
            fill={getMuscleColor('forearms')} 
            opacity={getMuscleOpacity('forearms')}
            className="transition-opacity duration-300"
          />
          <rect 
            x="145" y="150" width="15" height="40" rx="5" 
            fill={getMuscleColor('forearms')} 
            opacity={getMuscleOpacity('forearms')}
            className="transition-opacity duration-300"
          />
          
          {/* Quads */}
          <ellipse 
            cx="85" cy="250" rx="18" ry="60" 
            fill={getMuscleColor('quads')} 
            opacity={getMuscleOpacity('quads')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="115" cy="250" rx="18" ry="60" 
            fill={getMuscleColor('quads')} 
            opacity={getMuscleOpacity('quads')}
            className="transition-opacity duration-300"
          />
          
          {/* Calves */}
          <ellipse 
            cx="85" cy="340" rx="12" ry="30" 
            fill={getMuscleColor('calves')} 
            opacity={getMuscleOpacity('calves')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="115" cy="340" rx="12" ry="30" 
            fill={getMuscleColor('calves')} 
            opacity={getMuscleOpacity('calves')}
            className="transition-opacity duration-300"
          />
        </svg>
      </div>

      {/* Back View */}
      <div className="relative">
        <h3 className="text-center text-white font-semibold mb-2">Back View</h3>
        <svg width="200" height="400" viewBox="0 0 200 400" className="drop-shadow-lg">
          {/* Head */}
          <circle cx="100" cy="30" r="20" fill="#fbbf24" opacity="0.3" />
          
          {/* Neck */}
          <rect x="90" y="50" width="20" height="20" fill="#cbd5e1" opacity="0.3" />
          
          {/* Traps */}
          <path 
            d="M 70 70 L 100 80 L 130 70 L 120 90 L 80 90 Z" 
            fill={getMuscleColor('traps')} 
            opacity={getMuscleOpacity('traps')}
            className="transition-opacity duration-300"
          />
          
          {/* Upper Back */}
          <ellipse 
            cx="100" cy="115" rx="45" ry="35" 
            fill={getMuscleColor('back')} 
            opacity={getMuscleOpacity('back')}
            className="transition-opacity duration-300"
          />
          
          {/* Lower Back */}
          <rect 
            x="80" y="145" width="40" height="50" rx="5" 
            fill={getMuscleColor('back')} 
            opacity={getMuscleOpacity('back')}
            className="transition-opacity duration-300"
          />
          
          {/* Triceps */}
          <ellipse 
            cx="50" cy="120" rx="12" ry="30" 
            fill={getMuscleColor('triceps')} 
            opacity={getMuscleOpacity('triceps')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="150" cy="120" rx="12" ry="30" 
            fill={getMuscleColor('triceps')} 
            opacity={getMuscleOpacity('triceps')}
            className="transition-opacity duration-300"
          />
          
          {/* Glutes */}
          <ellipse 
            cx="85" cy="205" rx="20" ry="25" 
            fill={getMuscleColor('glutes')} 
            opacity={getMuscleOpacity('glutes')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="115" cy="205" rx="20" ry="25" 
            fill={getMuscleColor('glutes')} 
            opacity={getMuscleOpacity('glutes')}
            className="transition-opacity duration-300"
          />
          
          {/* Hamstrings */}
          <ellipse 
            cx="85" cy="260" rx="16" ry="50" 
            fill={getMuscleColor('hamstrings')} 
            opacity={getMuscleOpacity('hamstrings')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="115" cy="260" rx="16" ry="50" 
            fill={getMuscleColor('hamstrings')} 
            opacity={getMuscleOpacity('hamstrings')}
            className="transition-opacity duration-300"
          />
          
          {/* Calves */}
          <ellipse 
            cx="85" cy="340" rx="12" ry="30" 
            fill={getMuscleColor('calves')} 
            opacity={getMuscleOpacity('calves')}
            className="transition-opacity duration-300"
          />
          <ellipse 
            cx="115" cy="340" rx="12" ry="30" 
            fill={getMuscleColor('calves')} 
            opacity={getMuscleOpacity('calves')}
            className="transition-opacity duration-300"
          />
        </svg>
      </div>
    </div>
  );
};

export default BodyMap;
