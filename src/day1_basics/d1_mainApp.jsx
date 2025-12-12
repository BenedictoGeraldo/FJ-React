import BasicComponent from "./01_BasicComponent";

function D1MainApp() {
  return (
    <div>
      <div className="headers text-center py-5 px-6">
        <h1 className="text-emerald-500 text-5xl text-center">Hello There</h1>
        <h3>My Name is Beneeb3n, and this is my first time learning React</h3>
      </div>

      {/*Section 1: untuk basic component*/}
      <section>
        <BasicComponent />
      </section>
    </div>
  );
}

export default D1MainApp;
