import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MobileNavbar } from './cards/Navigation/mobileNavbarCard';
import MobileLayout from "@/layouts/mobileLayout"
import { Routes, Route } from "react-router-dom"
//pour les info bulles
import { TooltipProvider } from "@/components/ui/tooltip"
import DataPageCard from "./pages/DataPage";
import HomePageCard from "./pages/HomePage";
import FaqPageCard from "./pages/FaqPage";


const queryClient = new QueryClient()  // ← en dehors du composant

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>  {/* ← wrap tout */}
      <TooltipProvider>
        <MobileLayout>
          <MobileNavbar />
          <Routes>
            <Route path="/data" element={
              <><DataPageCard/></>
            } />
            <Route path="/" element={
              <><HomePageCard/></>
            } />
            <Route path="/faq" element={
              <><FaqPageCard/></>
            } />
            <Route path="/charts" element={
              <><span>En cours de dev 😉</span></>
            } />
          </Routes>
        </MobileLayout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}