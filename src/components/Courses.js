import { Button, Table } from "react-bootstrap";


const Courses = (props) => {
    return ( 
        <div>
            <h5>Materias</h5>
            <Table className="Table" striped bordered hover>
                <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Materia</th>
                        <th>Hora</th>
                        <th>Grupo</th>
                        <th>🔘</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.materias.map((mat, clave, original) =>
                            <tr key={clave}>
                                <td>{mat.clave}</td>
                                <td>{mat.materia}</td>
                                <td>{mat.hora}</td>
                                <td>{mat.grupo}</td>                                
                                <td><Button disabled={props.buscar(mat)} onClick={() => props.agregar(mat)} variant="success">+</Button></td>
                            </tr>

                        )
                    }

                </tbody>
            </Table>
        </div>
    ); 
}
 
export default Courses;
