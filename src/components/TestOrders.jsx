import React from 'react'

function TestOrders() {
  return (
    
    <div className='container'>
      
      <section>
      <div>
        <h5>Tests</h5><hr />
        <div className='row my-3 p-2 align-items-center'>
          <div className='col-md-1'>Add</div>
          <div className='col-md-1'>More Test</div>
          <div className='col-md-4'>Edit Alias</div>
          <div className='col-md'>Edit</div>
          <div className='col-md'>Test Category
           <select style={{width:'180px'}}>
            <option>HLV</option>
           </select>
          </div>
        </div>
       </div>
      </section>


        <table class="table table-bordered">
          <tr style={{backgroundColor:'skyblue'}}>
              <td className='border'>Test Code</td>
              <td>Test Decoration</td>
              <td>Test Alias</td>
              <td>Status</td>
              <td>Ver</td>
          </tr>

          <tr>
            <td>ANITRUJDH</td>
            <td>Antivfppdh levlehhfij</td>
            <td>thdj</td>
            <td>Aproved</td>
            <td>1</td>
          </tr>

          <tr>
            <td>ANITRUJDH</td>
            <td>Antivfppdh levlehhfij</td>
            <td>thdj</td>
            <td>Aproved</td>
            <td>1</td>
          </tr>

          <tr>
            <td>ANITRUJDH</td>
            <td>Antivfppdh levlehhfij</td>
            <td>thdj</td>
            <td>Aproved</td>
            <td>1</td>
          </tr>

          <tr>
            <td>ANITRUJDH</td>
            <td>Antivfppdh levlehhfij</td>
            <td>thdj</td>
            <td>Aproved</td>
            <td>1</td>
          </tr>
        </table>

        <div className='p-2 mt-5'>
          <h5>Analysis </h5><hr />
          <div className='row my-3 p-2 align-items-center'>
            <div className='col-md-1'>Add</div>
            <div className='col-md-2'>Delete</div>
          </div>
          <table class="table table-bordered">
            <tr style={{backgroundColor:'skyblue'}}>
              <td>Status</td>
              <td>Analysis</td>
              <td>Analysis Alias</td>
              <td>Rounding Rule</td>
              <td>Units</td>
              <td>Result Type</td>
              <td>Reportable</td>
              <td>Second Final</td>
              <td>Report Info</td>
            </tr>

            <tr>
              <td>Active</td>
              <td>AVRAGE RESULT</td>
              <td></td>
              <td>ISO 0</td>
              <td></td>
              <td>N-NUMERIC</td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" /></td>
            </tr>

            <tr>
              <td>Active</td>
              <td>AVRAGE RESULT</td>
              <td></td>
              <td>ISO 0</td>
              <td></td>
              <td>N-NUMERIC</td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" /></td>
            </tr>
          </table>
        </div>
      </div>
  )
}

export default TestOrders
