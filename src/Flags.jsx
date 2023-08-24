import { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";

function Flag(){
    const [selected, setSelected] = useState("US");
    const onSelect = (code) => setSelected(code);
    const showSelectedLabel = false;
    const showOptionLabel = false;
    const searchable = false;    
    return (
      <div className="demo-wrapper">
        <ReactFlagsSelect
          selected={selected}
          onSelect={onSelect}
          showSelectedLabel={showSelectedLabel}
          showOptionLabel={showOptionLabel}
          countries={["PT", "US", "ES"]}
          searchable={searchable}
          placeholder={selected}
        />
      </div>
    );
  }
  export default Flag;