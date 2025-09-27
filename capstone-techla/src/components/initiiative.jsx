import React from 'react'
import monitoring from '../assets/monitoring.png'
import insights from '../assets/insight.png'
import ai from '../assets/AI.png'
import digitalization from '../assets/digitalization.png'
import database from '../assets/database-storage.png'


function Initiiative() {
  return (
    <>
        <div className='h-fit bg-[#E1E6F3] pt-[30px] pb-[60px] px-[80px] flex flex-col gap-[20px]'>
            <div>
                <h1 className='text-[18px] text-center font-medium text-[#007BFF]'>
                    Household Registry Consists of Several Key Components and Initiatives
                </h1>
            </div>
            <div className='h-auto flex justify-evenly items-center gap-[107px] mt-[20px] flex-wrap'>
                <div className='h-[120px] w-[170px] flex flex-col gap-[10px]'>
                    <div>
                        <img src={monitoring} className='h-[90px] w-[90px] m-auto'
                        alt="" />
                    </div>
                    <div>
                        <h2 className='text-[18px] font-medium text-center text-[#007BFF]'>
                            MONITORING AND 
                            EVALUATION
                        </h2>
                    </div>
                </div>
                <div className='h-[120px] w-[170px] flex flex-col gap-[10px]'>
                    <div>
                        <img src={insights} className='h-[90px] w-[90px] m-auto'
                        alt="" />
                    </div>
                    <div>
                        <h2 className='text-[18px] font-medium text-center text-[#007BFF]'>
                            INSIGHTS
                        </h2>
                    </div>
                </div>
                <div className='h-[120px] w-[170px] flex flex-col gap-[10px]'>
                    <div>
                        <img src={ai} className='h-[90px] w-[90px] m-auto'
                        alt="" />
                    </div>
                    <div>
                        <h2 className='text-[18px] font-medium text-center text-[#007BFF]'>
                            AI INTEGRATION
                        </h2>
                    </div>
                </div>
                <div className='h-[120px] w-[170px] flex flex-col gap-[10px]'>
                    <div>
                        <img src={digitalization} className='h-[90px] w-[90px] m-auto'
                        alt="" />
                    </div>
                    <div>
                        <h2 className='text-[18px] font-medium text-center text-[#007BFF]'>
                            DIGITALIZATION
                        </h2>
                    </div>
                </div>
                <div className='h-[120px] w-[170px] flex flex-col gap-[10px]'>
                    <div>
                        <img src={database} className='h-[90px] w-[90px] m-auto'
                        alt="" />
                    </div>
                    <div>
                        <h2 className='text-[18px] font-medium text-center text-[#007BFF]'>
                            DATABSE
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Initiiative