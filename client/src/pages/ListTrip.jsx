import React, { useState } from 'react';
import { TextFieldEditable } from '../common/FieldInput.jsx';
import NavBarComponent from '../component/NavBarComponent.jsx';


export default function ListTrip(props){
  const [nameSearch,setNameSearch] = useState();

  return <div className="container-fluid p-0">
    <NavBarComponent />
    <div className='container d-flex flex-row my-4 flex-wrap'>
      <div className='d-flex flex-column rounded p-3 sc-background-color'>
        <h3 className='text-white text-center fw-bold mt-2'>Filter for share car</h3>
        <div className='d-flex flex-row justify-content-start align-items-center my-4' style={{borderBottom:"double",paddingBottom:"5px",width:"350px",borderColor:"white"}}>
          <span className='sc-heading text-uppercase' style={{width:"150px",color:"white"}}>Name:</span>
          <TextFieldEditable fontSize={props.FONT_SIZE} width="100%" value={nameSearch} save={value=>setNameSearch(value)} placeholder="search for look up!" required={true}/>
        </div>
      </div>
    </div>
  </div>
}