import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '/vite.svg'

export const AppHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menu = [
        // {id: 0, name:"Home", link:"/"},
        {id: 0, name:"Escritorio", link:"/escritorio"},
        {id: 1, name:"Pie", link:"/pie"},
        {id: 2, name:"Techo", link:"/techo"},
        {id: 3, name:"Pared", link:"/pared"},
        {id: 4, name:"Contacto", link:"/contacto"},
    ]

     return (
    <>
      <header className="bg-[#402915]">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
  <div className="flex h-16 items-center justify-between md:text-center">  
      <div className="md:flex md:items-center  md:gap-16">
        <Link  to="/" className="flex items-center  gap-2" >
          <img src={icon}  alt="configuracion" className="h-8 w-auto bg-[#fff] rounded-full"  />
          <h1 className="text-[#F2CEA2] transition text-lg font-medium hover:text-[#638C95] ">Lamparas </h1>
        </Link>
      </div>

      <div className='hidden md:block'>
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            {menu.map((item) => (
            <li key={item.id}>
              <Link className="text-[#F2CEA2] transition text-lg font-medium hover:text-[#638C95]  focus:bg-[#000] p-2 rounded-lg" to={item.link}> {item.name} </Link>
            </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-white transition hover:text-gray-600/75" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  {isOpen && (
  <div className="md:hidden">
    <nav >
      <ul className="flex flex-col items-center mt-4 text-sm">
        {menu.map((item) => (
          <li key={item.id}
            className='w-full text-center'>
            <Link
              className="text-white transition hover:text-gray-500/75 block py-2  "
              to={item.link}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)}
</header>
    </>
  )
}
