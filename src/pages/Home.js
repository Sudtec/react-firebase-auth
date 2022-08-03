import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { db as firebaseDB} from '../firebase';
import { toast } from 'react-toastify';
import './Home.css'
const Home = () => {
    const [data, setData] = useState({});

    useEffect(() =>{
        firebaseDB.child('contacts').on('value', (snapshot) =>{
            if( snapshot.val() !== null){
                console.log(snapshot.val(), 'Snapshot value');
                setData({...snapshot.val()})
            }else{
                setData({})
            }

        })
        return () => {
            setData({})
        }
    }, [])
    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this item?')){
            firebaseDB.child(`contacts/${id}`).remove((err)=> {
                if(err){
                    toast.error(err);
                }else{
                    toast.success('Contact deleted successfully')
                }
            })
        }
    }
    console.log(data,'data');
    console.log(Object.keys(data));
    
    return (
        <div style={{marginTop: '100px'}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>No.</th>
                        <th style={{textAlign: 'center'}}>Name</th>
                        <th style={{textAlign: 'center'}}>Email</th>
                        <th style={{textAlign: 'center'}}>Contact</th>
                        <th style={{textAlign: 'center'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     Object.keys(data).map((id, index) => {
                         


                         return (
                              <tr key={id}>
                                <th scope='row'>{index+1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <button className='bttn btn-edit'>
                                            Edit
                                        </button>
                                    </Link>
                                    <button className='bttn btn-delete' 
                                    onClick={()=> handleDelete(id)}
                                    >
                                        Delete
                                    </button>
                                    <Link to={`/view/${id}`}>
                                        <button className='bttn btn-view'>
                                            View
                                        </button>
                                    </Link>
                                </td>
                             </tr>
                         )
                     }) 
                     
                    

                     }
                      

                </tbody>
            </table>
        </div>
    )
}

export default Home