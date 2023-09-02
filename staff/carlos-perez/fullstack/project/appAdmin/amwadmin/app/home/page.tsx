import { Footer, NavBar} from '@/components'
import useStorage from '@/hooks/useStorage';

export default function Home() {
  const { getItem } = useStorage();
  const isAuth = getItem('token');

  return (
    <div className='grid grid-cols-1 max-w-[1440px] w-full mx-auto justify-center'>
      <NavBar />
      <p>{`Este es isAuth ${getItem('token', 'session')}`}</p>
      <Footer />
    </div>
  )
}