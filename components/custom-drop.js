import { useState } from 'react';

const Dropdown = ({ options, onSelect, defaultLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="_dropdown">
      <button className="toggleButton input" onClick={handleToggle} type='button'>
        {selected ? selected.label : defaultLabel}
      </button>
      {isOpen && (
        <ul className="menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="menuItem"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;