import React from 'react'
import { useData } from '../../../services/useData';
import { AppLoading } from '../../../components/appSpiner/appLoading';

export const ViewHome = () => {
    const { data, isLoading} = useData();

  return (
    <div className='text-3xl bg-white/30'>
        <p>Home</p>
    </div>
  )
}
