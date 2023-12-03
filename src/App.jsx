import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
let clas={
  name:"sneh",
  roll:"btech10514"
}
const arr=[1,23,4]

function App() {
  const [count, setCount] = useState(0)
  const [col,setC]=useState("grey");
  
  return (
    <div style={{backgroundColor:col}}>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'  >Tail Wind Check</h1>
    <Card setC name="sneh" kyc={clas} />
    
    </div>
//     <>
//       <h1 className='bg-green-400 text-black p-4 rounded-xl'  >Tail Wind Check</h1>
//       <figure class="bg-slate-100  p-8 dark:bg-slate-800">
//   <img class="w-24 h-24  mx-auto" src="https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="3840px " height="512rem"/>
//   <div class="pt-6 space-y-4">
//     <blockquote>
//       <p class="text-lg font-medium">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. It’s easy to customize, adapts to any design,
//         and the build size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div>
//         Sarah Dayan
//       </div>
//       <div>
//         Staff Engineer, Algolia
//       </div>
//     </figcaption>
//   </div>
// </figure>
//     </>
  )
}

export default App
