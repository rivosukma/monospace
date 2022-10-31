import { Button } from "space-ui/core";

const IdLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-purple-200 p-5">
      {children} <Button>Uye</Button>
    </div>
  );
};

export default IdLayout;
