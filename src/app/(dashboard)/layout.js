import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const layout = ({ children }) => {
    return (
        <>
         <SidebarProvider>
           <AppSidebar />
           <SidebarTrigger />
               {children}
        </SidebarProvider>
                
    </>
    );
};

export default layout;