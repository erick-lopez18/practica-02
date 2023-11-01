import { Button, Table } from "react-bootstrap";
import PropTypes from "prop-types";


const Courses = (props) => {
    const { defaultProps } = Courses;
    
    console.log(defaultProps)
    console.log(props.materias)

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
                                <td><Button
                                        disabled={props.buscar(mat) || props.nulo(mat)}
                                        onClick={() => props.agregar(mat)}
                                        variant="success">
                                        +
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

Courses.propTypes = {
    materias: PropTypes.arrayOf(
        PropTypes.shape({
            clave: PropTypes.string.isRequired,
            materia: PropTypes.string.isRequired,
            hora: PropTypes.string.isRequired,
            grupo: PropTypes.string.isRequired,
        })
    ),
};

Courses.defaultProps = {
    materias: [
        { clave: "N/A", materia: "No hay materias disponibles", hora: "N/A", grupo: "N/A" }
    ],
}

export default Courses;
