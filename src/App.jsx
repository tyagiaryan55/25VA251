import "./App.css";

function StudentCard({ image, name, course, year, cgpa }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>Name: {name}</h3>
      <p><b>Course:</b> {course}</p>
      <p><b>Year:</b> {year}</p>
      <p><b>CGPA:</b> {cgpa}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1> student profile dashboard</h1>

      <div className="cards">
        <StudentCard
          image="https://bodybuilding-wizard.com/wp-content/uploads/2024/11/chris-bumstead-classic-physique-mr-olympia-champion-1.jpg"
          name="Chris Bumstead"
          course="B.Tech CSE"
          year="3rd Year"
          cgpa="8.5"
        />

        <StudentCard
          image="https://i.pinimg.com/736x/35/67/84/3567847f1d0ded0e85ad4dceea5961f7.jpg"
          name="soniya khatri"
          course="BCA"
          year="2nd Year"
          cgpa="9.1"
        />
      </div>
    </div>
  );
}

export default App;