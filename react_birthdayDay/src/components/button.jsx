

function Button({className, children}) {
    console.log(children)

  return (
    <button className={className}>{children}</button>
  )
}

export default Button;