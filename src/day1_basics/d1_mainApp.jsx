import BasicComponent from "./01_BasicComponent";
import PropsExample from "./02_PropsExample";
import EventHandling from "./03_EventHandling";

function D1MainApp() {
  return (
    <div>
      <div className="headers text-center py-5 px-6">
        <h1 className="text-emerald-500 text-5xl text-center">Hello There</h1>
        <h3>My Name is Beneeb3n, and this is my first time learning React</h3>
      </div>

      {/*Section 1: untuk basic component*/}
      <section className="my-5">
        <BasicComponent />
      </section>

      {/*section 2: untuk props */}
      <section className="mx-6">
        <PropsExample />
      </section>

      {/*section 3: event handling*/}
      <section className="my-5 mx-6">
        <EventHandling />
      </section>
    </div>
  );
}

export default D1MainApp;
