import { Search} from 'lucide-react'
import React from 'react'

function ResultEntry() {
  return (
  
    <div className='container'>
    
     <section>
            <div className="row align-items-center mb-4 shadow-lg bg-light">
                <div className="col-md-5 p-3" >
                  <div className="input-group rounded">
                    <input
                      type="search"
                      name="search"
                      className="form-control"
                      aria-label="Search for patient name"
                    />
                    <span className="input-group-text border-0">
                      <Search className="text-primary fs-5" />
                    </span>
                  </div>
                </div>

                <div className='col-md-2'>
                <select name="PH" className='form-select' >
                    <option >Pathology</option>
                    <option value="ph">Adwani PH Center</option>
                    <option value="ph">Sai PH Center</option>
                </select>
                </div>
                </div>
  </section>

<section>
  <div className="row p-3 shadow-lg bg-light rounded">
   <div className="col-md-2">
    Name : <strong>Shital</strong>
   </div>
   <div className="col-md-2">
    Age : <strong>25</strong>
   </div>
   <div className="col-md-2">
    Gender : <strong>Female</strong>
   </div>
   <div className="col-md-2">
   Status : <strong className='text-primary'>Ongoing</strong>
   </div>
   <div className='col-md'>
    <button type='button' className='btn btn-primary' style={{borderRadius:'0'}}>Save</button>
   </div>
   <div className='col-md'>
    <button type='button' className='btn btn-outline-primary' style={{borderRadius:'0'}}>View more</button>
   </div>
  </div>
</section>

   <section>
    <div className='row p-3  mt-4 shadow-lg bg-light rounded'>
       <table>
        <tr>
          <th>Test</th>
        <th>Observed Value</th>
        <th>Units</th>
        <th>Normal Range</th>
        </tr>

       <tr>
       <td colSpan={3}><h4>Complete Blood Count</h4></td>
       <td>
        <input type="checkbox" name="" id="" />
        Show Interpretation
       </td>
        </tr>

        <tr>
          <td><strong>Hemoglobin</strong></td>
          <td>
            <input type="checkbox" name="" id="" />
            <input type="text" /></td>
          <td>g/dl</td>
          <td>13-17</td>
        </tr>  

        <tr>
        <td><strong>Total Leucocyte Count</strong></td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" /></td>
        <td>/cumm</td>
        <td>4000-10000</td>
        </tr>    

         <tr>
        <td><strong>Different Leucocyte Count</strong></td>
         </tr>
        
        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Enter Value' />
        </td>
        <td>%</td>
        <td>40-80</td>
        </tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Enter Value' />
        </td>
        <td>%</td>
        <td>40-80</td>
        </tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Enter Value' />
        </td>
        <td>%</td>
        <td>40-80</td>
        </tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Enter Value' />
        </td>
        <td>%</td>
        <td>40-80</td>
        </tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Calculated' />
        </td>
        <td>%</td>
        <td>40-80</td>
        </tr>
        
        <tr><strong>Absolute Leucocyte Count</strong></tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Calculated' />
        </td>
        <td>/cumm</td>
        <td>300-400</td>
        </tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Calculated' />
        </td>
        <td>/cumm</td>
        <td>200-800</td>
        </tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Calculated' />
        </td>
        <td>/cumm</td>
        <td>140-180</td>
        </tr>

        <tr>
        <td>Total Leucocyte Count</td>
        <td>
            <input type="checkbox" name="" id="" />
            <input type="text" placeholder='Calculated' />
        </td>
        <td>/cumm</td>
        <td>150-200</td>
        </tr>
       </table>
    </div>
   </section>


    </div>
             
  )
}

export default ResultEntry
