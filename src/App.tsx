import './App.css'
import {menu} from '../menu.json'

function App() {
  console.log(menu)

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <>{menu.map((section, index) => {
      const key = Object.keys(section)[0];
      const items = (section as unknown as { [key: string]: string[] })[key]; // Add index signature to type declaration
      return (
        <div key={index}>
          <h1>{key}</h1>
          {items.map((item, subIndex) => (
            <p key={subIndex}>{item}</p>
          ))}
        </div>
      );
    })}
    </>
  )
}

export default App
