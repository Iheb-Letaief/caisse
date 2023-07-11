import { useState } from "react";
import DisabledFooter from "./DisabledFooter";
import Footer from "./Footer";


const FooterMain: React.FC = () => {
    const [enableFooter, setEnableFooter] = useState(false);
  
    const toggleFooter = () => {
        setEnableFooter(!enableFooter);
    };
  
    return (
      <div>
        <button onClick={toggleFooter}>Toggle Footer</button>
        {enableFooter ? (
          <Footer />
        ) : (
          <DisabledFooter />
        )}
      </div>
    );
  };
  
  export default FooterMain;
  