import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";
import AllProjects from "@/pages/AllProjects";
import B3 from "@/pages/projects/B3";
import SolAgora from "@/pages/projects/SolAgora";
import ZendryCripto from "@/pages/projects/ZendryCripto";
import ZendryPlataforma from "@/pages/projects/ZendryPlataforma";
import Totvs from "./pages/projects/Totvs";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/experiencia" component={Experience} />
      <Route path="/contato" component={Contact} />
      <Route path="/projetos" component={AllProjects} />
      <Route path="/projetos/b3" component={B3} />
      <Route path="/projetos/sol-agora" component={SolAgora} />
      <Route path="/projetos/zendry-cripto" component={ZendryCripto} />
      <Route path="/projetos/zendry-plataforma" component={ZendryPlataforma} />
      <Route path="/projetos/totvs" component={Totvs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
