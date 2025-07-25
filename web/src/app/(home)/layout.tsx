import { Navbar } from "./Navbar"

interface Props {
	  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
	    {children}
    </div>
  )
}

export default Layout;
