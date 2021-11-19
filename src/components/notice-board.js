import React from 'react'
import {Table} from 'react-bootstrap'
import {noticeTitleContainer, tableContainer, boardTitle} from './notice-board.module.css'


export default function NoticeBoard() {
    return (
        <div>
            <div className={noticeTitleContainer}>
                    <span className={boardTitle}>Public Notice</span>
            </div>
            <div className={tableContainer}>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                </Table>
            </div>
            
        </div>
    )
}
