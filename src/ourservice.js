
import wash from './image/wash.png';
import cleaning from './image/cleaning.png';
import dry from './image/dry.png';
import fold from './image/fold.png';
import iron from './image/iron.png';





export let Our=()=>{
    return(
        <>
        <h2 className="ourheadline">Our Services</h2>
        <div className="our">
        <Ourservice title="Wash" back={wash}/>
        <Ourservice title="Fold" back={fold}/>
        <Ourservice title="Iron" back={iron}/>
        <Ourservice title="Dry" back={dry}/>
        <Ourservice title="Cleaning" back={cleaning}/>
         </div>
        </>
    )
}

let Ourservice=(props)=>{
    return(
        <>
          <div className="ourservice">
              <img src={props.back} alt="hghg" className="ourservice_image"/>
              <h6>{props.title}</h6>

          </div>
        </>
    )
}