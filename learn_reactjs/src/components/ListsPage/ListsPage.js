import React from 'react';

class ListsPage extends React.Component {
    render() {
        function selectAll() {
            let data = document.querySelectorAll('[id^="checkbox"]');
            // bug: onClick={selectAll} executes after render, resulting .checked return true instead of false.
            if (document.getElementById('selectAll').checked === true) {
                for (let i = 0; i < data.length; i++) {
                    data[i].checked = true;
                }
                showAction("true");
            } else {
                for (let i = 0; i < data.length; i++) {
                    data[i].checked = false;
                }
                showAction("false");
            }
        }
        function showAction(request) {
            if (request === "true") {
                document.getElementById('delete').style.display = "inline-block";
            } else if (request === "false") {
                document.getElementById('delete').style.display = "none";
            }

            if (request === "check") {
                let data = document.querySelectorAll('[id^="checkbox"]');
                // bug: onClick={selectAll} executes after render, resulting .checked return true instead of false.
                for (let i = 0; i < data.length; i++) {
                    if (data[i].checked === true) {
                        showAction("true");
                        return;
                    } else {
                        showAction("false");
                    }
                }
            }
        }
        return (
            <div className="container table-responsive mt-3">
                <h1 className="mb-3">Lists</h1>
                <button className="btn btn-primary btn-sm mb-3 mr-3">Create</button>
                <button className="btn btn-danger btn-sm mb-3 collapse" id="delete">Delete</button>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="selectAll" onClick={selectAll}/>
                                <label htmlFor="selectAll"></label>
                            </th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <input type="checkbox" id="checkbox1" onClick={() => {showAction('check')}}/>
                                <label htmlFor="checkbox1"></label>
                            </th>
                            <th scope="row">1</th>
                            <td>Jeff Bezos Long Name</td>
                            <td>jeff_bezos_long_email@gmail.com</td>
                        </tr>
                        <tr>
                            <th>
                                <input type="checkbox" id="checkbox2" onClick={() => {showAction('check')}}/>
                                <label htmlFor="checkbox2"></label>
                            </th>
                            <th scope="row">2</th>
                            <td>Jeff Bezos Long Name</td>
                            <td>jeff_bezos_long_email@gmail.com</td>
                        </tr>
                        <tr>
                            <th>
                                <input type="checkbox" id="checkbox3" onClick={() => {showAction('check')}}/>
                                <label htmlFor="checkbox3"></label>
                            </th>
                            <th scope="row">3</th>
                            <td>Jeff Bezos Long Name</td>
                            <td>jeff_bezos_long_email@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListsPage;