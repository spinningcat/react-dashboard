import React, { useState } from 'react';
//import Sidebar from '../partials/Sidebar';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import { TimeSelect, OrganizationSelect, ProjectSelect, QueueSelect, CandidateSelect } from "../partials/dashboard/Selects";
import Transcript from "../partials/dashboard/Transcript";
//import Banner from '../partials/Banner';
import "../css/style.css"
import Waveform from '../partials/dashboard/WaveForm';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}


      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        
        {/* Cards */}
            <div className="main">
              <div className="boxes">
                <div className="selectBox">
                  <p>Zaman</p>
                  <TimeSelect />
                </div>
                <div className="selectBox">
                  <p>Organizasyon</p>
                  <OrganizationSelect />
                </div>
                <div className="selectBox">
                <p>Projeler</p>
                 <ProjectSelect />
                </div>
                <div className="selectBox">
                <p>Kuyruk</p>
                 <QueueSelect />
                </div>
                <div className="selectBox">
                <p>Temsilci</p>
                 <CandidateSelect />
                </div>
              
              </div>
       
              {/* Card (Customers) */}
              <DashboardCard10 />
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
            
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
              {/* Line chart (Real Time Value) */}
              <DashboardCard05 />
            
              {/* Table (Top Channels) */}
              <DashboardCard07 />

           
              <Waveform />

              

          

          
              
            </div>

          </div>
        </main>

       

      </div>
    </div>
  );
}

export default Dashboard;