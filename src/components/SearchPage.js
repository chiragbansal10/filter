
import React, { useState, useEffect } from 'react';

const SearchPage = () => {
  // Define the initial data
  const data = [
    { university: "Harvard University", course: "Computer Science", germanyRanking: 1, teachingLanguage: "English", beginningSemester: "All QUARTERS", duration: "4 years", tuitionFee: 5000 },
    { university: "Harvard University", course: "Electrical Engineering", germanyRanking: 3, teachingLanguage: "English", beginningSemester: "ALL TRIMESTERS", duration: "5 years", tuitionFee: 6000 },
    { university: "Massachusetts Institute of Technology", course: "Mechanical Engineering", germanyRanking: 2, teachingLanguage: "English", beginningSemester: "ANY TIME", duration: "4 years", tuitionFee: 5500 },
    { university: "University of Cambridge", course: "Physics", germanyRanking: 5, teachingLanguage: "Urdu", beginningSemester: "AUTUMN", duration: "3 years", tuitionFee: 5200 },
    // Add more data as needed
  ];

  // Define state variables
  const [filteredData, setFilteredData] = useState([]);
  const [searchQueries, setSearchQueries] = useState({
    university: '',
    course: '',
    germanyRanking: '',
    duration: '',
    minTuitionFee: '',
    maxTuitionFee: '',
  });
  const [displayCount, setDisplayCount] = useState(data.length);
  const [courseType, setCourseType] = useState('');
  const [teachingLanguage, setTeachingLanguage] = useState('');
  const [beginningSemester, setBeginningSemester] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [minTuitionFee, setMinTuitionFee] = useState('');
  const [maxTuitionFee, setMaxTuitionFee] = useState('');

  // useEffect to handle search and filtering
  useEffect(() => {
    const handleSearch = () => {
      let filteredItems = data.filter(item => {
        const universityMatch = item.university.toLowerCase().includes(searchQueries.university.toLowerCase());
        const courseMatch = item.course.toLowerCase().includes(searchQueries.course.toLowerCase());
        const rankingMatch = item.germanyRanking.toString().includes(searchQueries.germanyRanking);
     
       const courseTypeMatch = !courseType || item.course.toLowerCase() === courseType.toLowerCase(); // Updated line
        const teachingLanguageMatch = !teachingLanguage || item.teachingLanguage.toLowerCase() === teachingLanguage.toLowerCase();
        const beginningSemesterMatch = !beginningSemester || item.beginningSemester.toLowerCase() === beginningSemester.toLowerCase();
       
        const durationMatch = !selectedDuration || item.duration === selectedDuration; // Updated line

        
        const tuitionFee = parseInt(item.tuitionFee);
        const minTuitionFeeValue = minTuitionFee ? parseInt(minTuitionFee) : -Infinity;
        const maxTuitionFeeValue = maxTuitionFee ? parseInt(maxTuitionFee) : Infinity;
        const tuitionFeeMatch = tuitionFee >= minTuitionFeeValue && tuitionFee <= maxTuitionFeeValue;

        return universityMatch && courseMatch && rankingMatch && courseTypeMatch && teachingLanguageMatch && beginningSemesterMatch && durationMatch && tuitionFeeMatch;
      });

      filteredItems = filteredItems.slice(0, displayCount);

      setFilteredData(filteredItems);
    };

    const timeoutId = setTimeout(handleSearch, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQueries, data, displayCount, courseType, teachingLanguage, beginningSemester, selectedDuration, minTuitionFee, maxTuitionFee]);

  // Event handlers for input changes
  const handleInputChange = (event, field) => {
    setSearchQueries({
      ...searchQueries,
      [field]: event.target.value
    });
  };



  const handleDisplayCountChange = (event) => {
    const count = event.target.value === "No of Items" ? data.length : parseInt(event.target.value);
    setDisplayCount(count);
  };

  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
  };

  const handleTeachingLanguageChange = (event) => {
    setTeachingLanguage(event.target.value);
  };

  const handleBeginningSemesterChange = (event) => {
    setBeginningSemester(event.target.value);
  };



 // Event handlers for input changes
const handleMinTuitionFeeChange = (event) => {
  setMinTuitionFee(event.target.value);
};

const handleMaxTuitionFeeChange = (event) => {
  setMaxTuitionFee(event.target.value);
};

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };
  // Event handler for reset button
const handleReset = () => {
  window.location.reload(); // Reloads the current page
};

  // JSX to render the component
  return (
    <div style={{ display: 'flex' }}>
    <div style={{ flex: '1', marginRight: '20px' }}>


    
      <h1>Search Page</h1>
      <button style={{ marginBottom: '10px' }} onClick={handleReset} className='reset_button'>Reset</button>
      <div style={{ marginBottom: '10px' }}>
        <select value={displayCount} onChange={handleDisplayCountChange}  className="select-styled">
          {["No of Items", 1, 2, 3].map(count => (
            <option key={count} value={count}>{count}</option>
          ))}
        </select>
      </div>
      {/* Input fields for search queries */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search by University Name"
          value={searchQueries.university}
          onChange={(e) => handleInputChange(e, 'university')}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search by Course Name"
          value={searchQueries.course}
          onChange={(e) => handleInputChange(e, 'course')}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search by Germany Ranking"
          value={searchQueries.germanyRanking}
          onChange={(e) => handleInputChange(e, 'germanyRanking')}
        />
      </div>
      {/* Dropdown menus for filtering */}
      <div style={{ marginBottom: '10px' }}>
        <select value={courseType} onChange={handleCourseTypeChange} className="select-styled">
          <option value="">Course Types</option>
          {Array.from(new Set(data.map(item => item.course))).map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
       <option>Teaching language</option>
        <select value={teachingLanguage} onChange={handleTeachingLanguageChange} size="4"  className="select-styled">
                    <option value="">----Teaching language----</option>
            {Array.from(new Set(data.map(item => item.teachingLanguage))).map((language, index) => (
              <option key={index} value={language}>{language}</option>
           ))}
      </select>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <option>Beginning Semester</option>
         <select value={beginningSemester} onChange={handleBeginningSemesterChange} size="4"  className="select-styled">
          <option value="">----Beginning Semester----</option>
                      {Array.from(new Set(data.map(item => item.beginningSemester))).map((semester, index) => (
             <option key={index} value={semester}>{semester}</option>
          ))}
         </select>
        </div>
      <div style={{ marginBottom: '10px' }}>
        
        <select value={selectedDuration} onChange={handleDurationChange}  className="select-styled">
  <option value="">Duration</option>
  {Array.from(new Set(data.map(item => item.duration))).map((duration, index) => (
    <option key={index} value={duration}>{duration}</option>
  ))}
</select>

      </div>
      {/* Input fields for tuition fee */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Minimum Tuition Fee"
          value={minTuitionFee}
          onChange={handleMinTuitionFeeChange}
        />
        <input
          type="text"
          placeholder="Maximum Tuition Fee"
          value={maxTuitionFee}
          onChange={handleMaxTuitionFeeChange}
        />
      </div></div>
      {/* Render filtered data */}
      <div  style={{ flex: '2' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>{item.university}</strong>
            <br />
            Course: {item.course}, Germany Ranking: {item.germanyRanking}, Duration: {item.duration}, Tution fee : {item.tuitionFee}, Beginning Semester : {item.beginningSemester}, Teaching Language : {item.teachingLanguage}
          </li>
        ))}
      </ul>
      </div>
  
    </div>
  );
};

export default SearchPage;
