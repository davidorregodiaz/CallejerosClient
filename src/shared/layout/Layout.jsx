import {Navbar} from './Navbar.jsx';
import {Footer} from './Footer.jsx';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="font-display bg-white dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <Navbar />
      
              <main className="grow">
                <Outlet/>
              </main>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
