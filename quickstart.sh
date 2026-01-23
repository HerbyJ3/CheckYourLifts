#!/bin/bash

# CheckYourLifts Quick Start Script
# This script helps you get started with the CheckYourLifts application

echo "🏋️ CheckYourLifts - Quick Start Script"
echo "========================================"
echo ""

# Check Node.js version
echo "Checking Node.js version..."
NODE_VERSION=$(node -v 2>/dev/null)

if [ $? -eq 0 ]; then
    echo "✓ Node.js detected: $NODE_VERSION"
    
    # Extract major version
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
    
    if [ "$MAJOR_VERSION" -lt 18 ]; then
        echo "⚠️  WARNING: Node.js version $NODE_VERSION is too old!"
        echo "   This project requires Node.js 18 or higher."
        echo ""
        echo "To update Node.js, run:"
        echo "  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
        echo "  sudo apt-get install -y nodejs"
        echo ""
        read -p "Do you want to continue anyway? (y/N) " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    else
        echo "✓ Node.js version is compatible"
    fi
else
    echo "✗ Node.js is not installed!"
    echo ""
    echo "Please install Node.js 18+ first:"
    echo "  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
    echo "  sudo apt-get install -y nodejs"
    exit 1
fi

echo ""
echo "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed successfully"
else
    echo "✗ Failed to install dependencies"
    exit 1
fi

echo ""
echo "========================================"
echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Or run this script with 'start' argument:"
echo "  ./quickstart.sh start"
echo ""

# If 'start' argument is provided, start the dev server
if [ "$1" == "start" ]; then
    echo "Starting development server..."
    npm run dev
fi
