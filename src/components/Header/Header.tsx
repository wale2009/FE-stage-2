import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-primary">
      <div className="container flex flex-col sm:flex-row justify-between py-5 items-center max-w-screen-2xl mx-auto px-4">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="flex justify-between items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                className="rounded-2xl w-[141px] h-[48px]"
                src="/logo.png"
                alt="logo"
                width={141}
                height={48}
              />
            </Link>
            <div className="flex sm:hidden items-center gap-x-3">
              <div className="bg-secondary p-2 rounded">
                <LuUserSquare2 className="text-white w-6 h-6" />
              </div>
              <Link href="/carts" className="bg-secondary p-2 rounded">
                <FaShoppingCart className="text-white w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto sm:flex-1 sm:justify-center">
          <div className="relative flex-grow sm:flex-grow-0">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CiSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              name="product"
              id="product"
              placeholder="Search product and categories"
              className="w-full sm:w-[350px] rounded-xl px-10 py-2.5"
            />
          </div>
          <div className="hidden sm:block bg-secondary rounded-xl px-6 py-2">
            <button className="text-white">Search</button>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-x-3">
          <div className="bg-secondary p-2 rounded">
            <LuUserSquare2 className="text-white w-6 h-6" />
          </div>
          <Link href="/carts" className="bg-secondary p-2 rounded">
            <FaShoppingCart className="text-white w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
