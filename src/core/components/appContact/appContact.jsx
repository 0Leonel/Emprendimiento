import React from 'react'

export const AppContact = () => {
  return (
    <>
        
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 items-center flex justify-center min-h-screen">
    <div className="w-full max-w-4xl ">
      
      <div className="rounded-lg bg-[#A67449] p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Nombre</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nombre"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Correo electrónico"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Celular</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Celular"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Mensaje</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Mensaje"
              rows="12"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
             Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
