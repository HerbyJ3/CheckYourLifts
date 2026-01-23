# 💪 CheckYourLifts - Workout Body Map

A modern, interactive web application for visualizing your workout routines with real-time muscle group highlighting. Built with React and Tailwind CSS, designed to convert into a mobile app.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Features

- **Interactive Body Map**: Visualize muscle groups in real-time as you select exercises
- **40+ Exercises**: Comprehensive database covering all major muscle groups
- **Smart Filtering**: Search and filter exercises by category (Upper, Lower, Core, Back)
- **Workout Builder**: Build custom workout routines with visual feedback
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient background with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HerbyJ3/CheckYourLifts.git
cd CheckYourLifts
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## 📁 Project Structure

```
CheckYourLifts/
├── src/
│   ├── components/
│   │   ├── BodyMap.jsx          # SVG body visualization component
│   │   ├── ExerciseList.jsx     # Exercise selection component
│   │   └── SelectedExercises.jsx # Workout summary component
│   ├── App.jsx                   # Main application component
│   ├── exerciseData.js          # Exercise database and muscle colors
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles with Tailwind
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 How It Works

1. **Select Exercises**: Browse through the exercise list or use the search/filter to find specific exercises
2. **Visual Feedback**: Watch the body map highlight muscle groups in real-time
3. **Build Workouts**: Add exercises to your workout routine
4. **Track Coverage**: See which muscle groups you're targeting with visual indicators
5. **Manage Routines**: Remove exercises or clear all to start fresh

## 💻 Technology Stack

- **Framework**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.4
- **Languages**: JavaScript (JSX)
- **Package Manager**: npm

## 🎯 Muscle Groups Tracked

- **Upper Body**: Chest, Shoulders, Biceps, Triceps, Forearms
- **Back**: Upper Back, Lower Back, Traps
- **Core**: Abs, Obliques
- **Lower Body**: Quads, Hamstrings, Glutes, Calves

## 📱 Converting to Mobile App

This web app is designed to easily convert to a mobile application. See our [Development Guide](../DEVELOPMENT_GUIDE_1.md) for detailed instructions on:

- **Progressive Web App (PWA)**: Easiest path, minimal changes required
- **Capacitor**: Recommended approach for native iOS/Android apps
- **React Native**: Full native experience (requires code refactoring)

### Quick Mobile Setup with Capacitor

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init

# Add platforms
npm install @capacitor/ios @capacitor/android
npx cap add ios
npx cap add android

# Build and sync
npm run build
npx cap sync

# Open in native IDE
npx cap open ios    # Requires macOS
npx cap open android
```

## 🚧 Planned Features

- [ ] User authentication and profiles
- [ ] Save and load custom workout routines
- [ ] Progress tracking over time
- [ ] Exercise instructions and videos
- [ ] Sets and reps tracking
- [ ] Rest timer
- [ ] Workout history calendar
- [ ] Export workouts as PDF
- [ ] Social sharing features
- [ ] Alternative exercise suggestions

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Adding New Exercises

Edit `src/exerciseData.js`:

```javascript
{
  id: 41,
  name: "Your Exercise",
  muscleGroups: ["chest", "triceps"],
  category: "upper"
}
```

### Customizing Colors

Modify muscle colors in `src/exerciseData.js`:

```javascript
export const muscleColors = {
  chest: "#ef4444",  // Red
  // ... add more colors
};
```

## 📝 License

MIT License - see LICENSE file for details

## 👤 Author

**Herby Jeanty**
- Email: jeanty.herby@gmail.com
- GitHub: [@HerbyJ3](https://github.com/HerbyJ3)

## 🙏 Acknowledgments

- Exercise database compiled from various fitness resources
- Inspired by modern workout tracking applications
- Built with guidance from the Development Guide

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Ready to track your gains? Start building your workout routine now! 💪**
