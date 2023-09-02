import { Footer, NavBar, Login } from '@/components'
import useStorage from '@/hooks/useStorage';

export default function Home() {
  const { getItem } = useStorage();
  const isAuth = getItem('token','session');
  console.log('Este es isAuth ' + isAuth);

  return (
    <div className='grid grid-cols-1 max-w-[1440px] w-full mx-auto justify-center'>
      <NavBar />
      <Login />
      <Footer />
    </div>
  )
}
