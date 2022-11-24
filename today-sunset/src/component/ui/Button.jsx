import React from "react";

function Button(props){
   const {title, onClick} = props;
   return(
   <button type="button" class="btn btn-info" onClick={onClick}>{title || "글 작성하기"}</button>
   );
}

export default Button;