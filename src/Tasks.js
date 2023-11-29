import React from "react";
import { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { BorderTop } from "@mui/icons-material";

function Tasks(props) {
  const [check, setCheck] = useState(true);

  function handleDelete() {
    return props.onDelete(props.id);
  }

  const styles= {
    top:{
      borderTop:check ? '4px solid rgb(9, 142, 37)': '4px solid rgb(216, 46, 8)'
    }
  }

  // function handleCheck(id) {
  //     return
  // }
  return (
    <>
      <li className="listItem" style={styles.top}>
        <input className="check"
          type="checkbox"
          value={check}
          onChange={()=>setCheck(!check)}
        ></input><span
        style={
          !check
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.item}
        <button className="listBtn" onClick={handleDelete}>
          ❌
        </button></span>
      </li>
    </>
  );
}

export default Tasks;
