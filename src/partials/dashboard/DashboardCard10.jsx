import React, { useState, useEffect } from 'react';
import { AiSelect } from "./Selects";

function DashboardCard10() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3000/api/v1/organizationsname');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();

        const customers = data.map((innerArray) => {
          console.log(innerArray);
          //return innerArray.map((ele) => {
          //console.log("innerArray");
          //console.log(innerArray);
            if (innerArray.length != 0) {
              
              const candidateObj = {
                "Temsilci": innerArray._id,
                "OrganizationName": innerArray.OrganizationName,
                "Sayı": innerArray.count,
                "NZK": innerArray.A_NZK[0],
                "ODEME": innerArray.C_ODEME_IST[0],
                "OLUMLULUK": innerArray.OLUMLULUK[0],
              };
              return candidateObj;
            }
          //});
        });
        
        setCustomers(customers.flat()); // Flatten the array of arrays

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <AiSelect />
      </header>
      <div className="p-3">
        <div className="candidateTable">
          <table className="table">
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Organizasyon</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Çağrı Sayısı</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">NZK</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">ODEME</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">OLUMLULUK</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
  {customers.map((customer, index) => (
    <tr key={index}>
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-slate-800 dark:text-slate-100">{customer?.Temsilci}</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{customer?.OrganizationName}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{customer?.Sayı}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{customer?.NZK}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{customer?.ODEME}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center">{customer?.OLUMLULUK}</div>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
