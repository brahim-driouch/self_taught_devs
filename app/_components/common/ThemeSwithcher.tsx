import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeSwithcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      The current theme is: {theme}
      <FiSun onClick={() => setTheme('light')}/>
      <FiMoon onClick={() => setTheme('dark')}/>
    </div>
  )
}

export default ThemeSwithcher