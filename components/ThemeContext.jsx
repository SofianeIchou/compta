import { createContext, useState } from "react"
import defaultTheme from "../js/theme"

const ThemeContext = createContext({})

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(defaultTheme)

  return <ThemeContext.Provider {...props} value={{ theme, setTheme }} />
}

export default ThemeContext
