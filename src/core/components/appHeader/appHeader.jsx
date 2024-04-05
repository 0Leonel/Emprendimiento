import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '/vite.svg';

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openLamparas, setOpenLamparas] = useState(false);
  const menu = [
    { id: 1, name: "Cosas", link: "/cosas" },
    { id: 0, name: "Lamparas", link: "" },
    // { id: 4, name: "Contacto", link: "/contacto" },
  ];

  const lamparas = [
    { id: 0, name: "Escritorio", link: "/escritorio" },
    { id: 1, name: "Pie", link: "/pie" },
    { id: 2, name: "Techo", link: "/techo" },
  ];

  return (
    <>
      <header className="bg-[#734C29]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:text-center">
            <div className="md:flex md:items-center md:gap-16">
              <Link to="/" className="flex items-center gap-2">
                <img src={icon} alt="configuracion" className="h-8 w-auto" />
                {/* <h1 className="text-[#F2CEA2] transition text-lg font-medium hover:text-[#143841] "> </h1> */}
              </Link>
            </div>
            <div className='hidden md:block'>
              <nav aria-label="Global">
                <ul className="flex items-center  gap-6 text-sm">
                  {menu.map((item) => (
                    <li key={item.id}>
                      {item.link ? (
                        <Link className="text-[#F2CEA2] transition text-lg font-medium hover:text-[#143841]   p-2 rounded-lg" to={item.link}>{item.name}</Link>
                      ) : (
                        <button className="text-[#F2CEA2] transition text-lg font-medium hover:text-[#143841]   p-2 rounded-lg" onClick={() => setOpenLamparas(!openLamparas)}>
                          {item.name}
                        </button>
                      )}
                      {item.name === "Lamparas" && openLamparas && (
                        <ul className="mt-2 space-y-4 px-4 absolute top-16  z-50">
                          {lamparas.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.link}
                              className="bg-[#734C29] z-10 px-4 py-2 text-[#F2CEA2] transition text-lg font-medium hover:text-[#638C95] focus:bg-[#000] p-2 rounded-lg flex items-start"
                              onClick={() => setOpenLamparas(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-[#143841] p-2 text-white transition hover:text-gray-600/75" onClick={() => setIsOpen(!isOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#A67449"
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
  <nav>
    <ul className="flex flex-col items-center mt-4 text-sm">
      {menu.map((item) => (
        <li key={item.id} className="p-2 w-full">
          {item.link ? (
            <Link 
            className='text-[#F2CEA2] transition text-lg font-medium  p-2 rounded-lg w-full text-center bg-[#A67449] flex justify-center' 
            to={item.link}
          >
            {item.name}
          </Link>
          
          ) : (
            <button className="bg-[#A67449] text-[#F2CEA2] transition text-lg font-medium  p-2 rounded-lg w-full" onClick={() => setOpenLamparas(!openLamparas)}>
              {item.name}
            </button>
          )}
          {item.name === "Lamparas" && openLamparas && (
            <ul className="space-y-2 bg-[] rounded-lg mt-2 w-full">
              {lamparas.map((subItem) => (
                <li key={subItem.id} className="px-2 py-2">
                  <Link
                    to={subItem.link}
                    className="bg-[#F2CEA2] px-2 py-2 text-[402915] transition text-lg font-medium hover:text-[#143841] p-2 rounded-lg block text-center"
                    onClick={() => setOpenLamparas(false)}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
