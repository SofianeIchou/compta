import { useCallback, useContext } from "react"
import Button from "./Button"
import ThemeContext from "./ThemeContext"
import lightTheme, { darkTheme } from "../js/theme"

export const SwitchThemeButton = () => {
  const { setTheme, theme } = useContext(ThemeContext)
  const handleClick = useCallback(() => {
    setTheme(theme.name === "light" ? darkTheme : lightTheme)
  }, [setTheme, theme])

  return <Button onClick={handleClick}>Switch</Button>
}
