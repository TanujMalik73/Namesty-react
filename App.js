const heading = React.createElement("div", { id: "box" }, [
  React.createElement("div", { id: "block" }, [
    React.createElement("h1", { class: "topic" }, "hlo heading here"),
    React.createElement("h1", { class: "topic" }, "hlo again heading here"),
  ]),
  React.createElement("div", { id: "block2" }, [
    React.createElement("h2", { class: "topic" }, "hlo b2 heading here"),
    React.createElement("h2", { class: "topic" }, "hlo b2 again heading here"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
