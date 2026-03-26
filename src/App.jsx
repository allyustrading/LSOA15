import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ApproachPage from './pages/ApproachPage'
import PathwaysPage from './pages/PathwaysPage'
import ResearchPage from './pages/ResearchPage'
import CommunityPage from './pages/CommunityPage'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'

function useHashRoute() {
  const getRoute = () => window.location.hash.replace('#/', '') || 'home'
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    if (!window.location.hash) window.location.hash = '#/home'
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export default function App() {
  const route = useHashRoute()

  const CurrentPage = useMemo(() => {
    switch (route) {
      case 'home': return HomePage
      case 'about': return AboutPage
      case 'approach': return ApproachPage
      case 'pathways': return PathwaysPage
      case 'research': return ResearchPage
      case 'community': return CommunityPage
      case 'support': return SupportPage
      case 'contact': return ContactPage
      default: return HomePage
    }
  }, [route])

  return (
    <div className="site">
      <SiteHeader route={route} />
      <AnimatePresence mode="wait">
        <motion.main
          key={route}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          <CurrentPage />
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </div>
  )
}
