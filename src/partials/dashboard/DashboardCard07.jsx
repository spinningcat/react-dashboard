import React, { useState, useEffect, useRef  } from 'react';
import { AiSelect } from "./Selects";
import Transcript from "./Transcript"; // Assuming Transcript.jsx is in the same directory




function DashboardCard07( ) {
  const [fetchedData, setFetchedData] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [isDataAvailable, setIsDataAvailable] = useState(false); // State to track if data is available
  const [emptyElement, setEmptyElement] = useState(false)
  const handleClickRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3000/api/v1/records?date=today');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data)


        const customers = data.map((innerArray) => {

            const candidateObj = {
                "id": innerArray._id,
                "Yon": innerArray.Inbound,
                "OrganizationName" : innerArray.Station.OrganizationName,
                "Name":innerArray.Station.Name,
                "CallCenterId": innerArray.CallId,
                "StartDate" : innerArray.StartDate,
                "Duration" : innerArray.Duration
                
                /*"Sayı": ele[0].count,
                "NZK": ele[0].A_NZK[0],
                "ODEME": ele[0].C_ODEME_IST[0],
                "OLUMLULUK": ele[0].OLUMLULUK[0],*/
              };
              return candidateObj;
         
          });  
    


          
        
        setCustomers(customers); // Flatten the array of arrays

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  async function handleDataReceived(event){
    return handleClick(event);
  }
  async function handleClick(event) {
    event.preventDefault(); // Prevent default button behavior
  
    const buttonId = event.currentTarget.getAttribute("data-id");
    //console.log(buttonId);
    try {
      const res = await fetch('http://localhost:3000/api/v1/recordsspeech/' + buttonId);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json(); // Parse response body as JSON
      console.log(data); // Log the data received from the API
     // onDataReceived(data);
     //handleDataReceived(data);
      //return data; // Return the data
      setFetchedData(data);
      setIsDataAvailable(true);
     
      const handleClick = () => {
        // Toggle the value of emptyElement
        setEmptyElement(prevEmpty => !prevEmpty);
      };
    } catch (error) {
      console.error('Error fetching data:', error); // Log the error
      throw error; // Throw the error
    }
  }
  //window.handleClick = handleClick;
  handleClickRef.current = handleClick; // Assign handleClick function to the ref

  return (
    <div className="recordsspeech col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
     
      <div className="p-3">
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <AiSelect />
      </div>
        <div className="recordsTable">
          <table className="table">
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Çağrı Yönü</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Organizasyon</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Kullanıcı adı</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Çağrı Id</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Başlangıç Tarihi</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Süre</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
      {customers.map((customer, index) => (
       // console.log("Customer:", customer.Yon),
        <tr key={index}>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
            <div className="font-medium text-slate-800">
                {customer?.Yon ? (
                  // If customer.Yon exists and is truthy
                  "İç"
                ) : (
                  // If customer.Yon does not exist or is falsy
                  // Handle the case when customer.Yon is empty or null
                  // For example:
                  "Dış"
                )}
              </div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{customer.OrganizationName}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left">{customer?.Name}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
          <button className="callCenterId" data-id = {customer.id} onClick={handleClick}>{customer?.CallCenterId}</button>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">{new Date(customer?.StartDate).toLocaleString()}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-center">{customer?.Duration}</div>
          </td>
        </tr>
      ))}
    </tbody>
              </table>
            </div>
            
            </div>
            <div className="transcript col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            {isDataAvailable && fetchedData && Array.isArray(fetchedData) && !emptyElement && (
               
               <div className="data-container">
                  {fetchedData.map((line, index) => (
                    <div key={index}>
                      {line.map((ele, innerIndex) => {
                        if (JSON.stringify(ele).includes("left")) {
                         
                          return <p className="left" key={ele.left}>{ele.left}</p>;
                        }
                        if (JSON.stringify(ele).includes("right")) {
                       
                          return <p className="right" key={ele.right}>{ele.right}</p>;
                        }
                        return null; // Return null if neither "left" nor "right" is found
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

  
          </div>
        
      

      );
}

export default DashboardCard07;
