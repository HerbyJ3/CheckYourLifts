# Setup Instructions

## Node.js Version Requirement

This project requires Node.js version 18 or higher. Your current version is v12.22.9.

### Updating Node.js on Ubuntu/Linux

#### Option 1: Using NodeSource (Recommended)

```bash
# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

#### Option 2: Using NVM (Node Version Manager)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc

# Install Node.js 20
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node --version
```

### After Updating Node.js

1. Navigate to the project directory:
```bash
cd /home/ubuntuls/LC/CheckYourLifts
```

2. Remove existing node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to http://localhost:3000

## Quick Start (After Node.js Update)

```bash
cd /home/ubuntuls/LC/CheckYourLifts
npm install
npm run dev
```

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
sudo lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

### Permission errors
```bash
# Fix npm permissions
sudo chown -R $USER:$USER ~/.npm
sudo chown -R $USER:$USER node_modules
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## Development Workflow

1. Make changes to files in `src/`
2. Vite will auto-reload the browser
3. Check console for errors
4. Test responsiveness (resize browser)
5. Build for production: `npm run build`
6. Preview production build: `npm run preview`

## Next Steps

After getting the app running:
1. Explore the codebase in `src/`
2. Try adding new exercises to `src/exerciseData.js`
3. Customize colors and styling
4. Read the [Development Guide](../DEVELOPMENT_GUIDE_1.md) for mobile conversion
5. Check out the [Roadmap](ROADMAP.md) for planned features

## Need Help?

- Check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines
- Open an issue on GitHub
- Email: jeanty.herby@gmail.com
