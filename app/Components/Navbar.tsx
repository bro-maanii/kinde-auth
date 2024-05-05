
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-zinc-900 shadow-sm">
      
        <a className="font-bold text-2xl">blitz-auth-starter</a>
      
      <div className="flex items-center space-x-4">
      <RegisterLink>
          <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-emerald-200 dark:hover:bg-gradient-to-tl dark:focus:ring-teal-700">
            Sign up
          </button>
          </RegisterLink>
        
          <LoginLink>
          <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-violet-200 dark:hover:bg-gradient-to-tl dark:focus:ring-purple-700">
            Log in
          </button>
          </LoginLink>
        
      </div>
    </nav>
  )
}
