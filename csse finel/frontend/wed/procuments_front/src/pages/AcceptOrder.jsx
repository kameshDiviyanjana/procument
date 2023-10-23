import PageNav from "../components/PageNav";

function AcceptOrder() {
  let a = localStorage.getItem("selectedEmpID");

  return (
    <div>
      <PageNav />
      <div>{a}</div>
    </div>
  );
}

export default AcceptOrder;
