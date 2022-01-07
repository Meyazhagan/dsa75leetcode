import React, { useEffect, useState } from "react";
import table from "./data/blind75";

const completedLocal = JSON.parse(localStorage.getItem("completed")) || [];

function App() {
    const [completed, setCompleted] = useState(completedLocal);

    const isCompleted = (id) => completed.indexOf(id) !== -1;

    const toggleCompleted = (id) => {
        if (isCompleted(id)) return setCompleted((prev) => prev.filter((v) => v !== id));
        const newCompleted = [...completed];
        newCompleted.push(id);
        setCompleted(newCompleted);
    };

    useEffect(() => {
        localStorage.setItem("completed", JSON.stringify(completed));
    }, [completed]);

    // const selectAll = (e) => {
    //     if (!e.target.checked) return setCompleted([]);
    //     setCompleted(table.map((v) => v._id));
    // };
    return (
        <div className="px">
            <div className="overflow-scroll h-screen">
                <table className="mx-auto">
                    <thead className="sticky top-0 bg-white border-b-2">
                        <tr>
                            <th>
                                {/* <input
                                    onChange={selectAll}
                                    type="checkbox"
                                    className="rounded p-2 text-teal-500 focus:ring-teal-500 outline-none focus:outline-none"
                                /> */}
                            </th>
                            <th>#</th>
                            <th className="p-4 text-justify">Name</th>
                            <th className="p-4 text-justify">Category</th>
                            <th className="p-4 text-justify">Note</th>
                            <th className="p-4 text-justify">Video Link</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        {table.map((entry, index) => (
                            <tr key={entry._id} htmlFor={entry._id}>
                                <td
                                    className="p-4 border-t-2 border-gray-300 text-center"
                                    id="index">
                                    <input
                                        onChange={() => toggleCompleted(entry._id)}
                                        type="checkbox"
                                        className="rounded p-2 text-teal-500 focus:ring-teal-500 outline-none focus:outline-none"
                                        id={entry._id}
                                        checked={isCompleted(entry._id)}
                                    />
                                </td>
                                <td className="p-4 border-t-2 border-gray-300 text-center">
                                    {index + 1}
                                </td>
                                <td
                                    className="p-4 border-t-2 border-gray-300 text-justify w-[40ch] max-w-[45ch] hover:bg-gray-100"
                                    onClick={() => toggleCompleted(entry._id)}
                                    id="link">
                                    <a
                                        href={entry.Link}
                                        target={"_blank"}
                                        className="hover:text-blue-700">
                                        {entry.Name}
                                    </a>
                                </td>

                                <td
                                    className="p-4 border-t-2 border-gray-300 text-justify"
                                    id="category">
                                    {entry.Category}
                                </td>
                                <td
                                    className="p-4 border-t-2 min-w-[40ch] max-w-[45ch] border-gray-300 text-justify"
                                    id="note">
                                    {entry.Notes}
                                </td>
                                <td
                                    className="p-4 border-t-2 border-gray-300 text-center text-blue-700"
                                    id="video-link">
                                    <a
                                        href={entry.Link}
                                        target={"_blank"}
                                        className="hover:text-blue-400">
                                        Video Link
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
