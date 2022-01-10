import classNames from "classnames"
import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const className = "font-bold"
const variants = {
  primary: (theme) => `bg-${theme.colors.primary}`,
  secondary: (theme) => `text-${theme.colors.primary}`,
}
const sizes = {
  sm: "py-1 px-1.5 text-xs",
  md: "py-1.5 px-3 text-md",
  lg: "py-2.5 px-5 text-lg",
}

const Button = (props) => {
  const { variant = "primary", size = "md", ...otherProps } = props
  const { theme } = useContext(ThemeContext)

  return (
    <button
      {...otherProps}
      className={classNames(className, variants[variant](theme), sizes[size])}
    />
  )
}

export default Button
