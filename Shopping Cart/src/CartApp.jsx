export const CartApp = () => {
    return (
        <>
            <div className="container">
                <h1>CartApp</h1>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tarjeta de carga New Lan</h5>
                                <p className="card-text"> Tarjeta de carga de 400V </p>
                                <p className="card-tect">$500</p>
                                <buttom className="btn btn-primary" >Agregar</buttom>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bateria de terminal New Land</h5>
                                <p className="card-text"> Bateria par terminal New Land de 20v</p>
                                <p className="card-tect">$1700</p>
                                <buttom className="btn btn-primary" >Agregar</buttom>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tarjeta madre New Land</h5>
                                <p className="card-text"> Tarjeta madre New land con android 11</p>
                                <p className="card-tect">$5000</p>
                                <buttom className="btn btn-primary" >Agregar</buttom>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pantalla LCD New Land</h5>
                                <p className="card-text"> Pantalla LCD de alta resistencia</p>
                                <p className="card-tect">$2500</p>
                                <buttom className="btn btn-primary" >Agregar</buttom>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Botonera terminal New Land</h5>
                                <p className="card-text"> TBotonera de terminal New Land de uso rudo</p>
                                <p className="card-tect">$300</p>
                                <buttom className="btn btn-primary" >Agregar</buttom>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Carcasa terminal New Land</h5>
                                <p className="card-text"> Carcasa terminal New Land de uso rudo</p>
                                <p className="card-tect">$3000</p>
                                <buttom className="btn btn-primary" >Agregar</buttom>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 w-50">
                    <h3>Carro de compra</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cntidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td>Total</td>
                                <td>Eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2"className="text-end fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}