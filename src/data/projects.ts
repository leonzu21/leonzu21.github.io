import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'steam-mordecai',
    title: 'Steam Mordecai',
    description: 'CS2 market opportunity finder that identifies undervalued skins using real-time pricing data, historical trends, and backtesting.',
    longDescription:
      'Analyzes thousands of CS2 skin listings to surface profitable buy/sell opportunities. Features a real-time dashboard, item deep-dives with price history charts, configurable alerts, and a backtesting engine to validate strategies against historical data.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Steam API', 'Tailwind CSS', 'Recharts'],
    images: [
      { src: '/projects/steam-mordecai/dashboard.png', alt: 'Dashboard overview with market opportunities' },
      { src: '/projects/steam-mordecai/items.png', alt: 'Items list with filtering and sorting' },
      { src: '/projects/steam-mordecai/alerts.png', alt: 'Price alert configuration' },
      { src: '/projects/steam-mordecai/backtest.png', alt: 'Backtesting engine results' },
    ],
    links: [
      { label: 'Live Site', url: 'https://steam-mordecai.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/leonzu21/steam-mordecai' },
    ],
    featured: true,
  },
]
