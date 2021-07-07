import React from 'react';

function TransferList({transfers, approveTransfer}) {
  return (
    <div className="container rounded-3">
      <h2 className="text-center">Transfers</h2>
      <table className="table table-striped transfers table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>amount</th>
            <th>to</th>
            <th>approved</th>
            <th>approvals</th>
            <th>sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td className="id">{transfer.id}</td>
              <td className="amount">{transfer.amount}</td>
              <td className="to">{transfer.to}</td>
              <td className="id"> 
                {transfer.approvals} 
                </td>
                <td className="approvals"> 
                <button className="btn btn-light" onClick={() => approveTransfer(transfer.id)}>Approve</button>
              </td>
              <td className="sent">{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}

export default TransferList;
