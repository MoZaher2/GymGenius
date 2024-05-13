import AdminSidebar from "@/components/Dashboard/AdminSidebar";
import Header from "@/components/Header/Header";
import AllCoaches from '@/components/AdminFunction/Coaches/AllCoaches';

export default function page() {
    return (
        <>
            <div style={{
                width: "100%",
                height: "100%",
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
                <AdminSidebar />
                <div style={{
                    width: "100%",
                    height: "100vh",
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#FFF",
                }}>
                    <Header />
                    <AllCoaches />
                </div>
            </div>
        </>
    )
}
