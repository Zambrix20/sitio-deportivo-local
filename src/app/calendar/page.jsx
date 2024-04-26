export default function Calendar() {
    return <>
        <div className="flex flex-col w-full items-center justify-center bg-lime-600 rounded-lg p-5">
            <h3 className="self-start">Jornada 1</h3>
            <div className="flex justify-around w-2/3 bg-cyan-800 text-white rounded-lg">
                <div className="col1">
                    <h3>Fecha</h3>
                    <ul className="fechas">
                        <li>
                            <h4>fecha01</h4>
                        </li>
                        <li>
                            <h4>fecha02</h4>
                        </li>
                        <li>
                            <h4>fecha03</h4>
                        </li>
                        <li>
                            <h4>fecha04</h4>
                        </li>
                        <li>
                            <h4>fecha05</h4>
                        </li>
                        <li>
                            <h4>fecha06</h4>
                        </li>
                    </ul>
                </div>
                <div className="col2">
                    <h3>Horario</h3>
                    <ul className="horarios">
                        <li>
                            <h4>horario01</h4>
                        </li>
                        <li>
                            <h4>horario02</h4>
                        </li>
                        <li>
                            <h4>horario03</h4>
                        </li>
                        <li>
                            <h4>horario04</h4>
                        </li>
                        <li>
                            <h4>horario05</h4>
                        </li>
                        <li>
                            <h4>horario06</h4>
                        </li>
                    </ul>
                </div>
                <div className="col3">
                    <h3>Partido</h3>
                    <ul className="partidos">
                        <li>
                            <h4>partido01</h4>
                        </li>
                        <li>
                            <h4>partido02</h4>
                        </li>
                        <li>
                            <h4>partido03</h4>
                        </li>
                        <li>
                            <h4>partido04</h4>
                        </li>
                        <li>
                            <h4>partido05</h4>
                        </li>
                        <li>
                            <h4>partido06</h4>
                        </li>
                    </ul>
                </div>
                <div className="col4">
                    <h3>Campo</h3>
                    <ul className="campos">
                        <li>
                            <h4>campo1</h4>
                        </li>
                        <li>
                            <h4>campo2</h4>
                        </li>
                        <li>
                            <h4>campo3</h4>
                        </li>
                        <li>
                            <h4>campo4</h4>
                        </li>
                        <li>
                            <h4>campo5</h4>
                        </li>
                        <li>
                            <h4>campo6</h4>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </>
}