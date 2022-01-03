const tableBody = document.querySelector("#table-body");
const tableRow = document.querySelector("#table-row");

tableData = [...tableData];

tableData.forEach((data, index) => {
    const rowCopy = document.importNode(tableRow, true).content;

    rowCopy.querySelector("#index").textContent = index + 1;
    rowCopy.querySelector("#name").textContent = data.Name;
    rowCopy.querySelector("#category").textContent = data.Category;
    rowCopy.querySelector("#note").textContent = data.Notes;
    rowCopy.querySelector("#link").innerHTML = `<a href="${data.Link}">Ques</a>`;
    rowCopy.querySelector("#video-link").innerHTML = `<a href="${data.VideoLink}">YT</a>`;

    tableBody.append(rowCopy);
});
