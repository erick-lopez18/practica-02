import { Button, Table } from "react-bootstrap";


const Schedule = (props) => {
    return ( 
        <div>
            <h5>Mi horario: {props.total} materias</h5>
            {
                props.horario.length === 0
                    ?
                    <h3 className="Table-empty">No hay horario asignado</h3>
                    :
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
                                props.horario.map((mat, clave, original) =>
                                    <tr key={clave}>
                                        <td>{mat.clave}</td>
                                        <td>{mat.materia}</td>
                                        <td>{mat.hora}</td>
                                        <td>{mat.grupo}</td>
                                        <td><Button onClick={() => props.eliminar(mat, clave)} variant="danger">-</Button></td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </Table>
            }
        </div>
    ); 
}
 
export default Schedule;
