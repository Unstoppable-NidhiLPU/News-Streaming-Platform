import React from 'react'
import loader from './loader.gif'
const PreLoader=()=> {

    return (
      <div className='text-center'>
        <img src={loader} alt="Loader" style={{width: '35px', height: '35px'}} />
      </div>
    )
  
}

export default PreLoader;