import React from "react";
import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <Link to={props.location}>
    <button type="button" 
    class="w-72 text-gray-900 bg-zinc-800 border border-gray-300  hover:bg-zinc-500   font-medium rounded-full text-sm px-5 text-white py-2.5 mr-2 mb-2 dark:bg-gray-800   dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">
    <span className="text-lg">{props.bname}</span>
      </button>
    </Link>

  );
}
export default Button;