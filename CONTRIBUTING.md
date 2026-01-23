# Contributing to CheckYourLifts

Thank you for your interest in contributing to CheckYourLifts! This document provides guidelines for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/HerbyJ3/CheckYourLifts/issues)
2. If not, create a new issue with:
   - Clear, descriptive title
   - Detailed description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, version)

### Suggesting Features

1. Check existing [Issues](https://github.com/HerbyJ3/CheckYourLifts/issues) and [Roadmap](ROADMAP.md)
2. Create a new issue with:
   - Clear feature description
   - Use case and benefits
   - Potential implementation approach
   - Any relevant examples

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 Code Style

- Use ESLint configuration provided
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Add comments for complex logic
- Use meaningful variable/function names

## 🧪 Testing

Before submitting:
- Test on multiple browsers (Chrome, Firefox, Safari)
- Test responsive design on different screen sizes
- Verify no console errors
- Check accessibility with screen readers

## 📄 Commit Messages

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Example: `feat: add rest timer to workout builder`

## 🎨 Adding Exercises

To add new exercises to the database:

1. Edit `src/exerciseData.js`
2. Add your exercise following this format:
```javascript
{
  id: [next_id],
  name: "Exercise Name",
  muscleGroups: ["muscle1", "muscle2"],
  category: "upper|lower|core|back"
}
```
3. Ensure muscle groups match existing color definitions
4. Test the exercise appears and highlights correctly

## 📦 Dependencies

Only add dependencies if absolutely necessary:
- Explain why the dependency is needed
- Check bundle size impact
- Prefer lightweight alternatives
- Update package.json and lock file

## 🔍 Code Review

All submissions require review. We'll check for:
- Code quality and style
- Test coverage
- Documentation
- Performance impact
- Breaking changes

## 📧 Contact

Questions? Reach out to:
- Email: jeanty.herby@gmail.com
- GitHub: @HerbyJ3

Thank you for contributing! 💪
