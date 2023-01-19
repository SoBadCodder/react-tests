import classes from './List.module.css'

const List = (props) => {
  const {items = []} = props

  if(!items.length) {
    return null
  }

  return (
    <ul className={classes.container}>
      {items.map(el => (
        <li className={classes.items} key={el}>{el}</li>
      ))}
    </ul>
  )
}

export default List