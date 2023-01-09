import React from 'react'
import {TableRow, TableCell, Modal} from '@material-ui/core';

const TotalList = ({viewContent,show,handleOpen,open,handleClose,newImg}) => {
  return (
    viewContent.map((item,idx)=>{
      return(
        <TableRow hover role="checkbox">
          <TableCell key={item.No}>{idx+1}</TableCell>
          <TableCell><a href={`https://steamcommunity.com/app/${item.url_parameter}`} rel="noreferrer" target="_blank">{item.Nickname}</a></TableCell>
          <TableCell>{item.type}</TableCell>
          <TableCell>{item.occurDate}</TableCell>
          <TableCell>
            <button className="modalBtn" type="button" onClick={()=>handleOpen(item.image)}>
              <img className="contentImg" src={item.image} alt=""/>
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <img className="modalImg" src={newImg} alt=""/>
            </Modal>
          </TableCell>
          {!show&&(
          <TableCell>{item.parameter}</TableCell>
          )}
        </TableRow>
      )
    }).reverse()
  )
}

export default TotalList