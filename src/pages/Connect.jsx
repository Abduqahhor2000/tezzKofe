import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {setCafeID, setTableID} from "../store/reducer/alldata"

export default function Connect() {
  const navigate = useNavigate()
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);
  
  useEffect(() => {
     dispatch(setCafeID(params.cafe_id))
     dispatch(setTableID(params.table_id))
     navigate("/")
  }, [])

  return <div>Connect...</div>;
}
