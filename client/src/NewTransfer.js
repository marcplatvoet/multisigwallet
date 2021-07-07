import React, { useState } from 'react';

function NewTransfer({createTransfer}) {
  const [transfer, setTransfer] = useState(undefined);

  const submit = e => {
    e.preventDefault();
    createTransfer(transfer);
  }

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({...transfer, [field]: value});
  }

  return (
    <div className="container rounded-3">
      <h2 className="text-center">Create transfer</h2>
        <form onSubmit={e => submit(e)}>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th className="col-2">label</th>
                <th className="col-6">input</th>
              </tr>
            </thead>
          <tbody>      
              <tr>
                <th >
                  <label htmlFor="amount" >Amount</label>
                </th>
                <th >
                  <input 
                  className="form-control"
                    id="amount"
                    type="text" 
                    onChange={e => updateTransfer(e, 'amount')} 
                  />
                </th>
              </tr>
              <tr>
                <td>
                  <label htmlFor="to">To</label>
                </td>
                <td>
                  <input 
                  className="form-control"
                    id="to"
                    type="text" 
                    onChange={e => updateTransfer(e, 'to')} 
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-light">Submit</button>
        </form>
    <br />
    </div>

      
      
      

    
  );
}

export default NewTransfer;
