const todos = [
  'HTML',
  'CSS',
  'JS',
  'PHP',
  'NextJS',
]

function App() {

  const handleClick = () => {
    alert('tu as cliqué sur le bouton')
  }

  return (
    <>
      <Title>Bonjour tout le monde</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Reiciendis hic suscipit modi quae veritatis velit molestias 
        dicta saepe aliquid possimus illum, sequi, 
        necessitatibus delectus aspernatur alias eum numquam est et.
      </p>

      <ul>
        {todos.map(todo => <li key={todo}>{todo}</li>)}
      </ul>

      <button onClick={handleClick}>Clique ici</button>
    </>
  )
}

const style = {
  color: 'red',
  textAlign: 'center'
}

const props = {
  id: 'title',
  className: 'title'
}

function Title ({children}) {
    return (
      <h1 style={style} {...props}>{children}</h1>
    )
}

export default App
