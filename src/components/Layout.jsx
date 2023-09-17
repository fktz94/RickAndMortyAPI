import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <section className="flex-grow m-auto w-11/12">
        <Outlet />
      </section>
      <footer className="text-center text-blackColor bg-lemonColor">by fktz</footer>
    </div>
  );
}
