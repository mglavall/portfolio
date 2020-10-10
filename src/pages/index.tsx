
import dynamic from 'next/dynamic'
const Hydra = dynamic(
  () => import('../containers/Hydra'),
  { ssr: false }
)

function HomePage() {



    return <div><Hydra width="1000" height="200"></Hydra></div>
  }
  
  export default HomePage