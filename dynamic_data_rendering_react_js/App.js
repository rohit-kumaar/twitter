function App() {
    const companies = [
      { id:1, name: "Company One", category: "Finance", start: 1981, end: 2004 },
      { id:2, name: "Company Two", category: "Retail", start: 1992, end: 2008 },
      { id:3, name: "Company Three", category: "Auto", start: 1999, end: 2007 },
      { id:4, name: "Company Four", category: "Retail", start: 1989, end: 2010 },
      { id:5, name: "Company Five", category: "Technology", start: 2009, end: 2014 },
      { id:6, name: "Company Six", category: "Finance", start: 1987, end: 2010 },
      { id:7, name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
      { id:8, name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
      { id:9, name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
    ];
  
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
    return (
      <>
        <ul>
          {
            ages?.map((age, index) => ( <li key={index}>{age}</li> ))
          }
        </ul>
  
        <hr />
  
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
  
          <tbody>
            {
              companies?.map((company) => ( <tr key={company.id}>
                                                <td>{company.name}</td>
                                                <td>{company.category}</td>
                                                <td>{company.start}</td>
                                                <td>{company.end}</td>
                                            </tr>
                                          ))
            }
          </tbody>
        </table>
      </>
    );
  }
  
  export default App;
  