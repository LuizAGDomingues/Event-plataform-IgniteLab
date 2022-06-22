import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
        <div className="flex flex-col min-h-sc">
            <Header />
            <main className="flex flex-1">
                <Video/>
                <Sidebar/>
            </main>
        </div>
    )
}