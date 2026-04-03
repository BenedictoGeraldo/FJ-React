import D1MainApp from "./day1_basics/d1_mainApp";
import D2MainApp from "./day2_state_hooks/d2_mainApp";
import D3MainApp from "./day3_router_forms/d3_mainApp";
import Basic from "./fetching-api/basic/basic";
import PostFetching from "./fetching-api/post-fetching/postFetching";
import PatchFetching from "./fetching-api/patch-fetching/PatchFetching";

function App() {
  return (
    <div>
      {/* This when i want to show Day 1*/}
      {/* <D1MainApp /> */}

      {/* This when i want to show Day 2*/}
      {/* <D2MainApp /> */}

      {/* This when i want to show Day 3*/}
      {/* <D3MainApp /> */}

      {/* <Basic /> */}
      {/* <PostFetching /> */}

      <PatchFetching />
    </div>
  );
}

export default App;
