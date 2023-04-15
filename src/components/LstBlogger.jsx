import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { variables } from '../Variables';

const LstBlogger = () => {

  
    const getData = async () => {
        const response = axios.get(variables.API_URL);
        return response;
     
    }

    const [email_error, setemail_error] = useState('');


    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})

    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}


    const emailValidation = (email)  => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || !regex.test(email)){
            setemail_error(  "Email is not valid");
            return false;
        }
        return true;
    }


    const validation = ({target}) => {
        var responseVal = true;

        switch(target.name){
            case 'email':  responseVal = emailValidation(target.value);
                            break; 

        }

        return responseVal;
      
    }

    const handleChangeModal = ({target}) => {


        validation({target});

        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${variables.API_URL}/${dataModal.id}`, dataModal)
        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `El registro ha sido actualizado exitosamente!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList)
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el registro!',
                'error'
            )
        }
    }

    const handleSubmitAdd = async (e) => {
        e.preventDefault();
      
        const response = await axios.post(variables.API_URL,dataModal);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro  ha sido guardado exitosamente!`,
                'success'
            ) 
            handleCloseModal();
            setUpdateList(!updateList)
        }else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
         
    }

    useEffect(() => {
        //UseEffect' Body
        getData().then((response) => {
            setList(response.data);
        })
    }, [updateList])


    const [data, setData] = useState( {
        id: "0",
        name: "",
        website: "",
        picture_url: "",
        email: "",
        friends: []
      })



    const editClick = (bgr) => {
   
        setDataModal({
            modalTitle: "Edit Blogger",
            id: bgr.id,
            name: bgr.name,
            website: bgr.website,
            picture_url: bgr.picture_url,
            email:bgr.email,
            friends: bgr.friends
        });

        setShowModal(true);
    }

    const addClick = () =>  {
        setDataModal({
            modalTitle: "Add Blogger",
            id: 0,
            name: "",
            website: "",
            picture_url: "https://as1.ftcdn.net/v2/jpg/01/09/00/64/1000_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg",
            email:"",
            friends: []
        });

        setShowModal(true);
    }


    const handleDelete = async (dataModal) => {
 

        Swal.fire({
            title: `Estás seguro de eliminar ${dataModal.name} ?`,
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                axios.delete(`${variables.API_URL}/${dataModal.id}`).then((response) => {
                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            `Se eliminó con éxito!`,
                            'success'
                        )
                        setUpdateList(!updateList)
                    }else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al elminar el registro!',
                            'error'
                        )
                    }
                })
            }
          })
    }


    return (
        <Container > 
   <button type="button"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => addClick()}>
                    Add blogger
                </button>
<table className="table table-striped">
<thead>
                        <tr>
                        <th>
                                Picture
                            </th>
                            <th>
                                Blogger Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Website
                            </th>
                            <th>
                                E-Mail
                            </th>
                          
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody> 

                      {list.map(bgr =>
                            <tr key={bgr.id}>
                                <td>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src={bgr.picture_url}
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    /> 
                                </div> 
                                </td>
                                <td>{bgr.id}</td>
                                <td>{bgr.name}</td>
                                <td>{bgr.website}</td>
                                <td>{bgr.email}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1" 
                                        onClick={() => editClick(bgr)}
                                       >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>

                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        onClick={() => handleDelete(bgr)}
                                       >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>

                                </td>
                            </tr>
                        )}  
                    </tbody>
</table>

            
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>{dataModal.modalTitle}</Modal.Title>
                </Modal.Header>
                <Form
                    onSubmit = {dataModal.id > 0 ? handleSubmit : handleSubmitAdd}
                > 
                    <Modal.Body>
                    <Form.Group className="mb-3">
                    <img src={dataModal.picture_url}  className="card-img-top image-card" />
                        </Form.Group>
  

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="name"
                                placeholder="name"
                                value={dataModal.name}
                                onChange={handleChangeModal}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Website</Form.Label>
                            <Form.Control 
                                type="text"
                                name="website"
                                placeholder="website"
                                value={dataModal.website}
                                onChange={handleChangeModal}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Picture url</Form.Label>
                            <Form.Control 
                                type="text"
                                name="picture_url"
                                placeholder="picture url"
                                value={dataModal.picture_url}
                                onChange={handleChangeModal}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>E-Mail</Form.Label>
                            <Form.Control 
                                type="text"
                                name="email"
                                placeholder="email"
                                value={dataModal.email}
                                onChange={handleChangeModal}
                                required
                            />
                            <span className="text-danger">{email_error}</span> 
                        </Form.Group>
                        {/* <Form.Group className="mb-3">
                            <select 
                                className="form-control"
                                name="trademark"
                                onChange={handleChangeModal}
                                required
                            >
                                <option value={dataModal.tradamark}>{dataModal.trademark}</option>
                                <option value="YAMAHA">YAMAHA</option>
                                <option value="SUZUKI">SUZUKI</option>
                                <option value="HONDA">HONDA</option>
                            </select>
                        </Form.Group> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
                            Cancelar
                        </button>
                        <button className="btn btn-success" type="submit">
                            Guardar
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </Container>
    )
}

export default LstBlogger
