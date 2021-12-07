import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Exchanges } from "../components/Exchanges";
import { Crypto } from "../components/Crypto";
import { Details } from "../components/Details";
import { News } from "../components/News";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/crypto" element={<Crypto />} />
                <Route path="/crypto/:coinId" element={<Details />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);







