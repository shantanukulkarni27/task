import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App";
import { LogIn, ErrorPage,Landing } from "./Pages"



const Router = () => {
    console.log("In router");
    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </>
        </BrowserRouter>
    )


}

export default Router;