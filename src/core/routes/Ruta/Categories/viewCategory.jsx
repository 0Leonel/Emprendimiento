import { useData } from '../../../services/useData';
import { Outlet } from 'react-router-dom';
import { AppCard } from '../../../components/appCards/appCard';
import { AppLoading } from '../../../components/appSpiner/appLoading';

export const ViewCategory = (props) => {
    const {data, isLoading} = useData();
    const {category} = props;
    return (
      <div>
      {isLoading ? <AppLoading/> : <>
       
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] justify-items-center gap-12 pt-3'>
            <AppCard  data={data[category]?.data}/>
      </div>
      <Outlet/>
      </>
      }
      </div>
    )
  }
  