import AdminSidebar from "@/components/Dashboard/AdminSidebar";

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
                    height: "100%",
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    hi
                </div>
            </div>
        </>
    )
}
