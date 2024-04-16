import NotesSideBar from "./components/SideBar";
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'


const NotesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/* <NotesSideBar /> */}
            {children}
        </>
    )
}

export default NotesLayout;