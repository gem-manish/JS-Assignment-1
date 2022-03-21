(function generateTable() {
    let table = document.createElement('table');

    //Adding border to table
    table.style.borderCollapse="Collapse";
    table.style.border="7px solid red";

    let thead = document.createElement('thead');

    //Adding border to thead
    thead.style.borderCollapse="Collapse";
    thead.style.border="7px solid red";

    let tbody = document.createElement('tbody');

    //Adding border to thead
    tbody.style.borderCollapse="Collapse";
    tbody.style.border="7px solid red";

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('body').appendChild(table);

    // Creating and adding data to first row of the table
        let row_1 = document.createElement('tr');

        let heading_1 = document.createElement('th');
        let strong_heading_1 = document.createElement("strong");
        strong_heading_1.innerText="Name";
        heading_1.style.borderCollapse="Collapse";
        heading_1.style.border="7px solid red";
        heading_1.append(strong_heading_1);

        let heading_2 = document.createElement('th');
        let strong_heading_2 = document.createElement("strong");
        strong_heading_2.innerText="Age";
        heading_2.style.borderCollapse="Collapse";
        heading_2.style.border="7px solid red";
        heading_2.append(strong_heading_2);

        let heading_3 = document.createElement('th');
        let strong_heading_3 = document.createElement("strong");
        strong_heading_3.innerText="DOB";
        heading_3.style.borderCollapse="Collapse";
        heading_3.style.border="7px solid red";
        heading_3.append(strong_heading_3);

        let heading_4 = document.createElement('th');
        let strong_heading_4 = document.createElement("strong");
        strong_heading_4.innerText="E-Mail";
        heading_4.style.borderCollapse="Collapse";
        heading_4.style.border="7px solid red";
        heading_4.append(strong_heading_4);

        let heading_5 = document.createElement('th');
        let strong_heading_5 = document.createElement("strong");
        strong_heading_5.innerText="Company";
        heading_5.style.borderCollapse="Collapse";
        heading_5.style.border="7px solid red";
        heading_5.append(strong_heading_5);

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);
        thead.appendChild(row_1);

    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "xyz";
    row_2_data_1.style.borderCollapse="Collapse";
    row_2_data_1.style.border="7px solid red";

    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = "xyz";
    row_2_data_2.style.borderCollapse="Collapse";
    row_2_data_2.style.border="7px solid red";

    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = "xyz";
    row_2_data_3.style.borderCollapse="Collapse";
    row_2_data_3.style.border="7px solid red";

    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = "xyz";
    row_2_data_4.style.borderCollapse="Collapse";
    row_2_data_4.style.border="7px solid red";

    let row_2_data_5 = document.createElement('td');
    row_2_data_5.innerHTML = "Netflix";
    row_2_data_5.style.borderCollapse="Collapse";
    row_2_data_5.style.border="7px solid red";

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    tbody.appendChild(row_2);


    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "xyz";
    row_3_data_1.style.border="7px solid red";
    row_3_data_1.style.borderCollapse="Collapse";

    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = "xyz";
    row_3_data_2.style.borderCollapse="Collapse";
    row_3_data_2.style.border="7px solid red";

    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = "xyz";
    row_3_data_3.style.borderCollapse="Collapse";
    row_3_data_3.style.border="7px solid red";

    let row_3_data_4 = document.createElement('td');
    row_3_data_4.innerHTML = "xyz";
    row_3_data_4.style.borderCollapse="Collapse";
    row_3_data_4.style.border="7px solid red";

    let row_3_data_5 = document.createElement('td');
    row_3_data_5.innerHTML = "Netflix";
    row_3_data_5.style.borderCollapse="Collapse";
    row_3_data_5.style.border="7px solid red";

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    row_3.appendChild(row_3_data_4);
    row_3.appendChild(row_3_data_5);
    tbody.appendChild(row_3);

    // Creating and adding data to fourth row of the table
    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "xyz";
    row_4_data_1.style.borderCollapse="Collapse";
    row_4_data_1.style.border="7px solid red";

    let row_4_data_2 = document.createElement('td');
    row_4_data_2.innerHTML = "xyz";
    row_4_data_2.style.borderCollapse="Collapse";
    row_4_data_2.style.border="7px solid red";

    let row_4_data_3 = document.createElement('td');
    row_4_data_3.innerHTML = "xyz";
    row_4_data_3.style.borderCollapse="Collapse";
    row_4_data_3.style.border="7px solid red";

    let row_4_data_4 = document.createElement('td');
    row_4_data_4.innerHTML = "xyz";
    row_4_data_4.style.borderCollapse="Collapse";
    row_4_data_4.style.border="7px solid red";

    let row_4_data_5 = document.createElement('td');
    row_4_data_5.innerHTML = "Netflix";
    row_4_data_5.style.borderCollapse="Collapse";
    row_4_data_5.style.border="7px solid red";

    row_4.appendChild(row_4_data_1);
    row_4.appendChild(row_4_data_2);
    row_4.appendChild(row_4_data_3);
    row_4.appendChild(row_4_data_4);
    row_4.appendChild(row_4_data_5);
    tbody.appendChild(row_4);

    // Creating and adding data to fifth row of the table
    let row_5 = document.createElement('tr');
    let row_5_data_1 = document.createElement('td');
    row_5_data_1.innerHTML = "xyz";
    row_5_data_1.style.borderCollapse="Collapse";
    row_5_data_1.style.border="7px solid red";

    let row_5_data_2 = document.createElement('td');
    row_5_data_2.innerHTML = "xyz";
    row_5_data_2.style.borderCollapse="Collapse";
    row_5_data_2.style.border="7px solid red";

    let row_5_data_3 = document.createElement('td');
    row_5_data_3.innerHTML = "xyz";
    row_5_data_3.style.borderCollapse="Collapse";
    row_5_data_3.style.border="7px solid red";

    let row_5_data_4 = document.createElement('td');
    row_5_data_4.innerHTML = "xyz";
    row_5_data_4.style.borderCollapse="Collapse";
    row_5_data_4.style.border="7px solid red";

    let row_5_data_5 = document.createElement('td');
    row_5_data_5.innerHTML = "Netflix";
    row_5_data_5.style.borderCollapse="Collapse";
    row_5_data_5.style.border="7px solid red";

    row_5.appendChild(row_5_data_1);
    row_5.appendChild(row_5_data_2);
    row_5.appendChild(row_5_data_3);
    row_5.appendChild(row_5_data_4);
    row_5.appendChild(row_5_data_5);
    tbody.appendChild(row_5);

})();




