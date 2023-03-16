//after copying over filter return, it appears that it needs thte following:
////(1)handleCategoryChange function passed down
//// (3)import ITEM Component
import React from "react";
//item number (3) above:



//pass down items (1) & (2) from above as props
function Filter ({onCategoryChange }) {
    return (
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    )
}

export default Filter