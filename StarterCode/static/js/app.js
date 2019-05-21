// from data.js
var tableData = data;
// YOUR CODE HERE!
// Select the submit button
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");


//Adding all the data to table
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    })
});



submit.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the rows that are appended Intially
    tbody.selectAll("*").remove();//selectall("*").remove;
    // console.log("Clearing the sub elements")

    // Select the input element and get the raw HTML node
    //creating a list of values user selected
    var idList = ["datetime", "city", "state", "country", "shape"]
    var userSelectValue = {}
    //var filterData=tableData
    idList.forEach(id => {
        var inputElement = d3.select("#" + id);
        var inputValue = inputElement.property("value");

        // console.log(inputValue)
        //check what all inputs user gave
        if (inputValue != "") {

            userSelectValue[id] = inputValue;
            inputElement.property("value","");
        }
         
    })
    console.log(userSelectValue);
    //     var result = users.filter(search, query);

    function search(user) {
        return Object.keys(this).every((key) => user[key] === this[key]);
    }
    filterTableData = tableData.filter(search, userSelectValue)
    // var filterTableData=[] ;  
    //  Object.entries(userSelectValue).forEach(([key, value]) => {
    //     console.log(key,value)
    //       filterTableData = tableData.filter(item => {
    //         (item.key === value)
    //     }
    //     )
    // })
    console.log(filterTableData);


    filterTableData.forEach((observation)=> {
        var row = tbody.append("tr");
        Object.entries(observation).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
});