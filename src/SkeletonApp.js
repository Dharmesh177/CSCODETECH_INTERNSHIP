import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./skeletonApp.css";
import ContentLoader from 'react-content-loader';

function SkeletonApp() {

    
    return (
        <SkeletonTheme  baseColor="#ddd6d6" highlightColor="#cbcacafc" enableAnimation={true} duration={2} width={355} height={36} >
          <div className='ske'>
          <div classname='ccc'>
           <div className="threeLine">
           <div>
           <h1>
                <Skeleton className=""  width={497} height={65} />
            </h1> 
           <h1>
                <Skeleton className=""  width={437} height={43} />
            </h1> 
           <h1>
                <Skeleton className=""  width={395} height={43} />
            </h1> 
            </div>
            </div>
            <div className="fiveLine">
            <h4>
            <Skeleton className="" count={5} width={651} height={17}  />
            </h4>
           </div>
           </div>
          
           <div>
           <ContentLoader
           className='imgg'
      viewBox="0 0 500 500"
      height={550}
      width={550}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"      
     
    >
      <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
      <ellipse cx="120" cy="140" rx="28" ry="28" />
    </ContentLoader>
           </div>
           </div>
        </SkeletonTheme>
    )
}

export default SkeletonApp