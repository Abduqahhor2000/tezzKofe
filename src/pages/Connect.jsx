// import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import {setCofeID, setTableID} from "../store/reducer/alldata"

export default function Connect() {
//   const count = useSelector((state) => state.counter.kafe_id);
  const navigate = useNavigate()
  const params = useParams();
//   const dispatch = useDispatch();
  console.log(params);
  
  useEffect(() => {
     localStorage.setItem("cofe_id", params.cofe_id)
     localStorage.setItem("table_id", params.table_id)
     navigate("/")
  }, [])

  return <div>Connect...</div>;
}
