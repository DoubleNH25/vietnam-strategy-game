# Vietnam Strategy Game

An interactive strategy game based on Vietnamese history, focusing on the critical period from 1945-1946 during the First Indochina War.

## Features

- Historical decision-making scenarios
- Resource management challenges
- Tactical combat mini-games
- Educational content about Vietnamese history
- Immersive military-themed UI

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS with custom military theme
- Radix UI Components
- Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vietnam-strategy-game.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

This project is optimized for deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository
2. Sign up or log in to [Vercel](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect the Next.js framework
5. Keep the default settings and click "Deploy"
6. Your site will be live within minutes!

### Environment Variables

No environment variables are required for basic deployment.

### Build Command

Vercel will automatically use:
- Build Command: `next build`
- Output Directory: `.next`

## Project Structure

```
├── app/                 # Next.js 15 app directory
├── components/          # React components
├── context/             # React context providers
├── data/                # Game data and historical documents
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── styles/              # Global styles
```

## Game Components

- **Campaign Map**: Strategic overview of historical events
- **Resource Management**: Manage supplies and personnel
- **Decision Points**: Historical choices with consequences
- **Mini-games**: Interactive challenges based on historical events
- **Historical Documents**: Educational content panels

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vercel Documentation](https://vercel.com/docs)

## Historical Sources

This game is based on historical events from 1945-1946 in Vietnam, including:
- The 1945 famine in northern Vietnam
- The August Revolution of 1945
- The declaration of independence on September 2, 1945
- Diplomatic negotiations with France
- The outbreak of the First Indochina War

## License

This project is open source and available under the MIT License.