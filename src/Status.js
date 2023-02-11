import React from 'react'
import {Icon} from 'react-icons-kit'
import {trashO} from 'react-icons-kit/fa/trashO'

export const Status = ({books,deleteBook}) => {
    
    return books.map(item=>(
        
        <tr key={item.isbn}>
            <td>{item.isbn}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td className='delete-btn' onClick={()=>deleteBook(item.isbn)}>
                <Icon icon={trashO}/>
            </td>           
        </tr>            
    
))
}