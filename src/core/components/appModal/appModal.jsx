import { Link, useParams } from 'react-router-dom'
import { AppLoading } from '../appSpiner/appLoading'
import { useData } from '../../services/useData';
import { AppCarousel } from '../appCarousel/appCarousel';

export const AppModal =(props)=> {
  const idLamp = useParams();
  const {category} = props
  const {data, isLoading} = useData()
  const item = data[category]?.data[parseInt(idLamp.id, 10)];
  return (
    <div>
     {isLoading ? 
    <div className='flex fixed inset-0 items-center justify-center z-50'>
    <div className='absolute inset-0 bg-black opacity-25'></div>
    <div className='flex items-center justify-center'>
      <AppLoading/> 
    </div>
  </div>
     :<>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-md  lg:max-w-6xl " >
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#402915] max-w-6xl outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 bg-opacity-30 bg-[#23160B] border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl lg:text-4xl font-semibold text-[#BCBCBC]">{item?.titulo}</h3>
              
            </div>
            {/*body*/}
            <div className="relative flex-auto px-2" >
              <div className='grid lg:grid-cols-2'>
              <AppCarousel imagenN1={item?.imagenN1} imagenN2={item?.imagenN2} imagenN3={item?.imagenN3}/>
              {/* <img src={item?.imagenN1} alt={item?.titulo} className='w-full h-full rounded-lg' /> */}
              <p className="my-4 text-justify text-[#BCBCBC] text-lg lg:text-xl leading-relaxed p-2 ">
              {item?.descripcion ?? "Instrucciones no disponibles"}
                </p>                
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-2 bg-opacity-30 bg-[#23160B] border-solid border-blueGray-200 rounded-b">
              <Link
                className="text-[#D1C5B8] opacity-50 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                to="../"
              >
                Cancelar
              </Link>
              <Link
                className="bg-[#7D939D] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                to="/contacto"
                >
               Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    }
        </div>
  )
}
