import React, { useState } from "react";
import Select from "react-select";
import { useQuery } from '@tanstack/react-query';

//import "./styles.css"; // Importing the CSS file
//import { colourOptions } from "./data";

export const TimeSelect = ({ handleChange }) => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  const colourOptions = [
    { value: "Bugün", label: "Bugün" },
    { value: "Dün", label: "Dün" },
   
  ];

  handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2684ff" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: state.isSelected ? "#2684ff" : "#F86E63",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "4px",
      color: "black",
      padding: "2px 6px",
      marginRight: "4px",
      border: "3px solid red",
      width: "20vmax",
      fontSize: "16px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
    }),
  };

  return (
    <div>
      <Select
        isMulti
        onChange={handleChange} // Pass the handleChange function as a prop
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        // only allow user to choose up to 3 options
        isOptionDisabled={() => selectedOptions.length >= 1}
        styles={customStyles} // Apply custom styles
      />
    </div>
  );
};

export const OrganizationSelect = ({ handleChangeOrganization }) => {



  const [selectedOptionsOrganization, setSelectedOptionsOrganization] = useState([]);

  async function fetchData() {
   
    const res = await fetch('http://localhost:3000/api/v1/organizationsname');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();


   const transformedArray = data.map((innerArray) => {
      // Use the inner map() function to double each element of the inner array
      //return innerArray.map((ele) => {
       // if(innerArray.length != 0 && innerArray.OrganizationName != null){
          console.log("arr");
          console.log(innerArray);
          return innerArray.OrganizationName;
        //}
      //});
    });
    return transformedArray
  }
  let colourOptionsOrganization = [];
  let organizationObj = {};
  fetchData().then(data => {

    [...new Set(data)].forEach((innerArray) => {
 
      //[...new Set(innerArray)].forEach((value) => {
        if(innerArray != undefined){
          organizationObj =  { value : innerArray, label: innerArray }; 
          colourOptionsOrganization.push(organizationObj);
        }
     // });
    });
  
   //return colourOptionsProjects;
  })


  handleChangeOrganization = (selectedOptionsOrganization) => {
    setSelectedOptionsOrganization(selectedOptionsOrganization);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2684ff" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: state.isSelected ? "#2684ff" : "#F86E63",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "4px",
      color: "black",
      padding: "2px 6px",
      marginRight: "4px",
      border: "3px solid red",
      width: "20vmax",
      fontSize: "16px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
    }),
  };

  return (
    <div>
        <Select
          isMulti
          onChange={handleChangeOrganization} // Pass the handleChange function as a prop
          name="colors"
          options={colourOptionsOrganization}
          className="basic-multi-select"
          classNamePrefix="select"
          // only allow user to choose up to 1 option (change this number if needed)
          isOptionDisabled={() => selectedOptionsOrganization.length >= 3}
          styles={customStyles} // Apply custom styles
        />
      
    </div>
  );
};


async function fetchData() {
   
  const res = await fetch('http://localhost:3000/api/v1/projects');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  console.log("data");
  console.log(data[0].Name);
 const transformedArray = data.map((innerArray) => {
    // Use the inner map() function to double each element of the inner array
    //return innerArray.map((ele) => {
     // if(innerArray.length != 0 && innerArray.OrganizationName != null){
        console.log("arr");
        console.log(innerArray);
        return innerArray;
      //}
    //});
  });
  return transformedArray
}

export const ProjectSelect = ({ handleChangeProject }) => {
  const [selectedOptionsProject, setSelectedOptionsProject] = useState([]);


  let colourOptionsProjects = [];
  let projectObj = {};
  fetchData().then(data => {

    [...new Set(data)].forEach((innerArray) => {
 
      //[...new Set(innerArray)].forEach((value) => {
        if(innerArray != undefined){
          projectObj =  { value : innerArray.Name, label: innerArray.Name }; 
          colourOptionsProjects.push(projectObj);
        }
     // });
    });
  
   //return colourOptionsProjects;
  })
  console.log("project");
  console.log(colourOptionsProjects);


  
  
 /* const colourOptionsProjects = [
    { value: "Project 1", label: "Project 1", color: "#00B8D9", isFixed: true },
    { value: "Project 2", label: "Project 2", color: "#0052CC", isDisabled: true },
    { value: "Project 3", label: "Project 3", color: "#0052CC", isDisabled: true },
    { value: "Project 4", label: "Project 4", color: "#0052CC", isDisabled: true }
   
  ];*/

  handleChangeProject = (selectedOptionsProject) => {
    setSelectedOptionsProject(selectedOptionsProject);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2684ff" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: state.isSelected ? "#2684ff" : "#F86E63",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "4px",
      color: "black",
      padding: "2px 6px",
      marginRight: "4px",
      border: "3px solid red",
      width: "20vmax",
      fontSize: "16px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
      backgroundColor: "white",
    }),
  };

  return (
    <div>
      <Select
        isMulti
        onChange={handleChangeProject} // Pass the handleChange function as a prop
        name="colors"
        options={colourOptionsProjects}
        className="basic-multi-select"
        classNamePrefix="select"
        // only allow user to choose up to 3 options
        isOptionDisabled={() => selectedOptionsProject.length >= 3}
        styles={customStyles} // Apply custom styles
      />
    </div>
  );
};

export const CandidateSelect = ({ handleChangeCandidate }) => {
  const [selectedOptionsCandidate, setSelectedOptionsCandidate] = useState([]);

  const optionsCandidate = [
    { value: "candidate1", label: "Candidate 1" },
    { value: "candidate2", label: "Candidate 2" },
    { value: "candidate3", label: "Candidate 3" },
    // Add more options as needed
  ];

  const customStyles = {
    // Define your custom styles here
  };
  handleChangeCandidate = (selectedOptionsCandidate) => {
    setSelectedOptionsCandidate(selectedOptionsCandidate);
  };

  const handleLocalChangeCandidate = (selectedOptionsCandidate) => {
    setSelectedOptionsCandidate(selectedOptionsCandidate);
    handleChangeCandidate(selectedOptionsCandidate);
  };

  return (
    <div>
      <Select
        isMulti
        onChange={handleLocalChangeCandidate}
        name="candidates"
        options={optionsCandidate}
        className="basic-multi-select"
        classNamePrefix="select"
        isOptionDisabled={() => selectedOptionsCandidate.length >= 3}
        styles={customStyles}
      />
    </div>
  );
};

export const QueueSelect = ({ handleChangeQueue }) => {
  const [selectedOptionsQueue, setSelectedOptionsQueue] = useState([]);

 /* const optionsQueue = [
    { value: "queue1", label: "Queue 1" },
    { value: "queue2", label: "Queue 2" },
    { value: "queue3", label: "Queue 3" },
    // Add more options as needed
  ];*/
  let colourOptionsQueue = [];
  let queueObj = {};
  fetchData().then(data => {

    [...new Set(data)].forEach((innerArray) => {
       
        const queues = innerArray.Queues.map((ele) => {
       
            if(innerArray != undefined){
              queueObj =  { value : ele.Name, label: ele.Name }; 
              colourOptionsQueue.push(queueObj);
            }
        });
      //[...new Set(innerArray)].forEach((value) => {
      
     // });
    });
  
   //return colourOptionsProjects;
  })

  const customStyles = {
    // Define your custom styles here
  };
  handleChangeQueue = (selectedOptionsQueue) => {
    setSelectedOptionsQueue(selectedOptionsQueue);
  };

  const handleLocalChangeQueue = (selectedOptions) => {
    setSelectedOptionsQueue(selectedOptionsQueue);
    handleChangeQueue(selectedOptionsQueue);
  };

  return (
    <div>
      <Select
        isMulti
        onChange={handleLocalChangeQueue}
        name="queues"
        options={colourOptionsQueue}
        className="basic-multi-select"
        classNamePrefix="select"
        isOptionDisabled={() => selectedOptionsQueue.length >= 3}
        styles={customStyles}
      />
    </div>
  );
};

export const AiSelect = ({ handleChangeAI }) => {
  const [selectedOptionsAI, setSelectedOptionsAI] = useState([]);

  const optionsAI = [
    { value: "ai1", label: "AI 1" },
    { value: "ai2", label: "AI 2" },
    { value: "ai3", label: "AI 3" },
    // Add more options as needed
  ];

  const customStyles = {
    // Define your custom styles here
  };
  handleChangeAI = (selectedOptionsAI) => {
    setSelectedOptionsAI(selectedOptionsAI);
  };

  const handleLocalChangeAI = (selectedOptionsAI) => {
    setSelectedOptionsAI(selectedOptionsAI);
    handleChangeAI(selectedOptionsAI);
  };

  return (
    <div>
      <Select
        isMulti
        onChange={handleLocalChangeAI}
        name="ais"
        options={optionsAI}
        className="basic-multi-select"
        classNamePrefix="select"
        isOptionDisabled={() => selectedOptionsAI.length >= 3}
        styles={customStyles}
      />
    </div>
  );
};

export const CardSelect = ({ handleChangeCard }) => {
  const [selectedOptionsCard, setSelectedOptionsCard] = useState([]);

  const optionsCard = [
    { value: "ai1", label: "AI 1" },
    { value: "ai2", label: "AI 2" },
    { value: "ai3", label: "AI 3" },
    // Add more options as needed
  ];

  const customStyles = {
    // Define your custom styles here
  };
  handleChangeCard = (selectedOptionsCard) => {
    setSelectedOptionsCard(selectedOptionsCard);
  };

  const handleLocalChangeCard = (selectedOptionsCard) => {
    setSelectedOptionsCard(selectedOptionsCard);
    handleChangeCard(selectedOptionsCard);
  };

  return (
    <div>
      <Select
        isMulti
        onChange={handleLocalChangeCard}
        name="ais"
        options={optionsCard}
        className="basic-multi-select"
        classNamePrefix="select"
        isOptionDisabled={() => selectedOptionsCard.length >= 1}
        styles={customStyles}
      />
    </div>
  );
};

