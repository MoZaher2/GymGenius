import AdminSidebar from "@/components/Dashboard/AdminSidebar";
import Profile from "@/components/AdminFunction/Admins/Profile/Profile";
import Header from "@/components/Header/Header";
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
                    // justifyContent: "center",
                    // alignItems: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#FFF",
                }}>
                    <Header />
                    <Profile />
                </div>
            </div>
        </>
    )
}
