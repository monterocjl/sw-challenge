import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Layout = () => {
  return (
    <div className='bg-main-bg text-white min-h-screen'>
      <div className='flex flex-col min-h-screen'>
        <header className='max-w-[1440px] mx-auto w-full px-6 md:px-10 py-6 md:py-11'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='text-xl font-roboto-black'>
              MANOSOS SPA
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex gap-24 font-roboto-bold text-lg'>
              <Link to='/people' className='hover:text-red-750'>
                People
              </Link>
              <Link to='/planets' className='hover:text-red-750'>
                Planets
              </Link>
              <Link to='/starships' className='hover:text-red-750'>
                Starships
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className='md:hidden'>
                <Menu className='h-7 w-7' />
              </SheetTrigger>
              <SheetContent
                side='right'
                className='bg-main-bg text-white font-roboto-bold text-lg'
              >
                <nav className='flex flex-col space-y-4'>
                  <Link to='/people' className='text-lg hover:text-gray-300'>
                    People
                  </Link>
                  <Link to='/planets' className='text-lg hover:text-gray-300'>
                    Planets
                  </Link>
                  <Link to='/starships' className='text-lg hover:text-gray-300'>
                    Starships
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <main className='max-w-[1440px] mx-auto w-full flex-grow px-6 md:px-10 '>
          <Outlet />
        </main>

        <footer className='bg-blue-950 py-4 md:py-6 text-center text-xs md:text-sm text-gray-500 font-roboto-bold'>
          <p>© 2024 - MANOSOS SPA</p>
        </footer>
      </div>
    </div>
  );
};
