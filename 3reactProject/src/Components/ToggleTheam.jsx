import { createContext, useContext, useState} from "react";

export const ToggleTheam = createContext(); 
export const useToggleTheam = () => useContext(ToggleTheam);


export const ToggleTheamFun = ({ children }) => {
    const [theam, setTheam] = useState(true)
    return (
        <ToggleTheam.Provider value={{ theam, setTheam }}>{children}</ToggleTheam.Provider>
    );
};

// export default ToggleTheam;